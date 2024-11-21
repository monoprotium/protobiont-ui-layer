<template>
  <ul :class="['prt-list', listClasses]">
    <li
        v-for="item in items"
        :key="item.id"
        :class="[
        'prt-list__item',
        {
          'prt-list__item--active': item.active,
          'prt-list__item--disabled': item.disabled,
        },
        `prt-list__item--${size}`,
        type && `prt-list__item--${type}`,
      ]"
    >
      <slot name="prepend" :item="item" />
      <span class="prt-list__content">
        <slot name="content" :item="item">
          {{ item.content }}
        </slot>
      </span>
      <slot name="append" :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ListProps } from "./types";

const props = withDefaults(defineProps<ListProps>(), {
  type: "default",
  size: "base",
  hover: false,
  dense: false,
  class: "",
});

const listClasses = computed(() => [
  props.dense && "prt-list--dense",
  props.hover && "prt-list--hover",
  props.class,
]);
</script>

<style scoped>
.prt-list {
  @apply w-full space-y-3;
}

.prt-list--dense {
  @apply space-y-1;
}

.prt-list--dense .prt-list__item {
  @apply py-1;
}

.prt-list__item {
  @apply flex items-center gap-2 py-2 px-4 text-neutral-300 transition-colors duration-200 relative;
}

/* Sizes */
.prt-list__item--sm {
  @apply text-sm py-1 px-2;
}

.prt-list__item--base {
  @apply text-base py-1.5 px-3;
}

.prt-list__item--lg {
  @apply text-lg py-2 px-4;
}

/* States */
.prt-list__item--active {
  @apply text-el-7;
}

.prt-list__item--disabled {
  @apply opacity-50;
}

/* List Types */
.prt-list__item--decimal {
  counter-increment: item;
  @apply pl-8;
}

.prt-list__item--decimal::before {
  counter-reset: item;
  content: counter(item) ".";
  @apply absolute left-4 text-neutral-400;
}

.prt-list__item--disc {
  @apply pl-8;
}

.prt-list__item--disc::before {
  content: "•";
  @apply absolute left-4 text-neutral-400 flex items-center justify-center;
}

.prt-list__content {
  @apply flex-grow min-w-0;
}

/* Link styles */
.prt-list :deep(a) {
  @apply text-neutral-300 hover:text-white hover:underline transition-colors duration-200;
}
</style>