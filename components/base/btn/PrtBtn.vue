<template>
  <component
      :is="tag"
      :type="tag === 'button' && 'button'"
      :disabled="disabled"
      :class="buttonClasses"
      data-testid="button"
  >
    <slot name="prepend" v-if="$slots.prepend" />
    <slot />
    <slot name="append" v-if="$slots.append" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types'
import { buttonVariants, getButtonColors } from './variants'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'base',
  variant: 'solid',
  disabled: false,
  square: false,
  tag: 'button',
  loading: false,
  fullWidth: false,
  color: 'bg-el-7',
  disableFocusRing: false,
})

const variantClasses = computed(() =>
    buttonVariants({
      variant: props.variant,
      size: props.size,
      square: props.square,
      fullWidth: props.fullWidth,
      disabled: props.disabled,
      loading: props.loading,
    })
)

const colorClasses = computed(() =>
    getButtonColors(props.variant, props.color, props.disabled, props.disableFocusRing)
)

const buttonClasses = computed(() => [
  'prt-btn',
  variantClasses.value,
  ...colorClasses.value
])
</script>