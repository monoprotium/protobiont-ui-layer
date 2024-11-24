<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Demo Header -->
      <header class="space-y-4">
        <NuxtLink
            to="/"
            class="inline-flex items-center text-neutral-400 hover:text-neutral-300 transition-colors gap-2"
        >
          <ArrowLeft class="w-4 h-4" />
          Back to Home
        </NuxtLink>
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Pagination Component Demo</h1>
          <p class="text-neutral-400">
            Simple pagination with items per page control.
          </p>
        </div>
      </header>

      <!-- Items Display -->
      <section class="bg-neutral-800 divide-y divide-neutral-700">
        <!-- Items List -->
        <div class="divide-y divide-neutral-700">
          <div
              v-for="item in paginatedItems"
              :key="item.id"
              class="p-4 hover:bg-neutral-700/50 transition-colors"
          >
            <span class="text-sm text-neutral-400 mr-3">
              #{{ item.id }}
            </span>
            {{ item.name }}
          </div>
        </div>

        <!-- Pagination Footer -->
        <div
            class="bg-neutral-900/50 p-4 flex items-center justify-between"
        >
          <div class="text-sm text-neutral-400">
            Showing {{ paginationInfo.from }}-{{ paginationInfo.to }}
            of {{ paginationInfo.total }} items
          </div>
          <PrtPagination
              v-model:page="currentPage"
              :total-pages="totalPages"
              variant="default"
              :show-first-last="true"
              :show-arrows="true"
          />
        </div>
      </section>

      <!-- Variant Examples -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium">Pagination Variants</h2>
        <div class="space-y-6 bg-neutral-800 p-6">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Default</h3>
            <PrtPagination
                v-model:page="currentPage"
                :total-pages="totalPages"
                variant="default"
            />
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Bordered</h3>
            <PrtPagination
                v-model:page="currentPage"
                :total-pages="totalPages"
                variant="bordered"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'

const ITEMS_PER_PAGE = 10

interface Item {
  id: number
  name: string
}

// Mock data
function generateItems(count: number): Item[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }))
}

// State
const currentPage = ref(1)
const allItems = ref<Item[]>(generateItems(100))

// Computed
const totalPages = computed(() =>
    Math.ceil(allItems.value.length / ITEMS_PER_PAGE)
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  return allItems.value.slice(start, start + ITEMS_PER_PAGE)
})

const paginationInfo = computed(() => {
  const total = allItems.value.length
  const from = (currentPage.value - 1) * ITEMS_PER_PAGE + 1
  const to = Math.min(from + ITEMS_PER_PAGE - 1, total)
  return { from, to, total }
})
</script>