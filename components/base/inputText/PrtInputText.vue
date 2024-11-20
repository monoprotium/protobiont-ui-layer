<template>
  <div :class="[inputTextVariants.wrapper({ disabled: props.disabled }), props.class]">
    <label
        v-if="$slots.label || props.label"
        :for="inputId"
        :class="inputTextVariants.label({ disabled: props.disabled, error: props.error })"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>

    <div class="relative">
      <input
          ref="inputRef"
          :id="inputId"
          :type="props.type"
          :value="props.modelValue"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :class="inputTextVariants.input({
          variant: props.variant,
          size: props.size,
          edges: props.edges,
          disabled: props.disabled,
          error: props.error
        })"
          @input="handleInput"
      />

      <div
          v-if="props.error"
          class="absolute right-2 top-1/2 -translate-y-1/2 text-red-500"
      >
        ⚠
      </div>
    </div>

    <div v-if="props.error && props.errorMessage" class="text-sm text-red-500 mt-1">
      {{ props.errorMessage }}
    </div>

    <div v-if="$slots.append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { inputTextVariants } from './variants'
import type { InputTextProps, InputValue } from './types'

const props = withDefaults(defineProps<InputTextProps>(), {
  type: 'text',
  size: 'base',
  variant: 'filled',
  edges: 'square',
  disabled: false,
  readonly: false,
  error: false,
  errorMessage: '',
  placeholder: 'Type something...',
  class: ''
})

const inputRef = ref<HTMLInputElement | null>(null)
const inputId = computed(() => props.id ?? `input-${Math.random().toString(36).slice(2, 11)}`)

const emit = defineEmits<{
  'update:modelValue': [value: InputValue]
}>()

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', props.type === 'number' ? Number(value) : value)
}

defineExpose({ focus: () => inputRef.value?.focus() })
</script>