<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">
    <header>
      <h1 class="text-3xl font-bold mb-2">Loader Component</h1>
    </header>

    <!-- Spinner Variants -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Spinner Variants</h2>
      <div class="flex items-center gap-8">
        <PrtLoader type="spinner" size="sm" color="gray" />
        <PrtLoader type="spinner" size="base" color="primary" />
        <PrtLoader type="spinner" size="lg" color="success" />
      </div>
    </section>

    <!-- Dots Variants -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Dots Variants</h2>
      <div class="flex items-center gap-8">
        <PrtLoader type="dots" size="sm" color="gray" />
        <PrtLoader type="dots" size="base" color="primary" />
        <PrtLoader type="dots" size="lg" color="warning" />
      </div>
    </section>

    <!-- Rectangle Variants -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Rectangle Variants</h2>
      <div class="flex items-center gap-8">
        <PrtLoader type="rectangles" size="sm" color="gray" />
        <PrtLoader type="rectangles" size="base" color="primary" />
        <PrtLoader type="rectangles" size="lg" color="success" />
      </div>
    </section>

    <!-- Interactive Controls -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Interactive Demo</h2>

      <!-- Type Selection -->
      <div class="flex gap-2">
        <PrtBtn
            v-for="type in types"
            :key="type"
            :color="selectedType === type ? 'bg-el-7' : 'bg-el-1'"
            @click="selectedType = type"
            class="capitalize"
        >
          {{ type }}
        </PrtBtn>
      </div>

      <!-- Size Selection -->
      <div class="flex gap-2">
        <PrtBtn
            v-for="size in sizes"
            :key="size"
            :color="selectedSize === size ? 'bg-el-7' : 'bg-el-1'"
            @click="selectedSize = size"
            class="capitalize"
        >
          {{ size }}
        </PrtBtn>
      </div>

      <!-- Color Selection -->
      <div class="flex gap-2">
        <PrtBtn
            v-for="color in colors"
            :key="color"
            :color="selectedColor === color ? 'bg-el-7' : 'bg-el-1'"
            @click="selectedColor = color"
            class="capitalize"
        >
          {{ color }}
        </PrtBtn>
      </div>

      <!-- Preview -->
      <div class="flex justify-center items-center h-32 bg-neutral-800 rounded-lg">
        <PrtLoader
            :type="selectedType"
            :size="selectedSize"
            :color="selectedColor"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { LoaderType, LoaderSize, LoaderColor } from '../../../components/base/loader/types'

const types: LoaderType[] = ['spinner', 'dots', 'rectangles']
const sizes: LoaderSize[] = ['sm', 'base', 'lg']
const colors: LoaderColor[] = ['primary', 'success', 'warning', 'gray']

const selectedType = ref<LoaderType>('spinner')
const selectedSize = ref<LoaderSize>('base')
const selectedColor = ref<LoaderColor>('primary')
</script>