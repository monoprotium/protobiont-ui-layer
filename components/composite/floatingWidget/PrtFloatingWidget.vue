<template>
  <div class="relative inline-flex items-center justify-center">
    <!-- Main Button -->
    <button
        :class="[
        buttonVariants({ size, active: modelValue }),
        color,
        'relative z-10'
      ]"
        @click="toggle"
        :disabled="disabled"
        type="button"
    >
      <slot name="trigger">
        <Plus v-if="!modelValue" class="w-5 h-5" />
        <X v-else class="w-5 h-5" />
      </slot>
    </button>

    <!-- Menu Items -->
    <div
        :class="[
        menuVariants({
          position,
          direction,
          open: modelValue
        }),
        'absolute z-20'
      ]"
        :style="{ gap: `${gap}px` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next'
import { buttonVariants, menuVariants } from './variants'
import type { FloatingWidgetProps } from './types'

const props = withDefaults(defineProps<FloatingWidgetProps>(), {
  modelValue: false,
  position: 'bottom',
  direction: 'horizontal',
  disabled: false,
  color: 'bg-el-7',
  size: 'base',
  gap: 8
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>