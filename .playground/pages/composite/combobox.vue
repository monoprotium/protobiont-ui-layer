<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="flex flex-col items-center">

      <div class="mb-8 flex items-center gap-2">
        <h1 class="text-xl font-semibold text-white mb-6">Combobox</h1>
      </div>



      <div class="w-full max-w-2xl space-y-8">
        <!-- Basic Example -->
        <div>
          <h2 class="text-lg text-white mb-4">Basic Usage</h2>
          <PrtComboBox
              v-model="selectedFruit"
              :options="fruits"
              placeholder="Select a fruit..."
          />
          <p class="mt-2 text-sm text-neutral-400">
            Selected: <span class="text-white">{{ selectedFruit || 'None' }}</span>
          </p>
        </div>

        <!-- Different Sizes -->
        <div class="space-y-4">
          <h2 class="text-lg text-white mb-4">Different Sizes</h2>
          <div class="space-y-4">
            <PrtComboBox
                v-model="selectedSmall"
                :options="fruits"
                size="sm"
                placeholder="Small combobox..."
                color="bg-el-3"
            />
            <PrtComboBox
                v-model="selectedBase"
                :options="fruits"
                size="base"
                placeholder="Base combobox..."
                color="bg-el-7"
            />
            <PrtComboBox
                v-model="selectedLarge"
                :options="fruits"
                size="lg"
                placeholder="Large combobox..."
                color="bg-el-8"
            />
          </div>
        </div>

        <!-- Custom Values Example -->
        <div>
          <h2 class="text-lg text-white mb-4">Custom Value Input</h2>
          <PrtComboBox
              v-model="customValue"
              :options="fruits"
              :allow-custom-value="true"
              placeholder="Type anything or select..."
          />
          <p class="mt-2 text-sm text-neutral-400">
            Value: <span class="text-white">{{ customValue || 'None' }}</span>
          </p>
        </div>

        <!-- Disabled State -->
        <div>
          <h2 class="text-lg text-white mb-4">Disabled State</h2>
          <PrtComboBox
              v-model="selectedFruit"
              :options="fruits"
              disabled
              placeholder="This is disabled..."
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const fruits = [
  'Apple',
  'Banana',
  'Blueberry',
  'Cantaloupe',
  'Dragon fruit',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango'
]

const selectedFruit = ref('')
const selectedSmall = ref('')
const selectedBase = ref('')
const selectedLarge = ref('')
const customValue = ref('')
</script>