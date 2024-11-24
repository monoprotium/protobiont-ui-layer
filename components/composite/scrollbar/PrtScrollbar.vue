<!-- PrtScrollbar.vue -->
<template>
  <div 
    ref="scrollRoot"
    :class="[
      containerVariants({ variant: props.variant }),
      'group relative',
      props.class
    ]"
  >
    <!-- Main Viewport -->
    <div 
      ref="viewport"
      :class="[
        scrollAreaVariants({ variant: props.variant }),
        'relative h-full w-full rounded-[inherit]'
      ]"
    >
      <slot />
    </div>

    <!-- Scrollbar -->
    <div 
      v-if="showScrollbar"
      :class="[
        trackVariants({ variant: props.variant, autoHide: props.autoHide }),
        'absolute top-0 bottom-0 right-0 w-2'
      ]"
    >
      <div 
        :class="[
          thumbVariants({ variant: props.variant, size: props.size }),
          'absolute rounded-full'
        ]"
        :style="thumbStyle"
        @mousedown="onThumbMouseDown"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { containerVariants, scrollAreaVariants, trackVariants, thumbVariants } from './variants';
import type { ScrollbarProps } from './types';

const props = withDefaults(defineProps<ScrollbarProps>(), {
  size: 'base',
  variant: 'default',
  autoHide: true,
  class: '',
});

// Refs
const scrollRoot = ref<HTMLElement | null>(null);
const viewport = ref<HTMLElement | null>(null);

// Sizes
const contentHeight = ref(0);
const viewportHeight = ref(0);

// Update sizes
const updateSizes = () => {
  if (viewport.value && scrollRoot.value) {
    contentHeight.value = viewport.value.scrollHeight;
    viewportHeight.value = scrollRoot.value.clientHeight;
  }
};

// Watch for size changes
useResizeObserver(viewport, updateSizes);
useResizeObserver(scrollRoot, updateSizes);

// Initial size update
nextTick(updateSizes);

// Scroll position tracking
const scrollTop = ref(0);

// Throttle scroll handler using requestAnimationFrame
let ticking = false;

const onScroll = () => {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(() => {
      if (viewport.value) {
        scrollTop.value = viewport.value.scrollTop;
      }
      ticking = false;
    });
  }
};

// Add scroll event listener when component is mounted
onMounted(() => {
  if (viewport.value) {
    viewport.value.addEventListener('scroll', onScroll, { passive: true });
  }
});

// Cleanup
onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
  if (viewport.value) {
    viewport.value.removeEventListener('scroll', onScroll);
  }
});

// Computed values
const showScrollbar = computed(() => 
  contentHeight.value > viewportHeight.value + 1 // Add 1 pixel tolerance
);

const thumbHeight = computed(() => {
  const ratio = viewportHeight.value / contentHeight.value;
  return Math.max(ratio * viewportHeight.value, 20); // Minimum thumb height
});

const maxThumbPosition = computed(() => {
  return viewportHeight.value - thumbHeight.value;
});

const thumbPosition = computed(() => {
  const scrollRatio = scrollTop.value / (contentHeight.value - viewportHeight.value);
  return scrollRatio * maxThumbPosition.value;
});

const thumbStyle = computed(() => ({
  height: `${thumbHeight.value}px`,
  transform: `translateY(${thumbPosition.value}px)`,
}));

// Drag handling
let isDragging = false;
let startY = 0;
let startScrollTop = 0;

const onThumbMouseDown = (e: MouseEvent) => {
  e.preventDefault();
  isDragging = true;
  startY = e.clientY;
  startScrollTop = scrollTop.value;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.body.style.userSelect = 'none';
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging) return;

  const deltaY = e.clientY - startY;
  const scrollRatio = deltaY / maxThumbPosition.value;
  const newScrollTop = startScrollTop + scrollRatio * (contentHeight.value - viewportHeight.value);

  if (viewport.value) {
    viewport.value.scrollTop = Math.max(0, Math.min(
      newScrollTop,
      contentHeight.value - viewportHeight.value
    ));
  }
};

const onMouseUp = () => {
  isDragging = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
  document.body.style.userSelect = '';
};
</script>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
