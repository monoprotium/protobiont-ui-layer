<template>
  <nav aria-label="Pagination" :class="containerVariants({ size })">
    <!-- First Page Button -->
    <PrtBtn
        v-if="showFirstLast"
        :class="[
        itemVariants({
          variant,
          state: isFirstPage ? 'disabled' : 'default',
        }),
      ]"
        :disabled="isFirstPage"
        @click="handlePageChange(1)"
        aria-label="First page"
    >
      <ChevronFirst class="w-4 h-4" />

    </PrtBtn>

    <!-- Previous Button -->
    <PrtBtn
        v-if="showArrows"
        :class="[
        itemVariants({
          variant,
          state: isFirstPage ? 'disabled' : 'default',
        }),
      ]"
        :disabled="isFirstPage"
        @click="handlePageChange(page - 1)"
        aria-label="Previous page"
    >
      <ChevronLeft class="w-4 h-4" />
    </PrtBtn>

    <!-- Page Numbers -->
    <PrtBtn
        v-for="p in totalPages"
        :key="p"
        :class="[
        itemVariants({
          variant,
          state: p === page ? 'active' : 'default',
        }),
      ]"
        :aria-current="p === page ? 'page' : undefined"
        @click="handlePageChange(p)"
    >
      {{ p }}
    </PrtBtn>

    <!-- Next Button -->
    <PrtBtn
        v-if="showArrows"
        :class="[
        itemVariants({
          variant,
          state: isLastPage ? 'disabled' : 'default',
        }),
      ]"
        :disabled="isLastPage"
        @click="handlePageChange(page + 1)"
        aria-label="Next page"
    >
      <ChevronRight class="w-4 h-4" />
    </PrtBtn>

    <!-- Last Page Button -->
    <PrtBtn
        v-if="showFirstLast"
        :class="[
        itemVariants({
          variant,
          state: isLastPage ? 'disabled' : 'default',
        }),
      ]"
        :disabled="isLastPage"
        @click="handlePageChange(totalPages)"
        aria-label="Last page"
    >
      <ChevronLast class="w-4 h-4"/>

    </PrtBtn>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight, ChevronFirst, ChevronLast } from 'lucide-vue-next'
import { containerVariants, itemVariants } from './variants'
import type { PaginationProps } from './types'

const props = withDefaults(defineProps<PaginationProps>(), {
  size: 'base',
  variant: 'default',
  showArrows: true,
  showFirstLast: true,
  disabled: false,
  color: 'bg-blue-600',
})

const emit = defineEmits<{
  'update:page': [page: number]
}>()

const page = computed({
  get: () => props.page,
  set: (val) => emit('update:page', val),
})

const totalPages = computed(() => props.totalPages)
const isFirstPage = computed(() => page.value === 1)
const isLastPage = computed(() => page.value === totalPages.value)

function handlePageChange(newPage: number) {
  if (newPage >= 1 && newPage <= totalPages.value && !props.disabled) {
    page.value = newPage
  }
}
</script>