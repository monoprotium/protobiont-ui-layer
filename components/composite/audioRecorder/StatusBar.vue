
<template>
  <div class="flex items-center justify-between px-1 mb-2">
    <div class="flex items-center gap-1.5">
      <div
          :class="[
          'w-1 h-1 rounded-full transition-colors duration-300',
          isRecording ? 'bg-red-500 animate-pulse' : 'bg-neutral-400'
        ]"
      />
      <span class="font-mono text-[11px] text-neutral-300">{{ formatTime(displayTime) }}</span>
    </div>
    <span class="text-[11px] text-neutral-400 font-medium">{{ statusText }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isRecording: boolean
  displayTime: number
  statusText: string
}>()

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
</script>