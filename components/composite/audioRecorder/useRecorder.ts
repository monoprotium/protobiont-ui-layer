import { reactive, ref, onUnmounted } from 'vue';
import type { AudioRecorderState } from './types';
import { useDSP } from './useDSP';

export const useRecorder = (maxDuration: number) => {
  const state = reactive<AudioRecorderState>({
    isRecording: false, isPaused: false, duration: 0, blob: null,
    error: null, isPlaying: false, audioPlayer: null, initializing: false,
    currentTime: 0, lastKnownPosition: 0, wasPlaying: false,
    recordingElapsedTime: 0, isDragging: false, isAppended: false,
    seekInProgress: false, totalDuration: 0
  });

  const mediaRecorder = ref<MediaRecorder | null>(null);
  const audioChunks = ref<Blob[]>([]);
  const existingRecording = ref<Blob | null>(null);
  const startTime = ref(0);
  const timerInterval = ref<number | null>(null);
  const playbackInterval = ref<number | null>(null);
  const playbackMonitor = ref<number | null>(null);

  const dsp = useDSP();

  const cleanupTimers = () => [timerInterval, playbackInterval, playbackMonitor]
      .forEach(timer => timer.value && (clearInterval(timer.value), timer.value = null));

  const resetPlaybackPosition = async () =>
      !state.audioPlayer || (
          cleanupTimers(),
              state.audioPlayer.pause(),
              state.audioPlayer.currentTime = 0,
              state.audioPlayer.load(),
              Object.assign(state, {
                currentTime: 0, lastKnownPosition: 0, isPlaying: false,
                isDragging: false, seekInProgress: false
              })
      );

  const handlePlaybackEnd = async () => {
    cleanupTimers();
    if (!state.audioPlayer) return;

    try {
      state.audioPlayer.pause();
      state.audioPlayer.currentTime = 0;
      Object.assign(state, {
        isPlaying: false, currentTime: 0, lastKnownPosition: 0
      });
    } catch (error) {
      console.error('Error handling playback end:', error);
    }
  };

  const startPlaybackMonitoring = () => (
      playbackMonitor.value && clearInterval(playbackMonitor.value),
          playbackMonitor.value = window.setInterval(() => {
            if (!state.audioPlayer || state.isDragging || state.seekInProgress) return;
            state.currentTime = state.lastKnownPosition = state.audioPlayer.currentTime;
            state.currentTime >= state.totalDuration - 0.1 && handlePlaybackEnd();
          }, 50)
  );

  const updateAudioPlayer = async (blob: Blob): Promise<boolean> => {
    try {
      const url = URL.createObjectURL(blob);
      const newPlayer = new Audio();
      newPlayer.preload = 'auto';

      await new Promise<void>((resolve, reject) => {
        const onLoaded = async () => {
          state.audioPlayer?.pause();
          state.audioPlayer && URL.revokeObjectURL(state.audioPlayer.src);
          state.audioPlayer = newPlayer;

          newPlayer.addEventListener('timeupdate', () => {
            if (state.isDragging || state.seekInProgress) return;
            state.currentTime = state.lastKnownPosition = newPlayer.currentTime;
            state.currentTime >= state.totalDuration - 0.1 && handlePlaybackEnd();
          });

          newPlayer.addEventListener('play', () => (state.isPlaying = true, startPlaybackMonitoring()));
          newPlayer.addEventListener('pause', () => !state.seekInProgress && (state.isPlaying = false));
          newPlayer.addEventListener('seeking', () => (state.seekInProgress = true));
          newPlayer.addEventListener('seeked', () => !state.isDragging && (state.seekInProgress = false));
          newPlayer.addEventListener('ended', handlePlaybackEnd);
          resolve();
        };

        newPlayer.addEventListener('loadedmetadata', onLoaded, { once: true });
        newPlayer.addEventListener('error', () => (URL.revokeObjectURL(url), reject(new Error('Failed to load audio'))), { once: true });
        newPlayer.src = url;
      });
      return true;
    } catch (error) {
      console.error('Error updating audio player:', error);
      return false;
    }
  };

  const initMediaRecorder = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.value = new MediaRecorder(stream);

      mediaRecorder.value.ondataavailable = ({ data }) =>
          data.size > 0 && audioChunks.value.push(data);

      mediaRecorder.value.onstop = async () => {
        const currentRecordingBlob = new Blob(audioChunks.value, { type: 'audio/webm; codecs=opus' });

        if (existingRecording.value) {
          state.isAppended = true;
          const mergedBlob = await dsp.mergeAudioBlobs([existingRecording.value, currentRecordingBlob]);

          if (mergedBlob) {
            const duration = await dsp.updateDurationFromBlob(mergedBlob);
            state.blob = mergedBlob;
            existingRecording.value = null;
            await updateAudioPlayer(mergedBlob);
            Object.assign(state, { totalDuration: duration, duration, recordingElapsedTime: duration });
          } else {
            state.error = 'Error merging recordings';
          }
        } else {
          state.isAppended = false;
          state.blob = currentRecordingBlob;
          const duration = await dsp.updateDurationFromBlob(currentRecordingBlob);
          Object.assign(state, { totalDuration: duration, duration, recordingElapsedTime: duration });
          await updateAudioPlayer(currentRecordingBlob);
        }
        audioChunks.value = [];
      };
    } catch (error) {
      console.error('Media recorder init error:', error);
      state.error = 'Could not access microphone';
      state.initializing = false;
    }
  };

  const startTimer = () => (
      startTime.value = Date.now() - (state.recordingElapsedTime * 1000),
          cleanupTimers(),
          timerInterval.value = window.setInterval(() =>
              state.recordingElapsedTime = Math.min((Date.now() - startTime.value) / 1000, maxDuration), 100)
  );

  const startRecording = async () => {
    state.error = null;
    !mediaRecorder.value && await initMediaRecorder();

    if (mediaRecorder.value?.state === 'inactive') {
      audioChunks.value = [];
      mediaRecorder.value.start(100);
      state.isRecording = true;
      startTimer();
    }
  };

  const stopRecording = () => mediaRecorder.value?.state === 'recording' &&
      (mediaRecorder.value.stop(), state.isRecording = false, cleanupTimers());

  const pauseRecording = () => mediaRecorder.value?.state === 'recording' &&
      (mediaRecorder.value.pause(), state.isPaused = true, cleanupTimers());

  const resumeRecording = () => mediaRecorder.value?.state === 'paused' &&
      (mediaRecorder.value.resume(), state.isPaused = false, startTimer());

  const startDragging = () => state.audioPlayer &&
      (state.isDragging = true, state.wasPlaying = state.isPlaying,
      state.isPlaying && (state.audioPlayer.pause(), state.isPlaying = false));

  const stopPlayback = async () => !state.isDragging && !state.seekInProgress &&
      (state.audioPlayer?.pause(), await resetPlaybackPosition());

  const appendRecording = async () => {
    if (!state.blob) return;

    try {
      existingRecording.value = state.blob;
      const previousDuration = state.totalDuration;
      await resetPlaybackPosition();
      cleanupTimers();
      state.recordingElapsedTime = previousDuration;
      await startRecording();
    } catch (error) {
      console.error('Append recording error:', error);
      state.error = 'Failed to append recording';
    }
  };

  const stopDragging = async () => {
    if (!state.audioPlayer) return;

    try {
      await seekToPosition(state.currentTime);
      state.wasPlaying && (
          await state.audioPlayer.play(),
              state.isPlaying = true,
              startPlaybackMonitoring()
      );
    } catch (error) {
      console.error('Stop dragging error:', error);
    } finally {
      Object.assign(state, {
        isDragging: false,
        wasPlaying: false,
        seekInProgress: false
      });
    }
  };

  const playRecording = async () => {
    if (!state.audioPlayer || !state.blob || state.isDragging || state.seekInProgress) return;

    try {
      state.currentTime >= state.totalDuration - 0.1 && await resetPlaybackPosition();
      const position = Math.max(0, Math.min(state.lastKnownPosition, state.totalDuration));
      await seekToPosition(position);
      state.isPlaying = true;
      await state.audioPlayer.play();
      startPlaybackMonitoring();
    } catch (error) {
      console.error('Play recording error:', error);
      state.error = 'Error playing recording';
      state.isPlaying = false;
      await resetPlaybackPosition();
    }
  };

  const seekToPosition = async (time: number) => {
    if (!state.audioPlayer || !isFinite(time) || time < 0 || time > state.totalDuration) return;

    try {
      const wasPlaying = state.isPlaying;
      wasPlaying && (state.audioPlayer.pause(), state.isPlaying = false);

      Object.assign(state, {
        currentTime: time,
        lastKnownPosition: time,
        seekInProgress: true
      });

      state.audioPlayer.currentTime = time;

      if (wasPlaying && !state.isDragging) {
        await state.audioPlayer.play();
        state.isPlaying = true;
        startPlaybackMonitoring();
      }
    } catch (error) {
      console.error('Seek error:', error);
    } finally {
      !state.isDragging && (state.seekInProgress = false);
    }
  };

  const eraseRecording = async () => {
    if (state.isDragging || state.seekInProgress) return;

    state.audioPlayer && (
        state.audioPlayer.pause(),
            URL.revokeObjectURL(state.audioPlayer.src),
            state.audioPlayer = null
    );

    Object.assign(state, {
      blob: null, isPlaying: false, recordingElapsedTime: 0,
      duration: 0, totalDuration: 0, isAppended: false
    });

    existingRecording.value = null;
    await resetPlaybackPosition();
    cleanupTimers();
  };

  onUnmounted(() => (
      cleanupTimers(),
          mediaRecorder.value?.stream.getTracks().forEach(track => track.stop()),
      state.audioPlayer && (state.audioPlayer.pause(), URL.revokeObjectURL(state.audioPlayer.src)),
          dsp.getAudioContext().close()
  ));

  return {
    state,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    playRecording,
    stopPlayback,
    eraseRecording,
    appendRecording,
    seekToPosition,
    startDragging,
    stopDragging
  };
};