<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">

      <header class="space-y-4 mb-8">
        <h1 class="text-3xl font-bold text-white">Page Layout Demo</h1>
      </header>

      <!-- Layout Demo -->
      <div class="bg-neutral-800  overflow-hidden ">
        <PrtPageLayout :show-left-sidebar="true" :show-right-sidebar="false">
          <template #header>
            <div class="p-6 bg-neutral-800 text-white">
              Header Section
            </div>
          </template>

          <template #left-sidebar>
            <div class="p-6 bg-neutral-700/50 ">
              Sidebar Navigation
            </div>
          </template>

          <div class="p-6 bg-neutral-900/50 h-full">

            Main Content Area
          </div>

          <template #footer>
            <div class="p-6 bg-neutral-800 mt-auto">
              Footer Section
            </div>
          </template>
        </PrtPageLayout>
      </div>
    </div>

</template>

<script setup lang="ts">

</script>