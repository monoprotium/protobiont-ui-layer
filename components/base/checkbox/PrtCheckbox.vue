<template>
  <label
      :class="[
      'flex items-center gap-2 select-none',
      !disabled ? 'cursor-pointer' : 'cursor-not-allowed'
    ]"
  >
    <div
        :class="[
        checkboxClasses,
        `border-${colorBase}`,
      ]"
    >
      <div
          :class="[
          innerCheckboxClasses,
          modelValue && !disabled && color,
          'transform origin-center'
        ]"
      />
      <input
          type="checkbox"
          class="hidden"
          :disabled="disabled"
          v-model="proxyChecked"
          v-bind="$attrs"
      />
    </div>
    <div :class="['label transition-opacity duration-200', disabled ? 'opacity-50' : 'opacity-100']">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { checkboxVariants, innerCheckboxVariants } from './variants'
import type { CheckboxProps } from './types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'base',
  edges: 'square',
  color: 'bg-el-4',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const colorBase = computed(() => props.color.replace('bg-', ''))
const checkboxState = computed(() => props.disabled ? 'disabled' : props.modelValue ? 'checked' : 'unchecked')

const checkboxClasses = computed(() =>
    checkboxVariants({
      size: props.size,
      edges: props.edges,
      state: checkboxState.value
    })
)

const innerCheckboxClasses = computed(() =>
    innerCheckboxVariants({
      size: props.size,
      edges: props.edges,
      state: checkboxState.value
    })
)

const proxyChecked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})</script>