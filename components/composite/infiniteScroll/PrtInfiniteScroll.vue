<template>
  <div
      ref="scrollContainerRef"
      :class="[
      containerVariants({ size }),
      'relative overflow-y-auto'
    ]"
      @scroll="handleScroll"
  >
    <div :class="contentVariants({ layout })">
      <template v-if="items.length > 0">
        <slot
            v-for="(item, index) in items"
            :key="`${item.id}-${index}`"
            :item="item"
            :index="index"
        >
          <div :class="itemVariants({ size })">
            {{ item.content }}
          </div>
        </slot>
      </template>

      <template v-else>
        <div class="text-center py-4 text-neutral-400">
          No items to display
        </div>
      </template>
    </div>

    <!-- Loading indicator -->
    <div v-if="loading" class="flex justify-center py-4">
      <PrtLoader size="sm" />
    </div>

    <!-- End message for non-cyclic -->
    <div v-if="!cyclic && endReached" class="text-center py-4 text-neutral-400">
      No more items to load
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { containerVariants, contentVariants, itemVariants } from './variants'
import type { InfiniteScrollProps } from './types'

const props = withDefaults(defineProps<InfiniteScrollProps>(), {
  items: () => [],
  size: 'base',
  layout: 'grid',
  threshold: 100,
  loading: false,
  cyclic: true,
  endReached: false
})

const emit = defineEmits<{
  'load-more': []
}>()

const scrollContainerRef = ref<HTMLElement | null>(null)

const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement
  const atBottom =
      target.scrollTop + target.clientHeight >=
      target.scrollHeight - props.threshold

  if (atBottom && !props.loading && (props.cyclic || !props.endReached)) {
    emit('load-more')
  }
}

onMounted(() => {
  if (scrollContainerRef.value && props.items.length === 0) {
    emit('load-more')
  }
})
</script>