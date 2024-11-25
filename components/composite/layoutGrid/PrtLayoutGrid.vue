<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { gridVariants } from './variants'
import type { LayoutGridProps } from './types'

const props = withDefaults(defineProps<LayoutGridProps>(), {
  cols: 3,
  gap: 'md',
  responsive: false,
  class: '',
})

const containerClasses = computed(() => [
  gridVariants({
    cols: props.cols,
    gap: props.gap,
    responsive: props.responsive,
  }),
  props.class
])
</script>