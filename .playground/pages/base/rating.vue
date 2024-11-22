<template>
  <div class="min-h-screen bg-neutral-900">

      <header>
        <h1 class="text-3xl font-bold text-white mb-2 pb-8">
          Rating
        </h1>
      </header>

      <!-- Basic Example -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold text-white">Basic Rating</h2>
        <div class="space-y-4">
          <PrtRating v-model="rating" />
          <p class="text-sm text-gray-400">
            Selected:
            <span class="text-el-7">{{ rating }}</span> stars
          </p>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold text-white">Colors</h2>
        <div class="space-y-6">
          <div class="space-y-4">
            <PrtRating v-model="colorRating1" color="bg-el-7" />
            <p class="text-sm text-gray-400">
              Primary: {{ colorRating1 }}
            </p>
          </div>
          <div class="space-y-4">
            <PrtRating v-model="colorRating2" color="bg-el-3" />
            <p class="text-sm text-gray-400">
              Success: {{ colorRating2 }}
            </p>
          </div>
          <div class="space-y-4">
            <PrtRating v-model="colorRating3" color="bg-el-9" />
            <p class="text-sm text-gray-400">
              Warning: {{ colorRating3 }}
            </p>
          </div>
          <div class="space-y-4">
            <PrtRating v-model="colorRating4" color="bg-el-8" />
            <p class="text-sm text-gray-400">
              Error: {{ colorRating4 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold text-white">Sizes</h2>
        <div class="space-y-6">
          <div class="space-y-4">
            <PrtRating v-model="sizeRating1" size="sm" />
            <p class="text-sm text-gray-400">
              Small: {{ sizeRating1 }}
            </p>
          </div>
          <div class="space-y-4">
            <PrtRating v-model="sizeRating2" size="base" />
            <p class="text-sm text-gray-400">
              Base: {{ sizeRating2 }}
            </p>
          </div>
          <div class="space-y-4">
            <PrtRating v-model="sizeRating3" size="lg" />
            <p class="text-sm text-gray-400">
              Large: {{ sizeRating3 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Interactive Example -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold text-white">
          Interactive Example
        </h2>
        <div class=" rounded-lg space-y-4">
          <PrtRating
              v-model="interactiveRating"
              :color="ratingColor"
              size="lg"
          />
          <p class="text-lg text-gray-300">
            You rated:
            <span :class="textColor">{{ interactiveRating }}</span>
          </p>
        </div>
      </section>
    </div>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const rating = ref(0);
const colorRating1 = ref(4);
const colorRating2 = ref(3);
const colorRating3 = ref(2);
const colorRating4 = ref(5);
const sizeRating1 = ref(3);
const sizeRating2 = ref(4);
const sizeRating3 = ref(5);
const interactiveRating = ref(0);

const ratingColor = computed(() => {
  if (interactiveRating.value <= 2) return "bg-el-8";
  if (interactiveRating.value <= 3) return "bg-el-9";
  return "bg-el-3";
});

const textColor = computed(() => ratingColor.value.replace("bg-", "text-"));
</script>
