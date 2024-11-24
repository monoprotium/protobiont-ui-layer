<template>
  <div class="overflow-hidden bg-neutral-800">
    <div
        v-for="(param, index) in params"
        :key="param.name"
        :class="[
        'flex items-center px-4 py-3',
        index % 2 === 0 ? 'bg-neutral-800' : 'bg-neutral-900'
      ]"
    >
      <!-- Parameter Name -->
      <div class="w-1/3 font-medium text-white/70">
        {{ param.name }}
      </div>

      <!-- Parameter Value -->
      <div class="w-2/3 text-white">
        {{ param.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ListingParamsProps } from './types'

const props = withDefaults(defineProps<ListingParamsProps>(), {
  params: () => [],
  size: 'base',
  variant: 'default',
  color: '',
  textColor: ''
})</script>