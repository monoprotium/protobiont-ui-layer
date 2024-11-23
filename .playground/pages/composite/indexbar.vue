<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Page Header -->
      <header class="space-y-4">
        <h1 class="text-3xl font-bold">IndexBar Component</h1>
      </header>

      <!-- Basic Example with Strings -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Basic Usage (Strings)</h2>
        <PrtIndexBar
            :items="basicItems"
            size="base"
            color="bg-el-7"
        />
      </section>

      <!-- Example with Links -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">With Links</h2>
        <PrtIndexBar
            :items="linkItems"
            size="base"
            color="bg-el-7"
        />
      </section>

      <!-- Custom Objects Example -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Custom Objects</h2>
        <PrtIndexBar
            :items="customItems"
            size="base"
            color="bg-el-7"
            itemKey="title"
        >
          <template #item="{ item }">
            <span class="flex items-center gap-2">
              <IconFolder class="w-4 h-4" />
              {{ item.title }}
              <span class="text-xs text-neutral-400">({{ item.count }})</span>
            </span>
          </template>
        </PrtIndexBar>
      </section>

      <!-- Color Variants -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Color Variants</h2>
        <div class="space-y-4">
          <PrtIndexBar
              :items="linkItems.slice(0, 5)"
              size="base"
              color="bg-el-6"
          />
          <PrtIndexBar
              :items="linkItems.slice(5, 10)"
              size="base"
              color="bg-el-4"
          />
          <PrtIndexBar
              :items="linkItems.slice(10)"
              size="base"
              color="bg-el-8"
          />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Folder as IconFolder } from 'lucide-vue-next'

// Array of strings
const basicItems = [
  'Apple', 'Banana', 'Blueberry',
  'Cherry', 'Dragon Fruit',
  'Elderberry',
  'Kiwi', 'Lemon', 'Mango',
  'Orange', 'Papaya',
  'Raspberry', 'Strawberry'
]

// Array of objects
const linkItems = [
  { name: 'API Documentation', url: '#/docs/api' },
  { name: 'Best Practices', url: '#/docs/best-practices' },
  { name: 'Component Library', url: '#/components' },
  { name: 'Developer Guide', url: '#/guide' },
  { name: 'Examples', url: '#/examples' },
  { name: 'FAQ', url: '#/faq' },
  { name: 'Getting Started', url: '#/getting-started' },
  { name: 'Installation', url: '#/installation' },
  { name: 'Migration Guide', url: '#/migration' },
  { name: 'Plugin System', url: '#/plugins' },
  { name: 'Release Notes', url: '#/releases' },
  { name: 'Troubleshooting', url: '#/troubleshooting' },
]

// Custom objects
const customItems = [
  { title: 'Active Projects', count: 5 },
  { title: 'Backlog', count: 12 },
  { title: 'Completed Tasks', count: 25 },
  { title: 'Documents', count: 8 },
  { title: 'External Links', count: 15 },
  { title: 'Pending Reviews', count: 3 }
]
</script>