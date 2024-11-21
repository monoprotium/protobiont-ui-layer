<template>
  <div :class="[textareaVariants.wrapper({ disabled: props.disabled }), props.class]">
    <label
        v-if="$slots.label || props.label"
        :for="inputId"
        :class="textareaVariants.label({ disabled: props.disabled, error: props.error })"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>

    <div class="relative">
      <textarea
          :id="inputId"
          :value="props.modelValue"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :rows="props.rows"
          :class="textareaVariants.textarea({
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
          class="absolute right-2 top-2 text-red-500"
      >
        ⚠
      </div>
    </div>

    <div v-if="props.error && props.errorMessage" class="text-sm text-red-500 mt-1">
      {{ props.errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { textareaVariants } from './variants'
import type { TextareaProps } from './types'

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'base',
  variant: 'filled',
  edges: 'square',
  disabled: false,
  readonly: false,
  error: false,
  errorMessage: '',
  placeholder: 'Type something...',
  rows: 4,
  class: ''
})

const inputId = computed(() =>
    props.id || `textarea-${Math.random().toString(36).slice(2, 11)}`
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [value: string]
}>()

const handleInput = (event: Event) => {
  const value = (event.target as HTMLTextAreaElement).value
  emit('update:modelValue', value)
  emit('change', value)
}
</script>
