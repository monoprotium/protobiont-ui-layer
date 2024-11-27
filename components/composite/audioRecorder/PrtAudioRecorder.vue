<template>
  <div :class="[
    'prt-audio-recorder',
    containerClasses,
    props.class
  ]">
    <!-- Top Controls -->
    <div class="flex items-stretch gap-0.5 mb-3">
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          @click="handleRecord"
      >
        <Mic v-if="!recorderState.isRecording" class="w-3 h-3" />
        <Square v-else class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">
          {{ recorderState.isRecording ? 'STOP' : 'RECORD' }}
        </span>
      </button>
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.isRecording }"
          :disabled="!recorderState.isRecording"
          @click="handlePause"
      >

        <Pause v-if="!recorderState.isRecording" class="w-3 h-3" />
        <Play v-else class="w-3 h-3" />

        <span class="text-[11px] font-medium tracking-wide">
          {{ recorderState.isPaused ? 'RESUME' : 'PAUSE ' }}
        </span>
      </button>

      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.blob }"
          :disabled="!recorderState.blob"
          @click="handleExport"
      >
        <Save class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">EXPORT</span>
      </button>
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.blob }"
          :disabled="!recorderState.blob"
          @click="handleAddToChat"
      >
        <MessagesSquare class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">+  CHAT</span>
      </button>
    </div>

    <!-- Status Line -->
    <div class="flex items-center justify-between px-1 mb-2">
      <div class="flex items-center gap-1.5">
        <div :class="[
          'w-1 h-1 rounded-full transition-colors duration-300',
          recorderState.isRecording ? 'bg-red-500 animate-pulse' : 'bg-neutral-400'
        ]" />
        <span class="font-mono text-[11px] text-neutral-300">{{ formatTime(displayTime) }}</span>
      </div>
      <span class="text-[11px] text-neutral-400 font-medium">
        {{ getStatusText }}
      </span>
    </div>

    <!-- Waveform/Progress Area -->
    <div class="w-full h-12 bg-neutral-800/40 border border-neutral-700/30 mb-3 px-3 rounded-sm">
      <div
          v-if="recorderState.blob"
          class="relative w-full h-full flex items-center"
          @click="handleTrackClick"
      >
        <PrtSlider
            v-model="currentTimeValue"
            :disabled="recorderState.isRecording"
            :min="0"
            :max="audioDuration"
            @change="handleSliderChange"
            @start="handleSliderDragStart"
            @end="handleSliderDragEnd"
            bg-color="bg-neutral-700/50"
            range-color="bg-el-7"
            handle-color="bg-white"
        />
      </div>
      <div v-else class="w-full h-full flex items-center justify-center">
        <span class="text-[11px] text-neutral-500 font-medium">No recording available</span>
      </div>
    </div>

    <!-- Bottom Controls -->
    <div class="flex items-stretch gap-0.5">
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.blob }"
          :disabled="!recorderState.blob"
          @click="handlePlayback"
      >
        <Play v-if="!recorderState.isPlaying" class="w-3 h-3" />
        <Pause v-else class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">
          {{ recorderState.isPlaying ? 'PAUSE' : 'PLAY' }}
        </span>
      </button>
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.isPlaying }"
          :disabled="!recorderState.isPlaying"
          @click="handleStop"
      >
        <Square class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">STOP</span>
      </button>
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.blob }"
          :disabled="!recorderState.blob"
          @click="handleErase"
      >
        <Eraser class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">ERASE</span>
      </button>
      <button
          class="flex-1 bg-el-7/90 hover:bg-el-7 text-white text-xs py-1 px-2 transition-colors flex items-center justify-center gap-1.5 rounded-sm"
          :class="{ 'opacity-50 cursor-not-allowed': !recorderState.blob || recorderState.isRecording }"
          :disabled="!recorderState.blob || recorderState.isRecording"
          @click="handleAppend"
      >
        <FilePlus2 class="w-3 h-3" />
        <span class="text-[11px] font-medium tracking-wide">APPEND</span>
      </button>

    </div>

    <!-- Error Message -->
    <div
        v-if="recorderState.error"
        class="mt-2 px-2 py-1.5 text-xs text-red-500 bg-red-500/10 rounded-sm"
    >
      {{ recorderState.error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch,onUnmounted } from 'vue'
import { useDebounce, useEventListener, useIntervalFn } from '@vueuse/core'
import {
  Mic, Square, Play, Pause, Save,
  MessagesSquare, Eraser, FilePlus2
} from 'lucide-vue-next'
import type { AudioRecorderProps } from './types'
import { useRecorder } from './useRecorder'
import { recorderVariants } from './variants'

const props = withDefaults(defineProps<AudioRecorderProps>(), {
  maxDuration: 300,
  variant: 'default',
  size: 'base',
  class: ''
})

const emit = defineEmits<{
  save: [blob: Blob]
  addToChat: [blob: Blob]
}>()

const {
  state: recorderState,
  startRecording,
  stopRecording,
  pauseRecording,
  resumeRecording,
  appendRecording,
  eraseRecording,
  playRecording,
  stopPlayback,
  setCurrentTime,
  audioPlayer,
} = useRecorder()

// Playback state
const isDraggingSlider = ref(false)
const currentTimeValue = ref(0)
const audioDuration = ref(0)

// Update audio duration when blob changes
watch(() => recorderState.value.blob, async () => {
  if (recorderState.value.blob) {
    const tempAudio = new Audio(URL.createObjectURL(recorderState.value.blob))
    await new Promise((resolve) => {
      tempAudio.addEventListener('loadedmetadata', () => {
        audioDuration.value = tempAudio.duration
        resolve(null)
      })
    })
  } else {
    audioDuration.value = 0
    currentTimeValue.value = 0
  }
})

// Debounced slider
const debouncedSliderValue = useDebounce(currentTimeValue, 50)

// Watch for slider value changes and update audio position
watch(debouncedSliderValue, (newValue) => {
  if (isDraggingSlider.value && audioPlayer.value) {
    setCurrentTime(newValue)
  }
})

// Update slider position during playback
const { pause: pauseTimeUpdate, resume: resumeTimeUpdate } = useIntervalFn(() => {
  if (audioPlayer.value && !isDraggingSlider.value && recorderState.value.isPlaying) {
    currentTimeValue.value = audioPlayer.value.currentTime
  }
}, 50)

// Start updating time when playing
watch(() => recorderState.value.isPlaying, (isPlaying) => {
  if (isPlaying) {
    resumeTimeUpdate()
  } else {
    pauseTimeUpdate()
  }
})

// Slider handler
const handleTrackClick = async (event: MouseEvent) => {
  if (!recorderState.value.blob || !audioPlayer.value) return

  const target = event.currentTarget as HTMLDivElement
  if (!target) return

  // Calculate relative position
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const percent = x / rect.width
  const newTime = percent * audioDuration.value

  // Update the time and slider
  currentTimeValue.value = Math.max(0, Math.min(newTime, audioDuration.value))
  setCurrentTime(currentTimeValue.value)

  // Handle playback state
  if (recorderState.value.isPlaying) {
    await audioPlayer.value.play()
  }
}

const handleSliderDragStart = () => {
  isDraggingSlider.value = true
  if (recorderState.value.isPlaying) {
    audioPlayer.value?.pause()
  }
}

const handleSliderDragEnd = () => {
  isDraggingSlider.value = false
  if (recorderState.value.isPlaying) {
    audioPlayer.value?.play()
  }
}

const handleSliderChange = (value:number) => currentTimeValue.value = value;

// Compute display time based on context
const displayTime = computed(() => {
  if (recorderState.value.isRecording) {
    return recorderState.value.duration
  }
  return currentTimeValue.value
})

const containerClasses = computed(() => {
  return recorderVariants({
    variant: props.variant as any,
    size: props.size as any
  })
})

const getStatusText = computed(() => {
  if (recorderState.value.isRecording) {
    return recorderState.value.isPaused ? 'Paused' : 'Recording...'
  }
  if (recorderState.value.isPlaying) {
    return 'Playing'
  }
  return recorderState.value.blob ? 'Ready' : 'No Recording'
})

// Audio cleanup on unmount
onUnmounted(() => {
  pauseTimeUpdate()
  if (audioPlayer.value) {
    audioPlayer.value.pause()
    audioPlayer.value = null
  }
})

// Format time display
const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) {
    return '00:00'
  }
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}


const formatDateForFilename = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hour = String(now.getHours()).padStart(2, '0')
  const minute = String(now.getMinutes()).padStart(2, '0')
  const second = String(now.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day}__${hour}-${minute}-${second}`
}

// Top row handlers
const handleRecord = () => recorderState.value.isRecording ? stopRecording() : startRecording();
const handleAddToChat = () => recorderState.value.blob ? emit('addToChat', recorderState.value.blob) : null;
const handleExport = () => {
  if (recorderState.value.blob) {
    const url = URL.createObjectURL(recorderState.value.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `recording_${formatDateForFilename()}.ogg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}

// Bottom row handlers
const handlePlayback = () => recorderState.value.blob ? (recorderState.value.isPlaying ? stopPlayback() : playRecording()) : null;
const handleStop = () => stopPlayback();
const handleErase = () => eraseRecording();
const handleAppend = () => recorderState.value.blob && !recorderState.value.isRecording ? appendRecording() : null;
const handlePause = () => recorderState.value.isPaused ? resumeRecording() : pauseRecording();
</script>