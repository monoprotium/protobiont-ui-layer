<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <header class="space-y-2">

        <h1 class="text-3xl font-bold text-white mb-2">Price Input Demo</h1>

      </header>

      <!-- Basic Demo -->
      <section class="bg-neutral-800  p-6">
        <h2 class="text-xl font-semibold text-white mb-4">Basic Usage</h2>
        <div class="space-y-4">
          <PrtPriceInput
              :value="basicPrice"
              @update:value="handleBasicUpdate"
          />
          <div class="text-sm text-gray-400">
            Current Value: {{ formatDisplay(basicValue) }}
          </div>
        </div>
      </section>

      <!-- Custom Currencies -->
      <section class="bg-neutral-800  p-6">
        <h2 class="text-xl font-semibold text-white mb-4">Custom Currencies</h2>
        <div class="space-y-4">
          <PrtPriceInput
              :value="customPrice"
              :currencies="customCurrencies"
              @update:value="handleCustomUpdate"
          />
          <div class="text-sm text-gray-400">
            Current Value: {{ formatDisplay(customValue) }}
          </div>
        </div>
      </section>

      <!-- With Initial Value -->
      <section class="bg-neutral-800  p-6">
        <h2 class="text-xl font-semibold text-white mb-4">With Initial Value</h2>
        <div class="space-y-4">
          <PrtPriceInput
              :value="presetPrice"
              @update:value="handlePresetUpdate"
          />
          <div class="text-sm text-gray-400">
            Current Value: {{ formatDisplay(presetValue) }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Types
interface PriceData {
  price: number
  currency: string
}

// Select component defaults
const defaultSelectProps = {
  hoverBgColor: 'hover:bg-gray-700',
  triggerEvent: 'click',
  textColor: 'text-white',
  bgColor: 'bg-gray-800'
}

// Demo data
const basicPrice = ref(0)
const basicValue = ref<PriceData>({ price: 0, currency: 'USD' })

const customPrice = ref(0)
const customValue = ref<PriceData>({ price: 0, currency: 'JPY' })
const customCurrencies = ['JPY', 'CNY', 'KRW', 'INR']

const presetPrice = ref(99.99)
const presetValue = ref<PriceData>({ price: 99.99, currency: 'EUR' })

// Format display helper
const formatDisplay = (value: PriceData): string => {
  return `${value.price.toFixed(2)} ${value.currency}`
}

// Event handlers
const handleBasicUpdate = (data: PriceData) => {
  basicValue.value = data
  basicPrice.value = data.price
}

const handleCustomUpdate = (data: PriceData) => {
  customValue.value = data
  customPrice.value = data.price
}

const handlePresetUpdate = (data: PriceData) => {
  presetValue.value = data
  presetPrice.value = data.price
}
</script>