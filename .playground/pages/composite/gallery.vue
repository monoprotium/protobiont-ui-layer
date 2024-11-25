<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Gallery</h1>
      </div>

      <!-- Controls -->
      <div class="mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Layout Selection -->
          <div class="space-y-6">
            <h3 class="text-lg font-medium text-white">Layout</h3>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-400">Display Mode</label>
              <PrtSelect
                  v-model="layout"
                  :options="[
                  { value: 'grid', label: 'Grid' },
                  { value: 'masonry', label: 'Masonry'  },
                ]"
              />
            </div>
          </div>

          <!-- Spacing & Shape -->
          <div class="space-y-6">
            <h3 class="text-lg font-medium text-white">Spacing & Shape</h3>
            <!-- Spacing -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-400">Gap Size</label>
              <PrtSelect
                  v-model="gap"
                  :options="[
                  { value: 'none', label: 'No gaps (0px)' },
                  { value: 'sm', label: 'Small (8px)' },
                  { value: 'base', label: 'Medium (16px)' },
                  { value: 'lg', label: 'Large (24px)' },
                ]"
              />
            </div>

            <!-- Aspect Ratio (only for grid) -->
            <div v-if="layout === 'grid'" class="space-y-2">
              <label class="block text-sm font-medium text-gray-400">Image Shape</label>
              <PrtSelect
                  v-model="aspectRatio"
                  :options="[
                  { value: 'square', label: 'Square (1:1)' },
                  { value: 'landscape', label: 'Landscape (4:3)' },
                  { value: 'portrait', label: 'Portrait (3:4)' },
                  { value: 'video', label: 'Widescreen (16:9)' },
                ]"
              />
            </div>
          </div>

          <!-- Interactive Features -->
          <div class="space-y-6">
            <h3 class="text-lg font-medium text-white">Interactive Features</h3>
            <!-- Interactive Toggles -->
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <PrtToggle v-model="selectable" :class="selectable ? 'opacity-100' : 'opacity-50'" />
                <div>
                  <div class="text-sm font-medium text-white">Selection Mode</div>
                  <div class="text-xs text-gray-400">
                    {{ selectable ? 'ON: Click images to select them' : 'OFF: Images are not selectable' }}
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <PrtToggle v-model="isLoading" :class="isLoading ? 'opacity-100' : 'opacity-50'" />
                <div>
                  <div class="text-sm font-medium text-white">Loading Overlay</div>
                  <div class="text-xs text-gray-400">
                    {{ isLoading ? 'ON: Loading state is visible' : 'OFF: Gallery is interactive' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div class="bg-neutral-900">
        <PrtGallery
            :images="demoImages"
            :layout="layout as GalleryLayout"
            :gap="gap as GalleryGap"
            :aspect-ratio="aspectRatio as GalleryAspectRatio"
            :selectable="selectable"
            :loading="isLoading"
            @select="handleSelect"
            @selectMultiple="handleMultipleSelect"
        />
      </div>

      <!-- Selected Images -->
      <div v-if="selectable && selectedImages.length > 0" class="mt-8 bg-neutral-800 p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Selected Images ({{ selectedImages.length }})</h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <div v-for="image in selectedImages" :key="image.id" class="aspect-square overflow-hidden">
            <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { GalleryImage, GalleryLayout, GalleryGap, GalleryAspectRatio } from '../../../components/composite/gallery/types';

// Gallery controls
const layout = ref<GalleryLayout>('masonry');
const gap = ref<GalleryGap>('base');
const aspectRatio = ref<GalleryAspectRatio>('landscape');
const selectable = ref(false);
const isLoading = ref(false);

// Selected images
const selectedImages = ref<GalleryImage[]>([]);

// Demo images with varied dimensions
const demoImages = [
  { id: 1, src: 'https://placehold.co/600x400', caption: 'Landscape format (4:3)' },
  { id: 2, src: 'https://placehold.co/600x800', caption: 'Portrait format (3:4)' },
  { id: 3, src: 'https://placehold.co/600x500', caption: 'Custom ratio (6:5)' },
  { id: 4, src: 'https://placehold.co/600x900', caption: 'Tall portrait (2:3)' },
  { id: 5, src: 'https://placehold.co/600x450', caption: 'Wide format (4:3)' },
  { id: 6, src: 'https://placehold.co/600x700', caption: 'Portrait (6:7)' },
  { id: 7, src: 'https://placehold.co/600x600', caption: 'Perfect square (1:1)' },
  { id: 8, src: 'https://placehold.co/600x450', caption: 'Landscape (4:3)' },
].map((img) => ({
  ...img,
  alt: `Gallery image - ${img.caption}`,
}));

// Event handlers
const handleSelect = (image: GalleryImage) => {
  console.log('Selected single image:', image);
};

const handleMultipleSelect = (images: GalleryImage[]) => {
  selectedImages.value = images;
};
</script>