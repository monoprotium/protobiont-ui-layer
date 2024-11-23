<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-6">

      <header class="mb-8">
        <h1 class="text-3xl font-bold mt-4 mb-2">Mega Menu Component Demo</h1>
      </header>

      <!-- Mega Menu Example -->
      <section>
        <PrtMegaMenu
            :categories="categories"
            variant="primary"
            size="base"
            align="left"
        >
          <template #cat1>
            <div class="space-y-6">
              <h3 class="text-md font-medium text-white">Featured Items</h3>
              <div class="space-y-2">
                <a href="#" class="block text-neutral-400 hover:text-white text-sm">Item 1 in Category 1</a>
                <a href="#" class="block text-neutral-400 hover:text-white text-sm">Item 2 in Category 1</a>
              </div>
            </div>
          </template>

          <template #cat2>
            <div class="space-y-6">
              <h3 class="text-md font-medium text-white">Popular Items</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-2">
                  <a href="#" class="block text-neutral-400 hover:text-white text-sm">Item 1 in Category 2</a>
                  <a href="#" class="block text-neutral-400 hover:text-white text-sm">Item 2 in Category 2</a>
                </div>
                <div class="space-y-2">
                  <a href="#" class="block text-neutral-400 hover:text-white text-sm">Item 3 in Category 2</a>
                  <a href="#" class="block text-neutral-400 hover:text-white text-sm">Item 4 in Category 2</a>
                </div>
              </div>
            </div>
          </template>
        </PrtMegaMenu>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  { id: 'cat1', name: 'Category 1', link: '/cat1' },
  { id: 'cat2', name: 'Category 2', link: '/cat2' }
];
</script>