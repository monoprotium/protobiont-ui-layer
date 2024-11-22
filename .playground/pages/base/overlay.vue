<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">
    <!-- Header -->
    <header>
      <h1 class="text-3xl font-bold mb-2">Overlay Component</h1>
    </header>

    <!-- Controls -->
    <section class="space-y-6">
      <div class="flex gap-2">
        <PrtBtn
            v-for="color in colors"
            :key="color"
            :color="selectedColor === color ? 'bg-el-7' : 'bg-el-1'"
            @click="selectedColor = color"
            class="capitalize"
        >
          {{ color }}
        </PrtBtn>
      </div>

      <div>
        <PrtBtn color="bg-el-7" @click="showOverlay">
          Show Example
        </PrtBtn>
      </div>
    </section>

    <!-- Overlay with Modal -->
    <PrtOverlay
        :visible="isVisible"
        :color="selectedColor"
        @close="closeOverlay"
    >
      <div class="bg-neutral-800 rounded-lg shadow-lg overflow-hidden max-w-md w-full">
        <!-- Modal Header -->
        <div class="px-6 py-4 bg-neutral-700/50">
          <h2 class="text-xl font-semibold text-white">
            Example Modal
          </h2>
        </div>

        <!-- Modal Content -->
        <div class="px-6 py-4">
          <p class="text-gray-300">
            This is an example of how the overlay component can
            be used to create modal dialogs. Try different
            background styles using the buttons above.
          </p>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 py-4 bg-neutral-700/20 flex justify-end">
          <PrtBtn color="bg-el-7" @click="closeOverlay">
            Close
          </PrtBtn>
        </div>
      </div>
    </PrtOverlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { OverlayColor } from "../../../components/base/overlay/types";

const colors: OverlayColor[] = ["default", "dark", "light", "blur"];
const isVisible = ref(false);
const selectedColor = ref<OverlayColor>("default");

const showOverlay = () => {
  isVisible.value = true;
};

const closeOverlay = () => {
  isVisible.value = false;
};
</script>