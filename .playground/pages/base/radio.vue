<template>
  <div class="min-h-screen bg-neutral-900" >

      <header>
        <h1 class="text-3xl font-bold text-white mb-2">
          Radio Component
        </h1>
      </header>

      <!-- Basic Example -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Basic Example</h2>
        <div class="space-y-4">
          <div class="space-y-2">
            <PrtRadio
                v-model="selected"
                name="options"
                value="Option One"
            >
              Option One
            </PrtRadio>
            <PrtRadio
                v-model="selected"
                name="options"
                value="Option Two"
            >
              Option Two
            </PrtRadio>
            <PrtRadio
                v-model="selected"
                name="options"
                value="Option Three"
            >
              Option Three
            </PrtRadio>
          </div>
          <p class="text-sm text-gray-400">
            Selected: <span class="text-el-7">{{ selected }}</span>
          </p>
        </div>
      </section>

      <!-- Colors -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Colors</h2>
        <div class="space-y-4">
          <div class="space-y-2">
            <PrtRadio
                v-model="color"
                name="colors"
                value="primary"
                color="bg-el-7"
            >
              Primary
            </PrtRadio>
            <PrtRadio
                v-model="color"
                name="colors"
                value="success"
                color="bg-el-3"
            >
              Success
            </PrtRadio>
            <PrtRadio
                v-model="color"
                name="colors"
                value="warning"
                color="bg-el-9"
            >
              Warning
            </PrtRadio>
            <PrtRadio
                v-model="color"
                name="colors"
                value="error"
                color="bg-el-8"
            >
              Error
            </PrtRadio>
          </div>
          <p class="text-sm text-gray-400">
            Selected:
            <span :class="colorTextClass">{{ color }}</span>
          </p>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Sizes</h2>
        <div class="space-y-4">
          <div class="space-y-2">
            <PrtRadio
                v-model="size"
                name="sizes"
                value="sm"
                size="sm"
            >
              Small
            </PrtRadio>
            <PrtRadio
                v-model="size"
                name="sizes"
                value="base"
                size="base"
            >
              Base
            </PrtRadio>
            <PrtRadio
                v-model="size"
                name="sizes"
                value="lg"
                size="lg"
            >
              Large
            </PrtRadio>
          </div>
          <p class="text-sm text-gray-400">
            Selected: <span class="text-el-7">{{ size }}</span>
          </p>
        </div>
      </section>

      <!-- Shapes -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Shapes</h2>
        <div class="space-y-4">
          <div class="space-y-2">
            <PrtRadio
                v-model="shape"
                name="shapes"
                value="circle"
                shape="circle"
            >
              Circle
            </PrtRadio>
            <PrtRadio
                v-model="shape"
                name="shapes"
                value="rounded"
                shape="rounded"
            >
              Rounded
            </PrtRadio>
            <PrtRadio
                v-model="shape"
                name="shapes"
                value="square"
                shape="square"
            >
              Square
            </PrtRadio>
          </div>
          <p class="text-sm text-gray-400">
            Selected: <span class="text-el-7">{{ shape }}</span>
          </p>
        </div>
      </section>
    </div>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const selected = ref("Option One");
const color = ref("primary");
const size = ref("base");
const shape = ref("circle");

const colorTextClass = computed(() => {
  const colorMap = {
    primary: "text-el-7",
    success: "text-el-3",
    warning: "text-el-9",
    error: "text-el-8",
  };
  return colorMap[color.value] || "text-el-7";
});
</script>
