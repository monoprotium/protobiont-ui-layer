<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Header -->
      <header class="space-y-4">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Product Card</h1>
        </div>
      </header>

      <!-- Basic Usage -->
      <section class="space-y-6">
        <h2 class="text-xl font-medium mb-4">Basic Usage</h2>

        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="mb-8 md:mb-0">
            <h3 class="text-sm font-medium text-neutral-400 mb-4">
              Inline Quantity Input
            </h3>
            <PrtProductCard
                :product="sampleProduct"
                color="bg-el-7"
                quantityLayout="inline"
                @add-to-cart="handleAddToCart"
                class="mx-auto md:mx-0"
            />
          </div>

          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-4">
              Full Width Quantity Input
            </h3>
            <PrtProductCard
                :product="sampleProduct"
                color="bg-el-7"
                quantityLayout="stacked"
                @add-to-cart="handleAddToCart"
                class="mx-auto md:mx-0"
            />
          </div>
        </div>
      </section>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-xl font-medium mb-4">Variants</h2>

        <div class="flex flex-col md:flex-row md:space-x-8">
          <PrtProductCard
              variant="solid"
              :product="sampleProduct"
              color="bg-el-7"
              class="mb-8 md:mb-0 mx-auto md:mx-0"
          />

          <PrtProductCard
              variant="outline"
              :product="sampleProduct"
              color="bg-el-7"
              class="mb-8 md:mb-0 mx-auto md:mx-0"
          />

          <PrtProductCard
              variant="ghost"
              :product="sampleProduct"
              color="bg-el-7"
              class="mx-auto md:mx-0"
          />
        </div>
      </section>

      <!-- Cart Log -->
      <section
          v-if="cartLog.length"
          class="bg-neutral-800 p-6 space-y-4"
      >
        <h2 class="text-xl font-medium">Cart Activity</h2>

        <div class="space-y-2">
          <div
              v-for="(log, index) in cartLog"
              :key="index"
              class="text-sm text-neutral-400"
          >
            Added {{ log }} items to cart
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const cartLog = ref<number[]>([]);

const sampleProduct = {
  id: 1,
  title: 'Sample Product',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum purus mauris, id condimentum nisi tincidunt ege',
  price: 29.99,
  rating: 4.5
};

function handleAddToCart(quantity: number) {
  cartLog.value.unshift(quantity);
}
</script>