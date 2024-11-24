<template>
  <div
      ref="stickyRef"
      :class="stickyClasses"
      :style="{ zIndex: props.zIndex }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll, useElementBounding } from '@vueuse/core'
import { stickyVariants } from './variants'
import type { StickyPosition, StickyOffset } from './types'

interface Props {
  position?: StickyPosition
  offset?: StickyOffset
  zIndex?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  offset: '0',
  zIndex: 10,
  class: ''
})

const stickyRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()
const { top } = useElementBounding(stickyRef)

const isStuck = computed(() => {
  if (!stickyRef.value) return false
  return props.position === 'top'
      ? scrollY.value > top.value
      : scrollY.value < top.value
})

const stickyClasses = computed(() => [
  stickyVariants({
    position: props.position,
    offset: props.offset,
    isStuck: isStuck.value
  }),
  props.class
])
</script>