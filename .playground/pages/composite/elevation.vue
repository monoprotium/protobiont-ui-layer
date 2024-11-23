<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Elevation</h1>
    </header>

    <!-- Basic Usage -->
    <section class="bg-neutral-800 p-6">
      <h2 class="text-xl font-semibold text-white mb-4">Basic Usage</h2>
      <div class="grid grid-cols-2 gap-4">
        <PrtElevation :level="1" class="rounded">
          <div class="bg-neutral-700 text-white p-4">
            Elevation Level 1
          </div>
        </PrtElevation>
        <PrtElevation :level="3" class="rounded">
          <div class="bg-neutral-700 text-white p-4">
            Elevation Level 3
          </div>
        </PrtElevation>
      </div>
    </section>

    <!-- Elevation Levels -->
    <section class="bg-neutral-800 p-6">
      <h2 class="text-xl font-semibold text-white mb-4">Elevation Levels</h2>
      <div class="grid grid-cols-3 gap-4">
        <template v-for="n in 9" :key="n">
          <PrtElevation :level="n as ElevationLevel" class="rounded">
            <div class="bg-neutral-700 text-white p-4 text-center">
              Level {{ n }}
            </div>
          </PrtElevation>
        </template>
      </div>
    </section>

    <!-- Interactive Examples -->
    <section class="bg-neutral-800 p-6">
      <h2 class="text-xl font-semibold text-white mb-4">Interactive</h2>
      <div class="grid grid-cols-2 gap-4">
        <PrtElevation
            :level="hoveredCard === 1 ? 8 : 2"
            class="rounded-lg cursor-pointer transition-all duration-300"
            @mouseenter="hoveredCard = 1"
            @mouseleave="hoveredCard = null"
        >
          <div class="bg-neutral-700 ext-white p-6 text-center">
            Hover to Elevate
          </div>
        </PrtElevation>

        <PrtElevation
            :level="isActive ? 12 : 4"
            class="rounded-lg transition-all duration-300"
        >
          <div
              class="bg-neutral-700 ext-white p-6 text-center cursor-pointer"
              @click="toggleActive"
          >
            Click to {{ isActive ? 'Lower' : 'Raise' }}
          </div>
        </PrtElevation>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ElevationLevel } from '../../../components/composite/elevation'

const hoveredCard = ref<number | null>(null)
const isActive = ref(false)

const toggleActive = () => {
  isActive.value = !isActive.value
}
</script>