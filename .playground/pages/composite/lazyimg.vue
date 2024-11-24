<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Page Header -->
      <header class="space-y-2">
        <h1 class="text-3xl font-bold">Lazy Image Demo</h1>

      </header>

      <!-- Image Grid -->
      <div class="grid grid-cols-3 gap-6">
        <template v-for="i in 10" :key="i">
          <div class="bg-neutral-800  p-6">
            <PrtLazyImg
                :src="`https://picsum.photos/seed/${i}/400/300`"
                :alt="`Random Image ${i}`"
                placeholder="https://via.placeholder.com/400x300?text=Loading..."
            />
          </div>
        </template>
      </div>
    </div>


  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'


// Demo state
const size = ref('base')

// Size options
const sizeOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Base', value: 'base' },
  { label: 'Large', value: 'lg' }
]
</script>