<template>
  <div class="bottom-buttons" @click.stop>
    <button
        class="bottom-buttons__button"
        :class="{ 'bottom-buttons__button--disabled': !hasBlob || isDragging }"
        :disabled="!hasBlob || isDragging"
        @click.stop="$emit('playback')"
    >
      <Play v-if="!isPlaying" class="bottom-buttons__icon" />
      <Pause v-else class="bottom-buttons__icon" />
      <span class="bottom-buttons__text">
        {{ isPlaying ? 'PAUSE' : 'PLAY' }}
      </span>
    </button>
    <button
        class="bottom-buttons__button"
        :class="{ 'bottom-buttons__button--disabled': !isPlaying || isDragging }"
        :disabled="!isPlaying || isDragging"
        @click.stop="$emit('stop')"
    >
      <Square class="bottom-buttons__icon" />
      <span class="bottom-buttons__text">STOP</span>
    </button>
    <button
        class="bottom-buttons__button"
        :class="{ 'bottom-buttons__button--disabled': !hasBlob || isDragging }"
        :disabled="!hasBlob || isDragging"
        @click.stop="$emit('erase')"
    >
      <Eraser class="bottom-buttons__icon" />
      <span class="bottom-buttons__text">ERASE</span>
    </button>
    <button
        class="bottom-buttons__button"
        :class="{ 'bottom-buttons__button--disabled': !hasBlob || isRecording || isDragging }"
        :disabled="!hasBlob || isRecording || isDragging"
        @click.stop="$emit('append')"
    >
      <FilePlus2 class="bottom-buttons__icon" />
      <span class="bottom-buttons__text">APPEND</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Play, Pause, Square, Eraser, FilePlus2 } from 'lucide-vue-next'

defineProps<{
  isPlaying: boolean
  isRecording: boolean
  hasBlob: boolean
  isDragging: boolean
}>()

defineEmits<{
  playback: []
  stop: []
  erase: []
  append: []
}>()
</script>

<style scoped>
.bottom-buttons {
  @apply flex items-stretch gap-0.5;
}

.bottom-buttons__button {
  @apply flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm;
}

.bottom-buttons__button--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.bottom-buttons__icon {
  @apply w-3 h-3;
}

.bottom-buttons__text {
  @apply text-[11px] font-medium tracking-wide;
}
</style>