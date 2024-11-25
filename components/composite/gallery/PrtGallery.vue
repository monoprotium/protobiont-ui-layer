<template>
  <div
      :class="[
      'gallery',
      `gallery--${layout}`,
      `gallery--gap-${gap}`,
      loading && 'gallery--loading',
    ]"
  >
    <template v-for="image in images" :key="image.id">
      <!-- Non-selectable item -->
      <div
          v-if="!selectable"
          :class="[
          'gallery__item',
          `gallery__item--${layout}`,
          layout === 'grid' && `gallery__item--${aspectRatio}`,
        ]"
      >
        <img :src="image.src" :alt="image.alt || ''" class="gallery__image" />
      </div>

      <!-- Selectable item -->
      <div
          v-else
          :class="[
          'gallery__item',
          'gallery__item--selectable',
          selectedImages.includes(image.id) && 'gallery__item--selected',
          `gallery__item--${layout}`,
          layout === 'grid' && `gallery__item--${aspectRatio}`,
        ]"
          @click="handleImageClick(image)"
      >
        <img :src="image.src" :alt="image.alt || ''" class="gallery__image" />
      </div>
    </template>

    <!-- Loading overlay -->
    <div v-if="loading" class="gallery__overlay">
      <div class="gallery__loading">
        <PrtLoader size="lg" color="primary" class="mx-auto" />
        <div class="text-white mt-4 text-center">Loading images...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PrtLoader } from '../../base/loader';
import type { GalleryImage, GalleryProps } from './types';

const props = withDefaults(defineProps<GalleryProps>(), {
  layout: 'grid',
  gap: 'base',
  aspectRatio: 'landscape',
  selectable: false,
  loading: false,
});

const emit = defineEmits<{
  (e: 'select', image: GalleryImage): void;
  (e: 'selectMultiple', images: GalleryImage[]): void;
}>();

const selectedImages = ref<(string | number)[]>([]);

const handleImageClick = (image: GalleryImage) => {
  if (!props.selectable) return;

  const index = selectedImages.value.indexOf(image.id);
  if (index === -1) {
    selectedImages.value.push(image.id);
  } else {
    selectedImages.value.splice(index, 1);
  }

  emit(
      'selectMultiple',
      props.images.filter((img) => selectedImages.value.includes(img.id)),
  );
};
</script>

<style scoped>
.gallery {
  position: relative;
  width: 100%;
}

/* Layout Variants */
.gallery--grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.gallery--masonry {
  columns: 3 250px;
}

/* Gap Variants */
.gallery--gap-none {
  gap: 0;
}
.gallery--gap-sm {
  gap: 0.5rem;
}
.gallery--gap-base {
  gap: 1rem;
}
.gallery--gap-lg {
  gap: 1.5rem;
}

/* Item Base */
.gallery__item {
  position: relative;
  overflow: hidden;
  background-color: rgb(23 23 23);
}

/* Item Layout Variants */
.gallery__item--grid {
  width: 100%;
}

.gallery__item--masonry {
  break-inside: avoid;
  margin-bottom: 1rem;
}

/* Item Aspect Ratios (Grid only) */
.gallery__item--square {
  aspect-ratio: 1;
}
.gallery__item--video {
  aspect-ratio: 16/9;
}
.gallery__item--portrait {
  aspect-ratio: 3/4;
}
.gallery__item--landscape {
  aspect-ratio: 4/3;
}

/* Image */
.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery__item:hover .gallery__image {
  transform: scale(1.05);
}

/* Selection Styles */
.gallery__item--selectable {
  cursor: pointer;
  position: relative;
}

.gallery__item--selectable::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  transition: all 0.2s ease;
}

.gallery__item--selectable:hover::after {
  border-color: rgba(255, 255, 255, 0.3);
}

.gallery__item--selected::after {
  border-color: rgb(59 130 246);
  background: rgba(59, 130, 246, 0.1);
}

/* Loading State */
.gallery--loading {
  pointer-events: none;
}

.gallery__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(23, 23, 23, 0.9);
  z-index: 10;
}

.gallery__loading {
  text-align: center;
}

@media (max-width: 768px) {
  .gallery--masonry {
    columns: 2 200px;
  }
}

@media (max-width: 480px) {
  .gallery--masonry {
    columns: 1 auto;
  }
}
</style>