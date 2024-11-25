<template>
  <button
      type="button"
      :class="containerVariants({ mode: modelValue, size })"
      @click="toggle"
  >
    <component
        :is="modelValue === 'dark' ? Moon : Sun"
        :size="iconSize"
        class="transition-transform duration-200"
    />

    <span>
      {{ modelValue === 'dark' ? 'Dark Mode' : 'Light Mode' }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'
import { containerVariants } from './variants'
import type { ModeSelectorProps } from './types'

const props = withDefaults(defineProps<ModeSelectorProps>(), {
  size: 'base'
})

const emit = defineEmits<{
  'update:modelValue': [value: ThemeMode]
}>()

const iconSize = computed(() => ({
  sm: 16,
  base: 20,
  lg: 24
})[props.size])

const toggle = () => {
  emit('update:modelValue', props.modelValue === 'dark' ? 'light' : 'dark')
}
</script>
