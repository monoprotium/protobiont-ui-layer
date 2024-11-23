<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Infinite Scroll</h1>
      </header>

      <!-- Controls -->
      <div class="flex items-center gap-4 mb-6">
        <PrtSelect
            v-model="layout"
            :options="layoutOptions"
            placeholder="Select Layout"
        />
        <PrtToggle
            v-model="cyclic"
            class="ml-4"
       />
        <span> Cyclic Loading</span>
      </div>

      <!-- Infinite Scroll -->
      <PrtInfiniteScroll
          :items="items"
          :loading="loading"
          :layout="layout"
          :cyclic="cyclic"
          :end-reached="endReached"
          @load-more="loadMore"
      >
        <template #default="{ item, index }">
          <div :class="itemVariants({ size: 'base' })">
            <h3 class="font-medium">{{ item.content }}</h3>
            <p class="text-sm text-neutral-400">
              Item #{{ cyclic ? ((index % 100) + 1) : (index + 1) }}
            </p>
          </div>
        </template>
      </PrtInfiniteScroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { itemVariants } from '../../../components/composite/infiniteScroll/variants'

interface ScrollItem {
  id: number
  content: string
}

// Core state
const items = ref<ScrollItem[]>([])
const loading = ref(false)
const layout = ref('grid')
const cyclic = ref(true)
const currentOffset = ref(0)
const endReached = ref(false)

// Layout options
const layoutOptions = [
  { label: 'Grid View', value: 'grid' },
  { label: 'List View', value: 'list' }
]

// Generate unique items
const generateItems = (start: number): ScrollItem[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: start + i,
    content: cyclic.value
        ? `Item ${(start + i) % 100 + 1}` // Cycle through 1-100
        : `Item ${start + i + 1}`         // Continue incrementing for normal mode
  }))
}

// Load more handler
const loadMore = async () => {
  if (loading.value) return
  if (!cyclic.value && endReached.value) return

  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 150))

  const newItems = generateItems(currentOffset.value)
  items.value = [...items.value, ...newItems]
  currentOffset.value += 20

  // Check for end condition in non-cyclic mode
  if (!cyclic.value && currentOffset.value >= 100) {
    endReached.value = true
  }

  loading.value = false
}

// Watch cyclic changes
watch(cyclic, (newValue) => {
  // Reset state when switching modes
  items.value = []
  currentOffset.value = 0
  endReached.value = false
  loadMore()
})

// Initial load
onMounted(() => {
  loadMore()
})
</script>