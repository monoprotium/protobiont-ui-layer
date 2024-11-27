<template>
  <div :class="[
    'prt-audio-player rounded',
    containerClasses,
    props.class
  ]">
    <div class="flex items-center gap-3 p-3 pr-5">
      <!-- Play/Pause Button -->
      <PrtBtn
          @click="handlePlayPause"
          class="!p-0 !w-8 !h-8 !rounded-full flex-shrink-0 mr-2"
          color="bg-el-7"
      >
        <Pause v-if="state.isPlaying" class="w-3 h-3" />
        <Play v-else class="w-3 h-3" />
      </PrtBtn>

      <!-- Timeline -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <div
              class="relative flex-1"
              @click="handleTrackClick"
          >
            <PrtSlider
                v-model="currentTimeValue"
                :min="0"
                :max="state.duration"
                :disabled="!state.duration"
                @change="handleTimeChange"
                @start="handleDragStart"
                @end="handleDragEnd"
                bg-color="bg-neutral-700/50"
                range-color="bg-el-7"
                handle-color="bg-white"
            />
          </div>
          <span class="text-[11px] text-neutral-400 font-mono min-w-[64px] text-right">
            {{ formatTime(state.currentTime) }} / {{ formatTime(state.duration) }}
          </span>
        </div>
      </div>

      <!-- Volume Control -->
      <div :class="[
        'flex items-center gap-2 flex-shrink-0 transition-all',
        size === 'sm' ? 'w-16' : 'w-24'
      ]">
        <button
            @click="handleToggleMute"
            :class="[
              'text-neutral-400 hover:text-white transition-colors',
              size === 'sm' ? 'scale-75' : ''
            ]"
        >
          <component :is="state.isMuted ? 'VolumeX' : 'Volume2'" class="w-3.5 h-3.5" />
        </button>
        <div class="relative flex-1">
          <PrtSlider
              v-model="volumeValue"
              :min="0"
              :max="100"
              :step="1"
              @change="handleVolumeChange"
              bg-color="bg-neutral-700/50"
              range-color="bg-el-7"
              handle-color="bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Play, Pause, Volume2, VolumeX } from 'lucide-vue-next'
import type { AudioPlayerProps } from './types'
import { audioPlayerVariants } from './variants'
import { usePlayer } from './usePlayer'

const props = withDefaults(defineProps<AudioPlayerProps>(), {
  src: 'https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3',
  variant: 'default',
  size: 'base',
  class: ''
})

const {
  state,
  isDragging,
  play,
  pause,
  setTime,
  setVolume,
  toggleMute,
  initializeAudio
} = usePlayer(props.src)

// Computed Values
const containerClasses = computed(() => {
  return audioPlayerVariants({
    variant: props.variant,
    size: props.size
  })
})

const currentTimeValue = computed({
  get: () => state.value.currentTime,
  set: (value: number) => {
    state.value.currentTime = value
  }
})

const volumeValue = computed({
  get: () => state.value.volume,
  set: (value: number) => {
    state.value.volume = value
  }
})

const size = computed(() => props.size)

// Event Handlers
const handlePlayPause = () => {
  if (state.value.isPlaying) {
    pause()
  } else {
    play()
  }
}

const handleTimeChange = (value: number) => {
  setTime(value)
}

const handleVolumeChange = (value: number) => {
  setVolume(value)
}

const handleToggleMute = () => {
  toggleMute()
}

const handleTrackClick = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLDivElement
  if (!target) return

  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const percent = x / rect.width
  const newTime = percent * state.value.duration

  setTime(Math.max(0, Math.min(newTime, state.value.duration)))
}

const handleDragStart = () => {
  isDragging.value = true
}

const handleDragEnd = () => {
  isDragging.value = false
}

// Time Formatting
const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
</script>