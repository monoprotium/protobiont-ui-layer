<template>
  <div class="min-h-screen ">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-white">
          Input Number
        </h1>
      </header>
      <main>
      <!-- Variants -->
      <section class="space-y-4 mb-6">
        <h2 class="text-xl font-semibold text-white">Variants</h2>
        <div class="grid gap-4 md:grid-cols-3 bg-neutral-950 p-6">
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Filled (Default)</label
            >
            <PrtInputNumber
                v-model="values.filled"
                :min="0"
                :max="10"
                variant="filled"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Outline</label>
            <PrtInputNumber
                v-model="values.outline"
                :min="0"
                :max="10"
                variant="outline"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Minimal</label>
            <PrtInputNumber
                v-model="values.minimal"
                :min="0"
                :max="10"
                variant="minimal"
            />
          </div>
        </div>
      </section>

      <!-- Edge Variations -->
      <section class="space-y-4 mb-6">
        <h2 class="text-xl font-semibold text-white">
          Edge Variations
        </h2>
        <div class="grid gap-4 md:grid-cols-3 bg-neutral-950 p-6 ">
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Square (Default)</label
            >
            <PrtInputNumber
                v-model="values.square"
                edges="square"
                variant="filled"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Rounded</label>
            <PrtInputNumber
                v-model="values.rounded"
                edges="rounded"
                variant="filled"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Circle</label>
            <PrtInputNumber
                v-model="values.circle"
                edges="circle"
                variant="filled"
            />
          </div>
        </div>
      </section>

      <!-- Edge & Variant Combinations -->
      <section class="space-y-4 mb-6">
        <h2 class="text-xl font-semibold text-white">
          Edge & Variant Combinations
        </h2>
        <div class="grid gap-4 md:grid-cols-3 bg-neutral-950 p-6 ">
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Rounded Outline</label
            >
            <PrtInputNumber
                v-model="values.roundedOutline"
                edges="rounded"
                variant="outline"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Circle Minimal</label
            >
            <PrtInputNumber
                v-model="values.circleMinimal"
                edges="circle"
                variant="minimal"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Rounded Filled</label
            >
            <PrtInputNumber
                v-model="values.roundedFilled"
                edges="rounded"
                variant="filled"
            />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4 mb-6">
        <h2 class="text-xl font-semibold text-white">Sizes</h2>
        <div class="grid gap-4 md:grid-cols-3 bg-neutral-950 p-6 ">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Small</label>
            <PrtInputNumber
                v-model="values.small"
                size="sm"
                edges="rounded"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Base</label>
            <PrtInputNumber
                v-model="values.base"
                size="base"
                edges="rounded"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Large</label>
            <PrtInputNumber
                v-model="values.large"
                size="lg"
                edges="rounded"
            />
          </div>
        </div>
      </section>



      </main>
    </div>

</template>

<script setup lang="ts">
import { reactive } from "vue";

const values = reactive({
  // Variants
  filled: 5,
  outline: 3,
  minimal: 1,

  // Edge variations
  square: 4,
  rounded: 5,
  circle: 6,

  // Edge & variant combinations
  roundedOutline: 3,
  circleMinimal: 4,
  roundedFilled: 5,

  // Sizes
  small: 2,
  base: 4,
  large: 6,


});
</script>
