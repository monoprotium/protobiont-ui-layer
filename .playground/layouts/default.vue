<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="mx-auto">
      <NuxtLink
          v-if="route.path !== '/'"
          to="/"
          class="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 mb-4">
        ← Back to Components
      </NuxtLink>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

</script>