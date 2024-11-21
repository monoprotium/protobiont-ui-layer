<template>
  <div :class="containerClasses">
    <button
        v-if="!hideControls"
        type="button"
        :class="buttonClasses"
        :disabled="isDecrementDisabled"
        @click="handleDecrement"
        aria-label="Decrease value"
    >
      <span class="select-none">−</span>
    </button>

    <input
        type="text"
        :class="inputClasses"
        :value="displayValue"
        :disabled="disabled"
        @change="handleChange"
        @keydown="handleKeyDown"
        :min="min"
        :max="max"
        :aria-valuenow="modelValue"
        :aria-valuemin="min"
        :aria-valuemax="max"
        role="spinbutton"
    />

    <button
        v-if="!hideControls"
        type="button"
        :class="buttonClasses"
        :disabled="isIncrementDisabled"
        @click="handleIncrement"
        aria-label="Increase value"
    >
      <span class="select-none">+</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { containerVariants, buttonVariants, inputVariants } from './variants'
import type { InputNumberProps } from './types'

const props = withDefaults(defineProps<InputNumberProps>(), {
  min: 0,
  max: 999,
  step: 1,
  size: 'base',
  variant: 'filled',
  edges: 'square',
  width: 'auto',
  disabled: false,
  error: false,
  hideControls: false,
  class: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
}>()

const isDecrementDisabled = computed(() =>
    props.disabled || props.modelValue <= props.min
)

const isIncrementDisabled = computed(() =>
    props.disabled || props.modelValue >= props.max
)

const displayValue = computed(() => props.modelValue.toString())

const containerClasses = computed(() => [
  containerVariants({
    variant: props.variant,
    size: props.size,
    width: props.width,
    disabled: props.disabled,
    error: props.error,
    edges: props.edges
  }),
  props.class
])

const buttonClasses = computed(() =>
    buttonVariants({
      variant: props.variant,
      size: props.size,
      disabled: props.disabled
    })
)

const inputClasses = computed(() =>
    inputVariants({
      size: props.size,
      disabled: props.disabled
    })
)

const updateValue = (newValue: number) => {
  const clampedValue = Math.min(Math.max(newValue, props.min), props.max)
  emit('update:modelValue', clampedValue)
  emit('change', clampedValue)
}

const handleIncrement = () => {
  if (!isIncrementDisabled.value) {
    updateValue(props.modelValue + props.step)
  }
}

const handleDecrement = () => {
  if (!isDecrementDisabled.value) {
    updateValue(props.modelValue - props.step)
  }
}

const handleChange = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value)
  if (!isNaN(value)) {
    updateValue(value)
  } else {
    (event.target as HTMLInputElement).value = props.modelValue.toString()
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    handleIncrement()
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    handleDecrement()
  }
}
</script>