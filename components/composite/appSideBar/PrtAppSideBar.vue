<template>
  <aside :class="[rootClasses, background || 'bg-neutral-800']">
    <div
        v-if="$slots.header"
        class="border-b border-neutral-700"
    >
      <slot name="header" />
    </div>

    <div class="flex flex-1 flex-col overflow-y-auto">
      <slot />
    </div>

    <div
        v-if="$slots.footer"
        class="mt-auto border-t border-neutral-700"
    >
      <slot name="footer" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sidebarVariants } from './variants'
import type { SidebarProps } from './types'

const props = withDefaults(defineProps<SidebarProps>(), {
  size: 'base',
  background: undefined,
  class: undefined
})

const rootClasses = computed(() =>
    sidebarVariants({
      size: props.size,
    })
)
</script>