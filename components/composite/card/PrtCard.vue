<template>
  <div :class="[cardVariants({ variant, edges }), props.class]">
    <!-- Image Section -->
    <div v-if="$slots.image" class="relative h-[220px] bg-neutral-800">
      <!-- Loading State -->
      <div
          v-show="isImageLoading"
          class="absolute inset-0 z-10 flex items-center justify-center"
      >
        <PrtLoader size="lg" color="primary" />
      </div>

      <!-- Image Container -->
      <div
          class="w-full h-full transition-opacity duration-300"
          :class="{ 'opacity-0': isImageLoading }"
      >
        <slot
            name="image"
            :isLoading="isImageLoading"
            :handleLoad="handleImageLoad"
            :handleError="handleImageError"
        >
          <img
              :src="props.imageSrc || FALLBACK_IMAGE"
              alt="Card image"
              class="w-full h-full object-cover"
              @load="handleImageLoad"
              @error="handleImageError"
          />
        </slot>
      </div>
    </div>

    <!-- Header Section -->
    <div v-if="$slots.header" class="p-5 border-b border-neutral-700">
      <slot name="header" />
    </div>

    <!-- Content Section -->
    <div :class="[
      'p-5 flex-grow',
      { 'space-y-4': !$slots.header }
    ]">
      <slot name="content" />
    </div>

    <!-- Footer Section -->
    <div v-if="$slots.footer" class="p-4 bg-neutral-800/50 border-t border-neutral-700">
      <slot name="footer" />
    </div>

    <!-- Loading Overlay -->
    <div
        v-if="loading"
        class="absolute inset-0 bg-neutral-800/50 backdrop-blur-sm flex items-center justify-center z-20"
    >
      <PrtLoader size="lg" color="primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PrtLoader } from '../../base/loader'
import { cardVariants } from './variants'
import type { CardVariant, CardEdges } from './types'

const FALLBACK_IMAGE = 'https://picsum.photos/400/300'

interface Props {
  variant?: CardVariant
  edges?: CardEdges
  loading?: boolean
  class?: string
  imageSrc?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  edges: 'square',
  loading: false,
  class: '',
  imageSrc: ''
})

const isImageLoading = ref(true)

const handleImageLoad = () => {
  isImageLoading.value = false
}

const handleImageError = () => {
  console.error('Failed to load card image')
  isImageLoading.value = false
}

onMounted(() => {
  if (props.imageSrc || FALLBACK_IMAGE) {
    const preloadImage = new globalThis.Image()
    preloadImage.src = props.imageSrc || FALLBACK_IMAGE
    preloadImage.onload = handleImageLoad
    preloadImage.onerror = handleImageError
  }
})
</script>