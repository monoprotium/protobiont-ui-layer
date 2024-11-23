<template>
  <div :class="[filterBarVariants({ direction, size, disabled }), customClass]">
    <PrtCheckbox
        v-for="item in items"
        :key="item.value"
        v-model="selected[item.value]"
        :disabled="disabled || item.disabled"
        :class="filterItemVariants({ size, disabled: item.disabled })"
        :size="size"
        edges="square"
        @update:modelValue="handleItemToggle(item)"
    >
      <slot name="item" :item="item">
        {{ item.label }}
      </slot>
    </PrtCheckbox>

    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { PrtCheckbox } from '../../base/checkbox'
import { filterBarVariants, filterItemVariants } from './variants'
import type { FilterBarProps, FilterItem } from './types'

const props = withDefaults(defineProps<FilterBarProps>(), {
  direction: 'vertical',
  size: 'base',
  disabled: false,
  customClass: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  'change': [value: string[]]
}>()

// Use more descriptive name and type
const selected = ref<Record<string, boolean>>(
    Object.fromEntries(
        props.items.map(item => [item.value, props.modelValue.includes(item.value)])
    )
)

// Simpler watch handlers using Object.fromEntries
watch(() => props.modelValue, (newValue) => {
  selected.value = Object.fromEntries(
      props.items.map(item => [item.value, newValue.includes(item.value)])
  )
})

watch(() => props.items, (newItems) => {
  selected.value = Object.fromEntries(
      newItems.map(item => [item.value, props.modelValue.includes(item.value)])
  )
})

const handleItemToggle = (item: FilterItem) => {
  if (props.disabled || item.disabled) return

  const newValue = props.modelValue.includes(item.value)
      ? props.modelValue.filter(v => v !== item.value)
      : [...props.modelValue, item.value]

  emit('update:modelValue', newValue)
  emit('change', newValue)
}

defineExpose({
  selectAll: () => {
    const enabledValues = props.items
        .filter(item => !item.disabled)
        .map(item => item.value)
    emit('update:modelValue', enabledValues)
    emit('change', enabledValues)
  },
  clearAll: () => {
    emit('update:modelValue', [])
    emit('change', [])
  }
})
</script>