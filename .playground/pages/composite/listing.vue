<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-7xl mx-auto space-y-6">
      <header class="space-y-2">
        <h1 class="text-3xl font-bold">Listing</h1>
      </header>

      <div class="flex items-center gap-4 bg-neutral-800 p-4 ">
        <PrtSelect
            v-model="selectedColumns"
            :options="columnOptions"
            placeholder="Select columns"
            variant="solid"
            edges="square"
        />
      </div>

      <section class="listing-wrap">
        <PrtListing
            :items="listingItems"
            :items-per-row="columnsCount"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ListingItem } from '../../../components/composite/listing/types'
import type { GridCols } from '../../../components/composite/layoutGrid/types'

type ColumnValue = '1' | '2' | '3' | '4' | '5' | '6'

interface ColumnOption {
  label: string
  value: ColumnValue
}

const selectedColumns = ref<ColumnValue>('3')

const columnOptions: ColumnOption[] = [
  { label: '1 Column', value: '1' },
  { label: '2 Columns', value: '2' },
  { label: '3 Columns', value: '3' },
  { label: '4 Columns', value: '4' },
  { label: '5 Columns', value: '5' },
  { label: '6 Columns', value: '6' }
] as const

const columnsCount = computed<GridCols>(() =>
    Number(selectedColumns.value) as GridCols
)

const createDemoItems = (count: number): ListingItem[] =>
    Array.from({ length: count }, (_, index) => ({
      title: `Lorem Ipsum ${index + 1}`,
      imageUrl: `https://picsum.photos/seed/${index}/800/600`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non finibus massa, ac cursus arcu.',
      footer: `Item details ${index + 1}`
    }))


const listingItems = createDemoItems(12)
</script>

<style scoped>
.listing-wrap {
  @apply rounded-lg;
}
</style>