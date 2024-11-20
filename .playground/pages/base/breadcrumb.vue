<template>
  <div class="page-breadcrumb min-h-screen bg-neutral-900 ">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Breadcrumb Component</h1>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <!-- Basic Usage -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Basic Usage</h2>
          <div class="space-y-4">
            <div class="bg-neutral-700/50 p-4 rounded-lg">
              <PrtBreadcrumb
                  :items="basicItems"
                  linkColor="text-el-7"
                  separatorColor="text-el-7"
              />
            </div>
          </div>
        </section>

        <!-- Sizes -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Sizes</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Small Size</h3>
              <div class="bg-neutral-700/50 p-4 rounded-lg">
                <PrtBreadcrumb
                    :items="basicItems"
                    size="sm"
                    linkColor="text-el-7"
                    separatorColor="text-el-7"
                />
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Base Size</h3>
              <div class="bg-neutral-700/50 p-4 rounded-lg">
                <PrtBreadcrumb
                    :items="basicItems"
                    size="base"
                    linkColor="text-el-7"
                    separatorColor="text-el-7"
                />
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Large Size</h3>
              <div class="bg-neutral-700/50 p-4 rounded-lg">
                <PrtBreadcrumb
                    :items="basicItems"
                    size="lg"
                    linkColor="text-el-7"
                    separatorColor="text-el-7"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Icon Colors -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Icon Colors</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Custom Color</h3>
              <div class="bg-neutral-700/50 p-4 rounded-lg">
                <PrtBreadcrumb
                    :items="interactiveItems"
                    linkColor="text-green-400"
                    separatorColor="text-green-400"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Custom Separator -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Custom Separator</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">With Custom Icon</h3>
              <div class="bg-neutral-700/50 p-4 rounded-lg">
                <PrtBreadcrumb
                    :items="currentPageItems"
                    linkColor="text-el-7"
                    separatorColor="text-el-7"
                >
                  <template #separator>
                    <span>•</span>
                  </template>
                </PrtBreadcrumb>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BreadcrumbItem } from '../../../components/base/breadcrumb'

// items with #
const basicItems = ref<BreadcrumbItem[]>([
  { name: 'Home', url: '#' },
  { name: 'Products', url: '#' },
  { name: 'Current Page' },
]);

// items with slugs
const interactiveItems = ref<BreadcrumbItem[]>([
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Electronics', url: '/products/electronics' },
]);

// items
const currentPageItems = ref<BreadcrumbItem[]>([
  { name: 'Dashboard', url: '/' },
  { name: 'Settings', url: '/settings' },
  { name: 'Profile' },
]);
</script>