<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">
    <header>
      <h1 class="text-3xl font-bold text-white mb-8">FilterBar Component Demo</h1>
    </header>

    <!-- Vertical Layout Section -->
    <section class="bg-neutral-800 bg-neutral-700 p-6 mb-6">
      <h2 class="text-xl font-semibold text-white mb-4">Vertical Layout</h2>
      <div class="flex gap-6">
        <PrtFilterBar
            v-model="selectedFruits"
            :items="fruitItems"
            direction="vertical"
            class="w-48"
        />
        <div class="bg-neutral-700/50 bg-neutral-700 p-4 flex-1">
          <h3 class="text-sm font-medium mb-2 text-neutral-300">Selected:</h3>
          <div class="flex flex-wrap gap-2">
            <PrtChip
                v-for="item in selectedFruits"
                :key="item"
                size="sm"
                variant="solid"
                color="bg-el-6"
            >
              {{ item }}
            </PrtChip>
          </div>
        </div>
      </div>
    </section>

    <!-- Horizontal Layout Section -->
    <section class="bg-neutral-800 bg-neutral-700 p-6 mb-6">
      <h2 class="text-xl font-semibold text-white mb-4">Horizontal Layout</h2>
      <div class="flex flex-col gap-4">
        <PrtFilterBar
            v-model="selectedCategories"
            :items="categoryItems"
            direction="horizontal"
        />
        <div class="bg-neutral-700/50 bg-neutral-700 p-4 min-h-24">
          <h3 class="text-sm font-medium mb-2 text-neutral-300">Selected:</h3>
          <div class="flex flex-wrap gap-2">
            <PrtChip
                v-for="item in selectedCategories"
                :key="item"
                size="sm"
                variant="solid"
                color="bg-el-7"
            >
              {{ item }}
            </PrtChip>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Example -->
    <section class="bg-neutral-800 bg-neutral-700 p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-white">Interactive Filters</h2>
        <div class="flex gap-2">
          <PrtBtn
              @click="clearFilters"
              color="bg-el-8"
              size="sm"
          >
            Clear All
          </PrtBtn>
          <PrtBtn
              @click="selectAllFilters"
              color="bg-el-6"
              size="sm"
          >
            Select All
          </PrtBtn>
        </div>
      </div>

      <div class="grid grid-cols-[1fr_1fr_2fr] gap-6">
        <!-- Price Range -->
        <div>
          <h3 class="text-sm font-medium mb-3 text-neutral-300">Price Range</h3>
          <PrtFilterBar
              v-model="selectedPriceRanges"
              :items="priceRangeItems"
              direction="vertical"
          />
        </div>

        <!-- Brands -->
        <div>
          <h3 class="text-sm font-medium mb-3 text-neutral-300">Brands</h3>
          <PrtFilterBar
              v-model="selectedBrands"
              :items="brandItems"
              direction="vertical"
          />
        </div>

        <!-- Results Summary -->
        <div class="bg-neutral-700/50 bg-neutral-700 p-4 min-h-48">
          <h3 class="text-sm font-medium mb-3 text-neutral-300">Applied Filters</h3>
          <div class="space-y-3">
            <div v-if="selectedPriceRanges.length">
              <p class="text-xs text-neutral-400 mb-1">Price:</p>
              <div class="flex flex-wrap gap-2">
                <PrtChip
                    v-for="range in selectedPriceRanges"
                    :key="range"
                    size="sm"
                    variant="solid"
                    color="bg-el-4"
                >
                  {{ range }}
                </PrtChip>
              </div>
            </div>
            <div v-if="selectedBrands.length">
              <p class="text-xs text-neutral-400 mb-1">Brands:</p>
              <div class="flex flex-wrap gap-2">
                <PrtChip
                    v-for="brand in selectedBrands"
                    :key="brand"
                    size="sm"
                    variant="solid"
                    color="bg-el-4"
                >
                  {{ brand }}
                </PrtChip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const fruitItems = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' }

];

const categoryItems = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'books', label: 'Books' }

];

const priceRangeItems = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-100', label: '$50 - $200' },
  { value: 'over-200', label: 'Over $200' }
];

const brandItems = [
  { value: 'apple', label: 'Apple' },
  { value: 'samsung', label: 'Samsung' },
  { value: 'sony', label: 'Sony' },
  { value: 'lg', label: 'LG' }
];

// Selected values
const selectedFruits = ref<string[]>([]);
const selectedCategories = ref<string[]>([]);
const selectedPriceRanges = ref<string[]>([]);
const selectedBrands = ref<string[]>([]);

// Helpers
const clearFilters = () => {
  selectedPriceRanges.value = [];
  selectedBrands.value = [];
};

const selectAllFilters = () => {
  selectedPriceRanges.value = priceRangeItems.map(item => item.value);
  selectedBrands.value = brandItems.map(item => item.value);
};
</script>