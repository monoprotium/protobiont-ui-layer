<template>
  <div class="flex flex-wrap" :class="marginClass">
    <slot :itemClass="itemClasses" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutFlexProps } from './types'

const props = withDefaults(defineProps<LayoutFlexProps>(), {
  itemsPerRow: 3,
  gap: 'md'
})

const basisClasses = {
  1: 'basis-full',
  2: 'basis-1/2',
  3: 'basis-1/3',
  4: 'basis-1/4',
  5: 'basis-1/5',
  6: 'basis-1/6',
} as const

const gapClasses = {
  sm: 'px-1 mb-2',
  md: 'px-2 mb-4',
  lg: 'px-3 mb-6',
  xl: 'px-4 mb-8',
} as const

const marginClass = computed(() => ({
  '-mx-1 -mb-2': props.gap === 'sm',
  '-mx-2 -mb-4': props.gap === 'md',
  '-mx-3 -mb-6': props.gap === 'lg',
  '-mx-4 -mb-8': props.gap === 'xl',
}))

const itemClasses = computed(() => [
  basisClasses[props.itemsPerRow],
  gapClasses[props.gap]
])
</script>