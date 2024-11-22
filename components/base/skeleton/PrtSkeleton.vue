<template>
  <div :class="['space-y-3', props.class]" v-if="loading">
    <!-- Card Container -->
    <div v-if="card" :class="skeletonVariants({ variant: 'card' })">
      <!-- Avatar -->
      <div v-if="avatar" class="flex items-center space-x-4 mb-4">
        <div
            :class="[
            skeletonVariants({ variant: 'avatar' }),
            avatarVariants({ size }),
          ]"
        />
      </div>
    </div>

    <!-- Title -->
    <div
        v-if="title"
        :class="skeletonVariants({ size, width: size })"
    />

    <!-- Content Rows -->
    <div v-if="rows" class="space-y-2">
      <div
          v-for="(_, index) in Array(rows)"
          :key="index"
          :class="skeletonVariants({
          size: 'sm',
          width: index === rows - 1 ? 'sm' : 'base',
        })"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { skeletonVariants, avatarVariants } from "./variants";
import type { SkeletonProps } from "./types";

const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: true,
  title: false,
  card: false,
  avatar: false,
  rows: 0,
  size: "base",
  class: "",
});
</script>