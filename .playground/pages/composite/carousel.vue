<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="flex flex-col items-center">

      <h1 class="text-3xl font-semibold text-white mb-16">Carousel Demo</h1>

      <h2 class="text-xl font-semibold text-white mb-4">Loop Enabled (Default)</h2>
      <div class="w-full max-w-6xl   overflow-hidden mb-8">
        <PrtCarousel :items="carouselItems" :items-per-slide="4" />
      </div>

      <h2 class="text-xl font-semibold text-white mb-4">Loop Disabled</h2>
      <div class="w-full max-w-6xl  overflow-hidden mb-8">
        <PrtCarousel :items="carouselItems" :loop="false" :items-per-slide="5" />
      </div>

      <h2 class="text-xl font-semibold text-white mb-4">Autoplay Enabled</h2>
      <div class="w-full max-w-6xl overflow-hidden">
        <PrtCarousel :items="carouselItems" :autoplay="true" :items-per-slide="4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CarouselItem } from '../../../components/composite/carousel/types';
import PrtCarousel from '../../../components/composite/carousel/PrtCarousel.vue';

const carouselItems: CarouselItem[] = [];

for (let i = 1; i <= 16; i++) {
  const price = 99.99 + i * 10; // Deterministic price based on index
  carouselItems.push({
    title: `Product ${i}`,
    description: `Description for product ${i}`,
    imageUrl: `https://picsum.photos/id/${i}/400/300`,
    footer: `$${price.toFixed(2)}`,
  });
}
</script>