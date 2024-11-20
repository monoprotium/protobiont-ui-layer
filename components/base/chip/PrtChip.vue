<template>
  <span
      :class="chipClasses"
      :data-testid="clickable ? 'clickable-chip' : 'chip'"
      @click="clickable && !disabled && $emit('click', $event)"
  >
    <slot name="prepend" v-if="$slots.prepend" />
    <slot />
    <slot name="append" v-if="$slots.append" />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { chipVariants, getChipColors } from "./variants"
import type { ChipProps } from "./types"

const props = withDefaults(defineProps<ChipProps>(), {
  size: 'base',
  variant: 'solid',
  color: "bg-el-7",
  disabled: false,
  clickable: false,
})

defineEmits<{
  (e: "click", event: MouseEvent): void
}>()

const variantClasses = computed(() =>
    chipVariants({
      variant: props.variant,
      size: props.size,
      clickable: props.clickable,
      disabled: props.disabled,
    })
)

const colorClasses = computed(() =>
    getChipColors(props.variant, props.color, props.disabled)
)

const chipClasses = computed(() => [
  "prt-chip",
  variantClasses.value,
  ...colorClasses.value,
])
</script>