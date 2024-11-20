<template>
  <div
      class="prt-flag"
      :class="flagClasses"
      v-html="selectedFlagSvg"
  />
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { variants } from './variants'
import type { FlagProps } from './types'

const props = withDefaults(defineProps<FlagProps>(), {
  country: '',
  size: 'base',
})

const selectedFlagSvg = ref('')
const flagClasses = computed(() => variants({ size: props.size }))

// Use dynamic import for SVGs in Nuxt
watchEffect(async () => {
  const countryCode = props.country.toLowerCase()
  try {
    const svgModule = await import(`./_internal/${countryCode}.svg?raw`)
    selectedFlagSvg.value = svgModule.default
  } catch (error) {
    console.error(`Flag not found: ${countryCode}`, error)
    selectedFlagSvg.value = ''
  }
})
</script>