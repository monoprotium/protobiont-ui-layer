<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-8">

      <header class="space-y-4">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Mode Selector</h1>
        </div>
      </header>

      <!-- Demo -->
      <section class="space-y-4">
        <div class="p-8 border border-neutral-800 transition-colors duration-200"
             :class="[mode === 'dark' ? 'bg-neutral-900' : 'bg-neutral-800']"
        >
          <div class="flex items-center justify-between">
            <p class="text-neutral-400">
              Current Mode: <span class="text-white">{{ mode }}</span>
            </p>

            <PrtModeSelector v-model="mode" />
          </div>
        </div>
      </section>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mode = ref('light')
</script>