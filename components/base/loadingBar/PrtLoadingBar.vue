<template>
  <div v-if="visible" :class="containerClasses">
    <div class="progress" :class="progressClasses" :style="progressStyle" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { variants, progressVariants } from './variants'
import type { LoadingBarProps, LoadingBarVariant } from './types'

const props = withDefaults(defineProps<LoadingBarProps>(), {
  value: 0,
  size: 'base',
  variant: 'default'
})

const emit = defineEmits<{
  start: []
  finish: []
  error: []
}>()

const visible = ref(true)
const currentVariant = ref<LoadingBarVariant>(props.variant)

const containerClasses = computed(() => variants({ size: props.size }))
const progressClasses = computed(() => progressVariants({ variant: currentVariant.value }))
const progressStyle = computed(() => ({ width: `${props.value}%` }))

const startLoading = () => {
  visible.value = true
  currentVariant.value = 'default'
  emit('start')
}

const finishLoading = () => {
  currentVariant.value = 'success'
  emit('finish')
  setTimeout(() => {
    visible.value = false
  }, 300)
}

const errorLoading = () => {
  visible.value = true
  currentVariant.value = 'error'
  emit('error')
}

defineExpose({ startLoading, finishLoading, errorLoading })
</script>