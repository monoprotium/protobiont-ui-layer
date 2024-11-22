<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="mx-auto">
      <!-- Base Components -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">Base Components</h2>
        <div class="grid grid-flow-col grid-rows-8 gap-3 w-[1120px]">
          <template v-for="component in baseComponents" :key="component.name">
            <NuxtLink
                :to="`/base/${component.path}`"
                class="bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg px-4 py-3 flex items-center justify-between transition-colors min-w-[200px]"
            >
              <span class="text-white">{{ component.name }}</span>
              <span class="text-white/70">→</span>
            </NuxtLink>
          </template>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

const baseComponents = [
  'avatar',
  'badge',
  'breadcrumb',
  'btn',
  'chatbubble',
  'checkbox',
  'chip',
  "excerpt",
  "flag",
  "gototop",
  "icon",
  "inputnumber",
  "inputtext",
  "inputtextarea",
  "list",
  "loader",
  "loadingbar",
  "notice",
  "overlay",
  "progress",
  "radio",
  "rating",
  "select",
  "skeleton",
  "slider"
].map((name) => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  path: name.toLowerCase(),
}));

</script>
