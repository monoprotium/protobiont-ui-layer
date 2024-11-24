<template>
  <div :class="props.class">
    <template v-if="timeData">
      <slot
          name="default"
          :timeData="timeData"
          :formatted="formattedParts"
      >
        <div class="flex items-center gap-3">
          <template v-for="part in visibleParts" :key="part.label">
            <!-- Time Block -->
            <div class="flex flex-col items-center">
              <div :class="[
                numberVariants({ size: props.size }),
                color
              ]">
                {{ part.value.toString().padStart(2, '0') }}
              </div>
              <div :class="labelVariants({ size: props.size })">
                {{ part.label }}
              </div>
            </div>

            <!-- Separator -->
            <div
                v-if="part.label !== lastVisiblePart"
                :class="separatorVariants({ size: props.size })"
                class="text-neutral-300"
            >
              :
            </div>
          </template>
        </div>
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TimeData } from './types'
import { numberVariants, labelVariants, separatorVariants } from './variants'

interface Props {
  time: string | number
  size?: 'sm' | 'base' | 'lg'
  color?: string
  format?: ('days' | 'hours' | 'minutes' | 'seconds')[]
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
  color: 'bg-el-7',
  format: () => ['days', 'hours', 'minutes', 'seconds'],
  class: ''
})

const emit = defineEmits<{
  'end': []
  'change': [timeData: TimeData]
}>()

// State
const timeData = ref<TimeData | null>(null)
let endDate: number
let intervalId: number | undefined

// Computed
const visibleParts = computed(() => {
  if (!timeData.value) return []

  return props.format.map(part => ({
    label: part,
    value: timeData.value![part]
  }))
})

const lastVisiblePart = computed(() => {
  const format = props.format
  return format[format.length - 1]
})

const formattedParts = computed(() => {
  if (!timeData.value) return {}

  return Object.fromEntries(
      Object.entries(timeData.value).map(([key, value]) => [
        key,
        value.toString().padStart(2, '0')
      ])
  )
})

// Methods
const calculateTime = (remaining: number): TimeData => {
  const days = Math.floor(remaining / (24 * 60 * 60 * 1000))
  const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
  const seconds = Math.floor((remaining % (60 * 1000)) / 1000)
  const milliseconds = Math.floor(remaining % 1000)

  return { days, hours, minutes, seconds, milliseconds }
}

const updateTime = () => {
  const remaining = endDate - Date.now()

  if (remaining <= 0) {
    timeData.value = calculateTime(0)
    emit('change', timeData.value)
    emit('end')
    clearInterval(intervalId)
    return
  }

  timeData.value = calculateTime(remaining)
  emit('change', timeData.value)
}

// Lifecycle
onMounted(() => {
  // Set end date
  endDate = typeof props.time === 'string'
      ? new Date(props.time).getTime()
      : Date.now() + props.time

  // Initial update
  updateTime()

  // Start interval
  intervalId = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>