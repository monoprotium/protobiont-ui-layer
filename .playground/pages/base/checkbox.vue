<template>
  <div class="min-h-screen bg-neutral-900 ">

      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Checkbox Component</h1>
      </div>

      <div class="grid grid-cols-1 gap-8">

        <!-- Sizes Section -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-8 text-white">Sizes</h2>


          <div class="flex mb-6">
            <!-- Small Square Checkbox -->
            <div class="mr-4">
              <PrtCheckbox v-model="smallSquareValue" size="sm" edges="square" color="bg-green-600">
                <span class="text-gray-400">Small Square</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ smallSquareValue }}</p>
            </div>

            <!-- Small Rounded Checkbox -->
            <div class="mr-4">
              <PrtCheckbox v-model="smallRoundedValue" size="sm" edges="rounded" color="bg-green-600">
                <span class="text-gray-400">Small Rounded</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ smallRoundedValue }}</p>
            </div>

            <!-- Small Circle Checkbox -->
            <div>
              <PrtCheckbox v-model="smallCircleValue" size="sm" edges="circle" color="bg-green-600">
                <span class="text-gray-400">Small Circle</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ smallCircleValue }}</p>
            </div>
          </div>


          <div class="flex mb-6">
            <!-- Base Square Checkbox -->
            <div class="mr-4">
              <PrtCheckbox v-model="baseSquareValue" size="base" edges="square" color="bg-green-600">
                <span class="text-gray-400">Base Square</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ baseSquareValue }}</p>
            </div>

            <!-- Base Rounded Checkbox -->
            <div class="mr-4">
              <PrtCheckbox v-model="baseRoundedValue" size="base" edges="rounded" color="bg-green-600">
                <span class="text-gray-400">Base Rounded</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ baseRoundedValue }}</p>
            </div>

            <!-- Base Circle Checkbox -->
            <div>
              <PrtCheckbox v-model="baseCircleValue" size="base" edges="circle" color="bg-green-600">
                <span class="text-gray-400">Base Circle</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ baseCircleValue }}</p>
            </div>
          </div>


          <div class="flex">
            <!-- Large Square Checkbox -->
            <div class="mr-4">
              <PrtCheckbox v-model="largeSquareValue" size="lg" edges="square" color="bg-green-600">
                <span class="text-gray-400">Large Square</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ largeSquareValue }}</p>
            </div>

            <!-- Large Rounded Checkbox -->
            <div class="mr-4">
              <PrtCheckbox v-model="largeRoundedValue" size="lg" edges="rounded" color="bg-green-600">
                <span class="text-gray-400">Large Rounded</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ largeRoundedValue }}</p>
            </div>

            <!-- Large Circle Checkbox -->
            <div>
              <PrtCheckbox v-model="largeCircleValue" size="lg" edges="circle" color="bg-green-600">
                <span class="text-gray-400">Large Circle</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ largeCircleValue }}</p>
            </div>
          </div>
        </section>

        <!-- Colors Section -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-8 text-white">Colors</h2>
          <div class="flex gap-8">
            <div class="min-w-22">
              <PrtCheckbox v-model="defaultColor" edges="square" color="bg-el-1">
                <span class="text-gray-400">Default</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ defaultColor }}</p>
            </div>
            <div class="min-w-22">
              <PrtCheckbox v-model="primaryColor" edges="square" color="bg-el-4">
                <span class="text-gray-400">Primary</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ primaryColor }}</p>
            </div>
            <div class="min-w-22">
              <PrtCheckbox v-model="successColor" edges="square" color="bg-el-6">
                <span class="text-gray-400">Success</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ successColor }}</p>
            </div>
            <div class="min-w-22">
              <PrtCheckbox v-model="dangerColor" edges="square" color="bg-el-8">
                <span class="text-gray-400">Danger</span>
              </PrtCheckbox>
              <p class="text-gray-400 mt-2">Value: {{ dangerColor }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

// Size
const smallSquareValue = ref(false);
const smallRoundedValue = ref(false);
const smallCircleValue = ref(false);
const baseSquareValue = ref(false);
const baseRoundedValue = ref(false);
const baseCircleValue = ref(false);
const largeSquareValue = ref(false);
const largeRoundedValue = ref(false);
const largeCircleValue = ref(false);

// Color
const defaultColor = ref(false);
const primaryColor = ref(false);
const successColor = ref(false);
const dangerColor = ref(false);
</script>