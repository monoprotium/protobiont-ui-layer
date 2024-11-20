<template>
  <div :class="avatarClasses">
    <template v-if="status === 'loaded'">
      <img
          :src="imgSrc"
          :alt="alt"
          class="w-full h-full object-cover"
          @error="handleError"
      />
    </template>

    <template v-else-if="status === 'loading'">
      <div class="w-full h-full flex items-center justify-center bg-gray-100">
        <div class="animate-spin rounded-full h-1/3 w-1/3 border-2 border-gray-300 border-t-gray-600"/>
      </div>
    </template>

    <template v-else>
      <div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
        <slot name="fallback">
          Avatar
        </slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { avatarVariants } from './avatar-variants'
import type { AvatarProps } from './types'

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'base',
  edges: 'circle',
  alt: 'Avatar',
  class: '',
})

const status = ref<'loading' | 'loaded' | 'error'>('loading')
const handleError = () => status.value = 'error'
const handleLoad = () => status.value = 'loaded'

const avatarClasses = computed(() => {
  return avatarVariants({
    size: props.size,
    edges: props.edges,
    hasError: status.value === 'error',
    class: props.class,
  })
})

// Preload image
onMounted(() => {
  const img = new Image()
  img.src = props.imgSrc
  img.complete ? (status.value = img.naturalWidth ? 'loaded' : 'error') :
      ((img.onload = handleLoad), (img.onerror = handleError))
})
</script>