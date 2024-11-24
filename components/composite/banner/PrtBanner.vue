<template>
  <div :class="[bannerVariants({ variant, height }), props.class]">
    <!-- Content Section -->
    <div :class="[
      'relative z-10 px-8 py-6',
      'flex flex-col justify-center',
      'min-w-[280px] w-1/3',
      variant === 'full' ? 'w-full text-center items-center' : '',
      variant === 'full' && isLoading ? 'invisible' : ''
    ]">
      <slot name="content">
        <h2 class="text-2xl font-semibold text-white mb-2">Banner Title</h2>
        <p class="text-neutral-200 mb-4">Banner description text</p>
        <PrtBtn color="bg-neutral-700">Action</PrtBtn>
      </slot>
    </div>

    <!-- Image Section -->
    <div
        v-if="variant !== 'full'"
        class="relative flex-1 overflow-hidden bg-neutral-800"
    >
      <div
          v-show="isLoading"
          class="absolute inset-0 flex items-center justify-center"
      >
        <PrtLoader size="lg" color="primary" />
      </div>
      <img
          :src="currentImageSrc"
          class="w-full h-full object-cover transition-opacity duration-300"
          alt="banner"
          :class="{ 'opacity-0': isLoading }"
          @load="handleImageLoad"
          @error="handleImageError"
      />
    </div>

    <!-- Full Background Image -->
    <template v-if="variant === 'full'">
      <div
          v-show="isLoading"
          class="absolute inset-0 z-50 flex items-center justify-center bg-neutral-800"
      >
        <PrtLoader size="lg" color="primary" />
      </div>
      <div
          class="absolute inset-0 z-0 transition-opacity duration-300"
          :class="{ 'opacity-0': isLoading }"
          :style="{
          backgroundImage: `url(${currentImageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      >
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { PrtBtn } from '../../base/btn'
import { PrtLoader } from '../../base/loader'
import { bannerVariants } from './variants'
import type { BannerProps } from './types'

const props = withDefaults(defineProps<BannerProps>(), {
  variant: 'left',
  imageSrc: '',
  class: '',
  height: 'base'
})

const isLoading = ref(true)
const loadError = ref(false)

const FALLBACK_IMAGE = 'https://picsum.photos/800/400'

const currentImageSrc = computed(() => {
  if (loadError.value || !props.imageSrc) {
    return FALLBACK_IMAGE
  }
  return props.imageSrc
})

const handleImageLoad = () => {
  isLoading.value = false
  loadError.value = false
}

const handleImageError = () => {
  console.error('Failed to load banner image, using fallback')
  loadError.value = true
  const fallbackImg = new Image()
  fallbackImg.src = FALLBACK_IMAGE
  fallbackImg.onload = () => isLoading.value = false
}

onMounted(() => {
  const img = new Image()
  img.src = currentImageSrc.value
  img.onload = handleImageLoad
  img.onerror = handleImageError
})
</script>