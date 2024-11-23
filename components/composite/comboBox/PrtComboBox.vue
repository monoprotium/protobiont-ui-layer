<template>
  <div :class="wrapperVariants({ disabled })">
    <PrtInputText
        ref="inputRef"
        v-model="searchQuery"
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        :error="error"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @keydown.down.prevent="handleKeyDown"
        @keydown.up.prevent="handleKeyUp"
        @keydown.enter.prevent="handleEnter"
        @keydown.esc="handleEscape"
    />

    <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <ul
          v-if="showDropdown && filteredOptions.length > 0"
          ref="listboxRef"
          role="listbox"
          :class="dropdownVariants({ size })"
      >
        <li
            v-for="(option, index) in filteredOptions"
            :key="option"
            role="option"
            :class="optionVariants({
            active: index === activeIndex
          })"
            @mouseenter="activeIndex = index"
            @mousedown.prevent="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComboBoxProps } from './types'
import { wrapperVariants, dropdownVariants, optionVariants } from './variants'
import { onClickOutside } from '@vueuse/core'

const props = withDefaults(defineProps<ComboBoxProps>(), {
  size: 'base',
  placeholder: 'Type to search...',
  disabled: false,
  error: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [value: string]
}>()

const inputRef = ref<InstanceType<typeof PrtInputText> | null>(null)
const listboxRef = ref<HTMLUListElement | null>(null)
const showDropdown = ref(false)
const activeIndex = ref(-1)
const searchQuery = ref(props.modelValue)

const filteredOptions = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return props.options.filter(option =>
      option.toLowerCase().includes(query)
  )
})

const handleInput = () => {
  showDropdown.value = true
  emit('update:modelValue', searchQuery.value)
  emit('change', searchQuery.value)
}

const handleFocus = () => {
  showDropdown.value = true
}

const handleBlur = () => {
  // Delay to allow click events on options
  setTimeout(() => {
    showDropdown.value = false
    activeIndex.value = -1
  }, 100)
}

const selectOption = (option: string) => {
  searchQuery.value = option
  emit('update:modelValue', option)
  emit('change', option)
  showDropdown.value = false
  activeIndex.value = -1
}

const handleKeyDown = () => {
  if (!showDropdown.value) {
    showDropdown.value = true
    return
  }
  activeIndex.value = Math.min(activeIndex.value + 1, filteredOptions.value.length - 1)
}

const handleKeyUp = () => {
  activeIndex.value = Math.max(activeIndex.value - 1, 0)
}

const handleEnter = () => {
  if (activeIndex.value >= 0) {
    selectOption(filteredOptions.value[activeIndex.value])
  }
}

const handleEscape = () => {
  showDropdown.value = false
  activeIndex.value = -1
}

// Close dropdown when clicking outside
onClickOutside(listboxRef, () => {
  showDropdown.value = false
  activeIndex.value = -1
})

// Watch external value changes
watch(() => props.modelValue, (newValue) => {
  searchQuery.value = newValue
})
</script>