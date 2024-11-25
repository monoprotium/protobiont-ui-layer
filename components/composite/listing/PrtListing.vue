<template>
  <PrtLayoutGrid
      :cols="itemsPerRow"
      :gap="computedGap"
      class="w-full"
  >
    <PrtCard
        v-for="item in items"
        :key="item.title"
        variant="default"
        edges="square"
        class="overflow-hidden"
    >
      <template #image>
        <div class="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <img
              :src="item.imageUrl"
              :alt="item.title"
              class="w-full h-full object-cover"
          />
        </div>
      </template>

      <template #header>
        <h3 class="text-lg font-semibold text-white">
          {{ item.title }}
        </h3>
      </template>

      <template #content>
        <p class="text-white/90">
          {{ item.description }}
        </p>
      </template>

      <template #footer>
        <div class="text-sm text-white/70">
          {{ item.footer }}
        </div>
      </template>
    </PrtCard>
  </PrtLayoutGrid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ListingItem } from './types'
import type { GridCols, GridGap } from '../layoutGrid/types'

interface Props {
  items: ListingItem[]
  itemsPerRow: GridCols
}

const props = defineProps<Props>()

const computedGap = computed<GridGap>(() => (props.itemsPerRow === 6 ? 'sm' : 'md'));

</script>