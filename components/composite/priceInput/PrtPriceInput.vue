<template>
  <div :class="containerVariants({ size, disabled })">
    <!-- Currency Select -->
    <PrtSelect
        v-model="selectedCurrency"
        :options="currencyOptions"
        variant="solid"
        :size="size"
        :disabled="disabled"
    />

    <!-- Price Input Group -->
    <div :class="inputGroupVariants({ size })">
      <PrtBtn
          :size="size"
          :color="color"
          :disabled="isDecrementDisabled"
          @click="decrementPrice"
      >
        -
      </PrtBtn>

      <PrtInputText
          :key="componentKey"
          v-model="formattedPrice"
          type="text"
          :size="size"
          :disabled="disabled"
          class="w-24 text-center"
          @input="handleInput"
      />

      <PrtBtn
          :size="size"
          :color="color"
          :disabled="isIncrementDisabled"
          @click="incrementPrice"
      >
        +
      </PrtBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { PrtBtn } from '../../base/btn'
import { PrtInputText } from '../../base/inputText'
import { PrtSelect } from '../../base/select'
import { containerVariants, inputGroupVariants } from './variants'
import type { PriceData, PriceInputProps } from './types'

const props = withDefaults(defineProps<PriceInputProps>(), {
  value: 0,
  currencies: () => ['USD', 'EUR', 'GBP'],
  size: 'base',
  min: 0,
  max: Infinity,
  step: 1,
  disabled: false,
  color: 'bg-el-7'
})

const emit = defineEmits<{
  'update:value': [data: PriceData]
}>()

// State
const selectedCurrency = ref(props.currencies[0])
const price = ref(props.value)
const componentKey = ref(0)

// helpers
const currencyOptions = computed(() =>
    props.currencies.map(currency => ({
      label: currency,
      value: currency
    }))
)


const isDecrementDisabled = computed(() =>
    props.disabled || price.value <= props.min
)

const isIncrementDisabled = computed(() =>
    props.disabled || price.value >= props.max
)


const formattedPrice = computed({
  get: () => price.value.toFixed(2),
  set: (newValue: string) => {
    const numericalValue = parseFloat(newValue)
    if (!isNaN(numericalValue) && numericalValue >= props.min && numericalValue <= props.max) {
      price.value = numericalValue
      emitUpdate()
    }
  }
})

function incrementPrice() {
  if (!isIncrementDisabled.value) {
    price.value = Math.min(props.max, price.value + props.step)
    emitUpdate()
  }
}

function decrementPrice() {
  if (!isDecrementDisabled.value) {
    price.value = Math.max(props.min, price.value - props.step)
    emitUpdate()
  }
}

function emitUpdate() {
  emit('update:value', {
    price: price.value,
    currency: selectedCurrency.value
  })
  componentKey.value++
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = parseFloat(target.value)

  if (!isNaN(value)) {
    price.value = Math.max(props.min, Math.min(props.max, value))
  }
}

// Watchers
watch(() => props.value, (newValue) => {
  if (price.value !== newValue) {
    price.value = newValue
  }
})

watch(selectedCurrency, () => {
  emitUpdate()
})
</script>