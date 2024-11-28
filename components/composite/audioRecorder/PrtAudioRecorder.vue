<template>
  <div :class="['prt-audio-recorder', props.class]">
    <TopButtons
        :is-recording="recorderState.isRecording"
        :is-paused="recorderState.isPaused"
        :has-blob="!!recorderState.blob"
        :is-dragging="recorderState.isDragging"
        @record="handleRecord"
        @pause="handlePause"
        @export="handleExport"
        @add-to-chat="handleAddToChat"
    />

    <StatusBar
        :is-recording="recorderState.isRecording"
        :display-time="displayTime"
        :status-text="getStatusText"
    />

    <div
        class="w-full h-12 bg-neutral-800/40 border border-neutral-700/30 mb-3 px-3 rounded-sm"
        @pointerdown.stop
        @click.stop
    >
      <div
          v-if="!recorderState.isRecording && recorderState.blob"
          class="relative w-full h-full flex items-center"
          @click.stop="onTrackClick"
          @pointerdown.stop
      >
        <PrtSlider
            :model-value="currentPosition"
            :disabled="recorderState.isRecording || !recorderState.blob"
            :min="0"
            :max="sliderMaxValue"
            :step="0.1"
            @update:model-value="handleSliderChange"
            @start="handleSliderDragStart"
            @end="handleSliderDragEnd"
            bg-color="bg-neutral-700/50"
            range-color="bg-el-7"
            handle-color="bg-white"
            class="pointer-events-auto z-10"
        />
      </div>
      <div v-else class="w-full h-full flex items-center justify-center">
        <span class="text-[11px] text-neutral-500 font-medium">
          {{ recorderState.isRecording ? 'Recording...' : 'No recording available' }}
        </span>
      </div>
    </div>

    <BottomButtons
        :is-playing="recorderState.isPlaying"
        :is-recording="recorderState.isRecording"
        :has-blob="!!recorderState.blob"
        :is-dragging="recorderState.isDragging"
        @playback="handlePlayback"
        @stop="handleStop"
        @erase="handleErase"
        @append="handleAppend"
    />

    <div v-if="recorderState.error" class="mt-2 px-2 py-1.5 text-xs text-red-500 bg-red-500/10 rounded-sm">
      {{ recorderState.error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRecorder } from './useRecorder';
import type { AudioRecorderProps } from './types';

import TopButtons from './TopButtons.vue';
import BottomButtons from './BottomButtons.vue';
import StatusBar from './StatusBar.vue';
import PrtSlider from '../../base/slider/PrtSlider.vue';

const props = withDefaults(defineProps<AudioRecorderProps>(), {
  maxDuration: 300,
  class: '',
});

const emit = defineEmits<{
  save: [blob: Blob];
  addToChat: [blob: Blob];
}>();

const {
  state: recorderState,
  startRecording, stopRecording, pauseRecording, resumeRecording,
  appendRecording, eraseRecording, playRecording, stopPlayback,
  seekToPosition, startDragging, stopDragging,
} = useRecorder(props.maxDuration);

const currentPosition = computed(() =>
    recorderState.isDragging ? recorderState.currentTime
        : recorderState.isRecording ? recorderState.recordingElapsedTime
            : recorderState.currentTime || recorderState.lastKnownPosition || 0
);

const sliderMaxValue = computed(() =>
    recorderState.recordingElapsedTime > 0 ? recorderState.recordingElapsedTime : 0.1
);

const displayTime = computed(() =>
    recorderState.isRecording ? recorderState.recordingElapsedTime : recorderState.currentTime || 0
);

const getStatusText = computed(() =>
    recorderState.isRecording
        ? recorderState.isPaused ? 'Paused' : 'Recording...'
        : recorderState.isPlaying
            ? recorderState.isDragging ? 'Seeking...' : 'Playing'
            : recorderState.blob ? 'Ready' : 'No Recording'
);

const handleRecord = () => {
  if (recorderState.isDragging) return;
  recorderState.isRecording ? stopRecording() : startRecording();
};

const handlePause = () => {
  if (recorderState.isDragging) return;
  recorderState.isPaused ? resumeRecording() : pauseRecording();
};

const handleExport = () => {
  if (recorderState.isDragging || !recorderState.blob) return;

  const url = URL.createObjectURL(recorderState.blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `recording_${formatDateForFilename()}.ogg`;
  a.click();
  URL.revokeObjectURL(url);
  emit('save', recorderState.blob);
};

const handleAddToChat = () => {
  if (recorderState.isDragging || !recorderState.blob) return;
  emit('addToChat', recorderState.blob);
};

const handlePlayback = async () => {
  if (recorderState.isDragging || !recorderState.blob) return;
  recorderState.isPlaying ? stopPlayback() : await playRecording();
};

const handleStop = () => recorderState.isDragging || stopPlayback();

const handleErase = () => recorderState.isDragging || eraseRecording();

const handleAppend = () => {
  if (recorderState.isDragging || !recorderState.blob || recorderState.isRecording) return;
  appendRecording();
};

const onTrackClick = async (event: MouseEvent) => {
  if (recorderState.isDragging || !recorderState.blob || !recorderState.audioPlayer) return;

  const { left, width } = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (event.clientX - left) / width));

  const newTime = percent * sliderMaxValue.value;
  Object.assign(recorderState, { currentTime: newTime, lastKnownPosition: newTime });

  await seekToPosition(newTime);
};

const handleSliderDragStart = () =>
    !recorderState.isRecording && startDragging();

const handleSliderDragEnd = async () =>
    !recorderState.isRecording && stopDragging();

const handleSliderChange = async (value: number | number[]) => {
  const numericValue = Array.isArray(value) ? value[0] : value;

  if (!isNaN(numericValue) && isFinite(numericValue) && recorderState.audioPlayer && !recorderState.isRecording) {
    Object.assign(recorderState, {
      currentTime: numericValue,
      lastKnownPosition: numericValue
    });

    !recorderState.isDragging && (await seekToPosition(numericValue));
  }
};

const formatDateForFilename = () => {
  const now = new Date();
  const parts = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0')
  ];
  return parts.join('-');
};
</script>

<style scoped>
.prt-audio-recorder {
  @apply w-full bg-neutral-900/50 p-4 rounded-lg;
}
</style>