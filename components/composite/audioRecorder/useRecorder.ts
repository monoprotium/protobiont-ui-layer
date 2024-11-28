import { reactive, ref, onUnmounted } from 'vue';
import type { AudioRecorderState } from './types';

export const useRecorder = (maxDuration: number) => {
    const state = reactive<AudioRecorderState>({
        isRecording: false,
        isPaused: false,
        duration: 0,
        blob: null,
        error: null,
        isPlaying: false,
        audioPlayer: null,
        initializing: false,
        currentTime: 0,
        lastKnownPosition: 0,
        wasPlaying: false,
        recordingElapsedTime: 0,
        isDragging: false,
        isAppended: false,
        seekInProgress: false
    });

    const mediaRecorder = ref<MediaRecorder | null>(null);
    const audioChunks = ref<Blob[]>([]);
    const existingRecording = ref<Blob | null>(null);
    const startTime = ref(0);
    const timerInterval = ref<number | null>(null);
    const playbackInterval = ref<number | null>(null);
    const seekTimeout = ref<number | null>(null);

    const clearTimeouts = () => {
        if (seekTimeout.value) {
            clearTimeout(seekTimeout.value);
            seekTimeout.value = null;
        }
    };

    const cleanupTimers = () => {
        clearTimeouts();
        if (timerInterval.value) {
            clearInterval(timerInterval.value);
            timerInterval.value = null;
        }
        if (playbackInterval.value) {
            clearInterval(playbackInterval.value);
            playbackInterval.value = null;
        }
    };

    const resetPlaybackPosition = async () => {
        clearTimeouts();
        if (state.audioPlayer) {
            try {
                state.audioPlayer.pause();
                state.audioPlayer.currentTime = 0;
                await state.audioPlayer.load();
            } catch {}
        }
        state.currentTime = 0;
        state.lastKnownPosition = 0;
        state.isPlaying = false;
        state.isDragging = false;
        state.seekInProgress = false;
    };

    const updateAudioPlayer = async (blob: Blob) => {
        try {
            const url = URL.createObjectURL(blob);
            const newPlayer = new Audio();
            newPlayer.preload = 'auto';

            await new Promise<void>((resolve, reject) => {
                const onLoaded = () => {
                    if (state.audioPlayer) {
                        state.audioPlayer.pause();
                        URL.revokeObjectURL(state.audioPlayer.src);
                    }
                    state.audioPlayer = newPlayer;
                    newPlayer.addEventListener('timeupdate', () => {
                        if (!state.isDragging && !state.seekInProgress) {
                            state.currentTime = Math.min(newPlayer.currentTime, state.recordingElapsedTime);
                            state.lastKnownPosition = Math.min(newPlayer.currentTime, state.recordingElapsedTime);
                        }
                    });
                    newPlayer.addEventListener('play', () => state.isPlaying = true);
                    newPlayer.addEventListener('pause', () => state.isPlaying = false);
                    newPlayer.addEventListener('seeking', () => state.seekInProgress = true);
                    newPlayer.addEventListener('seeked', () => {
                        if (!state.isDragging) state.seekInProgress = false;
                    });
                    newPlayer.addEventListener('ended', async () => {
                        state.isPlaying = false;
                        await resetPlaybackPosition();
                    });
                    resolve();
                };
                const onError = () => {
                    URL.revokeObjectURL(url);
                    reject(new Error('Failed to load audio'));
                };
                newPlayer.addEventListener('loadedmetadata', onLoaded, { once: true });
                newPlayer.addEventListener('error', onError, { once: true });
                newPlayer.src = url;
            });
            return true;
        } catch {
            return false;
        }
    };

    const seekToPosition = async (time: number) => {
        if (!state.audioPlayer || !isFinite(time) || time < 0 || time > state.recordingElapsedTime) return;
        try {
            const wasPlaying = state.isPlaying;
            state.currentTime = time;
            state.lastKnownPosition = time;
            state.seekInProgress = true;
            if (wasPlaying) state.audioPlayer.pause();
            state.audioPlayer.currentTime = time;
            if (wasPlaying && !state.isDragging) {
                await state.audioPlayer.play();
                state.isPlaying = true;
            }
        } catch {} finally {
            if (!state.isDragging) state.seekInProgress = false;
        }
    };

    const startDragging = () => {
        if (state.audioPlayer) {
            state.isDragging = true;
            state.wasPlaying = state.isPlaying;
            if (state.isPlaying) {
                state.audioPlayer.pause();
                state.isPlaying = false;
            }
        }
    };

    const stopDragging = async () => {
        if (state.audioPlayer) {
            try {
                await seekToPosition(state.currentTime);
                if (state.wasPlaying) {
                    await state.audioPlayer.play();
                    state.isPlaying = true;
                }
            } catch {} finally {
                state.isDragging = false;
                state.wasPlaying = false;
                state.seekInProgress = false;
            }
        }
    };

    const startTimer = () => {
        startTime.value = Date.now() - state.recordingElapsedTime * 1000;
        cleanupTimers();
        timerInterval.value = window.setInterval(() => {
            state.recordingElapsedTime = Math.min((Date.now() - startTime.value) / 1000, maxDuration);
        }, 100);
    };

    const monitorPlayback = () => {
        cleanupTimers();
        if (state.audioPlayer) {
            playbackInterval.value = window.setInterval(() => {
                if (state.audioPlayer && state.isPlaying && !state.isDragging && !state.seekInProgress) {
                    state.currentTime = Math.min(state.audioPlayer.currentTime, state.recordingElapsedTime);
                    state.lastKnownPosition = Math.min(state.audioPlayer.currentTime, state.recordingElapsedTime);
                }
            }, 50);
        }
    };

    const initMediaRecorder = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.value = new MediaRecorder(stream);
            mediaRecorder.value.ondataavailable = (event) => {
                if (event.data.size > 0) audioChunks.value.push(event.data);
            };
            mediaRecorder.value.onstop = async () => {
                const currentRecordingBlob = new Blob(audioChunks.value, { type: 'audio/webm' });
                if (existingRecording.value) {
                    state.isAppended = true;
                    state.blob = new Blob([
                        new Uint8Array(await existingRecording.value.arrayBuffer()),
                        new Uint8Array(await currentRecordingBlob.arrayBuffer())
                    ], { type: 'audio/webm' });
                    existingRecording.value = null;
                } else {
                    state.isAppended = false;
                    state.blob = currentRecordingBlob;
                }
                await resetPlaybackPosition();
                await updateAudioPlayer(state.blob);
            };
        } catch {
            state.error = 'Could not access microphone';
            state.initializing = false;
        }
    };

    const startRecording = async () => {
        state.error = null;
        if (!mediaRecorder.value) await initMediaRecorder();
        if (mediaRecorder.value?.state === 'inactive') {
            audioChunks.value = [];
            mediaRecorder.value.start(100);
            state.isRecording = true;
            startTimer();
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.value?.state === 'recording') {
            mediaRecorder.value.stop();
            state.isRecording = false;
            cleanupTimers();
        }
    };

    const appendRecording = async () => {
        if (state.blob) {
            try {
                existingRecording.value = state.blob;
                const previousElapsedTime = state.recordingElapsedTime;
                await resetPlaybackPosition();
                cleanupTimers();
                state.recordingElapsedTime = previousElapsedTime;
                await startRecording();
            } catch {}
        }
    };

    const pauseRecording = () => {
        if (mediaRecorder.value?.state === 'recording') {
            mediaRecorder.value.pause();
            state.isPaused = true;
            cleanupTimers();
        }
    };

    const resumeRecording = () => {
        if (mediaRecorder.value?.state === 'paused') {
            mediaRecorder.value.resume();
            state.isPaused = false;
            startTimer();
        }
    };

    const playRecording = async () => {
        if (state.audioPlayer && state.blob && !state.isDragging && !state.seekInProgress) {
            try {
                await seekToPosition(Math.max(0, Math.min(state.lastKnownPosition, state.recordingElapsedTime)));
                state.isPlaying = true;
                await state.audioPlayer.play();
                monitorPlayback();
            } catch {
                state.error = 'Error playing recording';
                state.isPlaying = false;
                await resetPlaybackPosition();
            }
        }
    };

    const stopPlayback = async () => {
        if (!state.isDragging && !state.seekInProgress) {
            await resetPlaybackPosition();
            cleanupTimers();
        }
    };

    const eraseRecording = async () => {
        if (!state.isDragging && !state.seekInProgress) {
            if (state.audioPlayer) {
                state.audioPlayer.pause();
                URL.revokeObjectURL(state.audioPlayer.src);
            }
            state.blob = null;
            state.isPlaying = false;
            state.recordingElapsedTime = 0;
            state.isAppended = false;
            existingRecording.value = null;
            await resetPlaybackPosition();
            cleanupTimers();
        }
    };

    onUnmounted(() => {
        cleanupTimers();
        if (mediaRecorder.value) {
            mediaRecorder.value.stream.getTracks().forEach((track) => track.stop());
        }
        if (state.audioPlayer) {
            state.audioPlayer.pause();
            URL.revokeObjectURL(state.audioPlayer.src);
        }
    });

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