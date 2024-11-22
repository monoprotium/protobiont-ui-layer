
<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">

      <!-- Header -->
      <header class="text-left">
        <h1 class="text-3xl font-bold mb-4">Skeleton Component Demo</h1>

      </header>

      <!-- Basic Examples -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Basic Examples</h2>
        <div class="grid grid-cols-2 gap-6">
          <!-- Simple Text Skeleton -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Simple Text Skeleton</label
            >
            <PrtSkeleton title size="base" />
          </div>

          <!-- Multiple Rows -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Multiple Rows</label
            >
            <PrtSkeleton :rows="3" size="sm" />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Sizes</h2>
        <div class="grid grid-cols-3 gap-6">
          <!-- Small -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Small</label>
            <PrtSkeleton title card avatar size="sm" :rows="2" />
          </div>

          <!-- Base -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Base</label>
            <PrtSkeleton title card avatar size="base" :rows="2" />
          </div>

          <!-- Large -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Large</label>
            <PrtSkeleton title card avatar size="lg" :rows="2" />
          </div>
        </div>
      </section>

      <!-- Complex Examples -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Complex Examples</h2>
        <div class="grid grid-cols-2 gap-6">
          <!-- Card with Avatar -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Card with Avatar</label
            >
            <PrtSkeleton title card avatar size="base" :rows="3" />
          </div>

          <!-- Content Only -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Content Only</label
            >
            <PrtSkeleton title :rows="4" size="sm" />
          </div>
        </div>
      </section>

      <!-- Interactive Example -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Interactive Example</h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <button
                class="px-4 py-2 bg-el-7 text-white rounded hover:bg-opacity-90"
                @click="toggleLoading"
            >
              Toggle Loading
            </button>
            <span class="text-sm text-gray-400">
                            Status: {{ isLoading ? "Loading..." : "Loaded" }}
                        </span>
          </div>

          <div class="border border-gray-700 rounded-lg p-4">
            <div v-if="isLoading">
              <PrtSkeleton
                  title
                  card
                  avatar
                  size="base"
                  :rows="3"
              />
            </div>
            <div v-else class="space-y-4">
              <div class="flex items-center space-x-4">
                <div
                    class="w-12 h-12 rounded-full bg-el-7"
                ></div>
                <div class="font-medium">Lorem Ipsum</div>
              </div>
              <p class="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus euismod viverra. Donec eleifend quis urna pellentesque pharetra. Ut lobortis ut lacus vitae laoreet. Vestibulum nec ligula odio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(true);

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
};
</script>
