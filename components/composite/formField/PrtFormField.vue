<template>
  <div
      :class="[
      formFieldVariants({
        variant,
        size,
        disabled,
        error: !!error
      }),
      wrapperClass
    ]"
  >
    <label
        v-if="label"
        :for="id"
        :class="[
        labelVariants({
          size,
          disabled,
          error: !!error
        }),
        labelColor
      ]"
    >
      <slot name="label" :label="label">
        {{ label }}
        <span v-if="required" class="text-el-8 ml-1">*</span>
      </slot>
    </label>

    <template v-if="type === 'text'">
      <PrtInputText
          :id="id"
          :name="name"
          :modelValue="modelValue as string"
          :size="size"
          :variant="variant"
          :disabled="disabled"
          :placeholder="placeholder"
          :maxlength="maxLength"
          v-bind="inputProps"
          @update:modelValue="$emit('update:modelValue', $event)"
          @focus="$emit('focus', $event)"
          @blur="$emit('blur', $event)"
      />
    </template>

    <template v-else-if="type === 'textarea'">
      <PrtInputTextArea
          :id="id"
          :name="name"
          :modelValue="modelValue as string"
          :size="size"
          :variant="variant"
          :disabled="disabled"
          :placeholder="placeholder"
          :maxlength="maxLength"
          v-bind="textareaProps"
          @update:modelValue="$emit('update:modelValue', $event)"
          @focus="$emit('focus', $event)"
          @blur="$emit('blur', $event)"
      />
    </template>

    <div
        v-if="error"
        :class="errorVariants({ size })"
        role="alert"
    >
      <slot name="error" :error="error">
        {{ Array.isArray(error) ? error[0] : error }}
      </slot>
    </div>

    <PrtBtn
        v-if="showButton"
        :color="buttonColor"
        :size="buttonSize || size"
        :disabled="disabled"
        @click="$emit('buttonClick')"
    >
      <slot name="button">
        {{ buttonText }}
      </slot>
    </PrtBtn>
  </div>
</template>

<script setup lang="ts">
import { PrtBtn } from '../../base/btn'
import { PrtInputText } from '../../base/inputText'
import { PrtInputTextArea } from '../../base/inputTextArea'
import { formFieldVariants, labelVariants, errorVariants } from './variants'
import type { FormFieldProps, FormFieldEmits } from './types'

const props = withDefaults(defineProps<FormFieldProps>(), {
  type: 'text',
  variant: 'filled',
  size: 'base',
  showButton: false,
  buttonText: 'Submit',
  buttonColor: 'bg-el-7',
  inputProps: () => ({}),
  textareaProps: () => ({}),
  labelColor: ''
})

defineEmits<FormFieldEmits>()
</script>