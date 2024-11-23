<template>
  <div :class="containerVariants()">
    <ClientOnly>
      <PrtInputText
          :model-value="searchQuery || ''"
          @update:modelValue="handleInput"
          :placeholder="placeholder"
          :size="size"
          :variant="variant"
          :edges="edges"
          :disabled="disabled"
          :error="error"
          @keydown.down.prevent="onArrowDown"
          @keydown.up.prevent="onArrowUp"
          @keydown.enter.prevent="onEnter"
      />

      <div
          v-if="showDropdown && filteredItems.length > 0"
          :class="dropdownVariants({ size, edges })"
      >
        <div
            v-for="(item, index) in filteredItems"
            :key="index"
            :class="itemVariants({
            active: index === activeIndex,
            disabled
          })"
            @click="selectItem(item)"
        >
          {{ item }}
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AutocompleteProps } from './types'
import type { InputValue } from '../../base/inputText/types'
import { containerVariants, dropdownVariants, itemVariants } from './variants'

const props = defineProps<AutocompleteProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const searchQuery = ref<string>('')
const showDropdown = ref(false)
const activeIndex = ref(-1)

const handleInput = (value: InputValue) => {
  const stringValue = String(value)
  searchQuery.value = stringValue
  showDropdown.value = true
  activeIndex.value = -1
  emit('update:modelValue', stringValue)
}

const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items
  const query = searchQuery.value.toLowerCase()
  return props.items.filter(item =>
      item.toLowerCase().includes(query)
  )
})

const selectItem = (item: string) => {
  searchQuery.value = item
  emit('update:modelValue', item)
  showDropdown.value = false
  activeIndex.value = -1
}

// Placeholder for keyboard navigation
const onArrowDown = () => console.log('Arrow down')
const onArrowUp = () => console.log('Arrow up')
const onEnter = () => console.log('Enter')
</script>