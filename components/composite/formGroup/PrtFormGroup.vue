<template>
  <div :class="rootClass">
    <label
        v-if="label"
        :for="forId"
        :class="labelVariants({ size, required })"
    >
      {{ label }}
    </label>

    <div class="w-full">
      <slot />
    </div>

    <p
        v-if="helpText"
        :class="helpTextVariants({ size })"
    >
      {{ helpText }}
    </p>

    <p
        v-if="errorMessage"
        :class="errorVariants({ size })"
        role="alert"
    >
      {{ Array.isArray(errorMessage) ? errorMessage[0] : errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formGroupVariants, labelVariants, helpTextVariants, errorVariants } from './variants'
import type { FormGroupProps } from './types'

const props = withDefaults(defineProps<FormGroupProps>(), {
  size: 'base',
  required: false,
  wrapperClass: '',
})

const rootClass = computed(() => [
  formGroupVariants({ size: props.size }),
  props.wrapperClass
])
</script>