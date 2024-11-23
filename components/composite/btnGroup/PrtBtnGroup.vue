<template>
  <div :class="[buttonGroupVariants({ size }), props.class]">
    <PrtBtn
        v-for="(button, index) in buttons"
        :key="index"
        :variant="variant"
        :size="size"
        :disabled="disabled"
        :disableFocusRing="true"
        :square="true"
        :color="isSelected(button) ? bgActive : defaultBg"
        :class="[
        'relative rounded-none -ml-px first:ml-0 hover:bg-neutral-700 transition-colors',
        { 'text-white': variant === 'ghost' || variant === 'outline' }
      ]"
        @click="handleSelect(button)"
    >
      <slot name="button" :button="button">
        {{ button }}
      </slot>
    </PrtBtn>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { PrtBtn } from '../../base/btn'
import { buttonGroupVariants } from './variants'
import type { ButtonGroupProps } from './types'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  modelValue: '',
  size: 'base',
  variant: 'solid',
  color: '',
  bgActive: 'bg-el-7',
  defaultBg: 'bg-neutral-800',
  disabled: false,
  class: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [value: string]
}>()

const selectedValue = ref(props.modelValue)

const isSelected = (button: string): boolean => {
  return button === selectedValue.value
}

const handleSelect = (button: string) => {
  if (props.disabled) return

  selectedValue.value = button
  emit('update:modelValue', button)
  emit('change', button)
}

watch(() => props.modelValue, (newValue) => {
  selectedValue.value = newValue
})
</script>