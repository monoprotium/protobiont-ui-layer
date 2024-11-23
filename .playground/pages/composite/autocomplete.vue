<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="max-w-md mx-auto">
      <h1 class="text-xl font-semibold text-white mb-6">Autocomplete Demo</h1>

      <PrtAutocomplete
          v-model="selected"
          :items="items"
          size="base"
          variant="filled"
          edges="rounded"
          placeholder="Search fruits..."
      />

      <div class="mt-4 text-gray-400">
        Selected value: {{ selected }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = ref<string | null>(null)

const items = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Pineapple',

]
</script>