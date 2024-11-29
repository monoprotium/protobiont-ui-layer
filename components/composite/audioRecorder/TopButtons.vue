<template>
  <div class="top-buttons">
    <button class="top-buttons__button" @click="$emit('record')">
      <Mic v-if="!isRecording" class="top-buttons__icon" />
      <Square v-else class="top-buttons__icon" />
      <span class="top-buttons__text hidden md:inline">
        {{ isRecording ? 'STOP' : 'RECORD' }}
      </span>
    </button>
    <button
        class="top-buttons__button"
        :class="{ 'top-buttons__button--disabled': !isRecording }"
        :disabled="!isRecording"
        @click="$emit('pause')"
    >
      <Pause v-if="!isPaused" class="top-buttons__icon" />
      <Play v-else class="top-buttons__icon" />
      <span class="top-buttons__text hidden md:inline">
        {{ isPaused ? 'RESUME' : 'PAUSE' }}
      </span>
    </button>
    <button
        class="top-buttons__button"
        :class="{ 'top-buttons__button--disabled': !hasBlob }"
        :disabled="!hasBlob"
        @click="$emit('export')"
    >
      <Save class="top-buttons__icon" />
      <span class="top-buttons__text hidden md:inline">EXPORT</span>
    </button>
    <button
        class="top-buttons__button"
        :class="{ 'top-buttons__button--disabled': !hasBlob }"
        :disabled="!hasBlob"
        @click="$emit('addToChat')"
    >
      <MessagesSquare class="top-buttons__icon" />
      <span class="top-buttons__text hidden md:inline">+ CHAT</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Mic, Square, Play, Pause, Save, MessagesSquare } from 'lucide-vue-next'

defineProps<{
  isRecording: boolean
  isPaused: boolean
  hasBlob: boolean
}>();

defineEmits<{
  record: []
  pause: []
  export: []
  addToChat: []
}>();
</script>

<style scoped>
.top-buttons {
  @apply flex items-stretch gap-0.5 mb-3;
}

.top-buttons__button {
  @apply flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2
  transition-colors flex items-center justify-center gap-1.5 rounded-sm;
}

.top-buttons__button--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.top-buttons__icon {
  @apply w-3 h-3;
}

.top-buttons__text {
  @apply text-[11px] font-medium tracking-wide;
}
</style>

