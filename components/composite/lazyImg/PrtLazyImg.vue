<template>
  <div :class="containerVariants({ size })">
    <img
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :class="[
        imageVariants({
          size,
          state: loadingState
        }),
        'w-full h-full object-cover transition-opacity duration-300'
      ]"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- Loading Overlay -->
    <div
      v-if="loadingState === 'loading'"
      class="absolute inset-0 bg-neutral-800 animate-pulse"
    >
      <div class="h-full w-full flex items-center justify-center">
        <PrtLoader size="sm" />
      </div>
    </div>

    <!-- Error State -->
    <div
      v-if="loadingState === 'error'"
      class="absolute inset-0 bg-neutral-800 flex items-center justify-center"
    >
      <div class="text-center text-neutral-400">
        <XCircle class="w-8 h-8 mx-auto mb-2" />
        <span class="text-sm">Failed to load image</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { XCircle } from 'lucide-vue-next'
import { containerVariants, imageVariants } from './variants'
import type { LazyImgProps, LoadingState } from './types'

const props = withDefaults(defineProps<LazyImgProps>(), {
  src: '',
  alt: '',
  size: 'base',
  placeholder: 'https://placehold.co/600x400/1f2937/475569'
})

const imageRef = ref<HTMLImageElement | null>(null)
const loadingState = ref<LoadingState>('loading')
const observer = ref<IntersectionObserver | null>(null)
const isIntersected = ref(false)

const currentSrc = computed(() => {
  return isIntersected.value ? props.src : props.placeholder
})

const handleLoad = () => {
  loadingState.value = 'loaded'
}

const handleError = () => {
  loadingState.value = 'error'
}

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      isIntersected.value = true
      observer.value?.disconnect()
    }
  }, {
    rootMargin: '50px'
  })

  if (imageRef.value) {
    observer.value.observe(imageRef.value)
  }
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>