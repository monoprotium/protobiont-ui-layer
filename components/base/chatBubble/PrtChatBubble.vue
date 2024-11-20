<template>
  <div :class="wrapperVariants({ position })">
    <div :class="[
      bubbleVariants({ edges, fullWidth }), 
      props.bgColor,
      props.textColor
    ]">
      <div :class="[
        'prt-bubble__arrow',
        arrowSideClass,
        borderClass
      ]"></div>
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { bubbleVariants, wrapperVariants } from './variants'
import type { BubblePosition, BubbleEdge } from './types'

interface Props {
  position?: BubblePosition
  edges?: BubbleEdge
  bgColor?: string
  textColor?: string
  fullWidth?: boolean
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  edges: 'rounded',
  bgColor: 'bg-el-7',
  textColor: 'text-white',
  fullWidth: false,
  text: '',
})

const arrowSideClass = computed(() => `prt-bubble__arrow--${props.position}`);
const borderClass = computed(() => `border-${props.bgColor.replace(/^[^-]+-/, '')}`);

</script>

<style scoped>
.prt-bubble {
  position: relative;
  padding: 1rem;
  display: block;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
}

.prt-bubble__arrow {
  position: absolute;
  top: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(-50%);
}

.prt-bubble__arrow--right {
  right: 24px;
  border-width: 10px 10px 10px 0;
  border-left-color: transparent;
}

.prt-bubble__arrow--left {
  left: 24px;
  border-width: 10px 0 10px 10px;
  border-right-color: transparent;
}
</style>