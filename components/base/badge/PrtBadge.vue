<template>
  <div :class="[variants({ position, size }), bgColor]">
    <span :class="[textColor]">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { variants } from './variants'
import type { BadgePosition } from './types'

interface Props {
  text?: string
  bgColor?: string
  textColor?: string
  position?: BadgePosition
  size?: 'sm' | 'base' | 'lg'
}

withDefaults(defineProps<Props>(), {
  text: '',
  bgColor: 'bg-el-7',
  textColor: 'text-white',
  position: 'top-right',
  size: 'base',
})
</script>