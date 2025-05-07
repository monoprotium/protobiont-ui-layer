<template>
    <div class="prt-icon" :class="rootClass">
        <Suspense>
            <!-- Main content: Dynamically loaded icon component -->
            <component
                :is="iconComponent"
                v-if="iconComponent"
                :style="iconStyle"
            />
            <!-- Loading state (via Suspense) -->
            <template #fallback>
                <span v-if="!error" class="w-full h-full animate-pulse bg-neutral-700" />
            </template>
        </Suspense>
        <!-- Error state -->
        <span
            v-if="error"
            class="flex items-center justify-center w-full h-full text-red-500 font-bold"
            title="Icon load error"
        >!</span>
    </div>
</template>

<script setup lang="ts">
import { computed, shallowRef, watch, defineAsyncComponent, type Component } from "vue";
import { iconVariants } from "./variants";
import type { IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
    size: "base",
    color: "currentColor",
    iconComponent: "",
    class: "",
});

const rootClass = computed(() => [
    iconVariants({ size: props.size }),
    props.class,
]);

// CSS variables passed down to the loaded SVG component
const iconStyle = computed(() => ({
    "--icon-color": props.color,
    "--icon-width": "100%",
    "--icon-height": "100%",
}));

const error = shallowRef(false);
const iconComponent = shallowRef<Component | null>(null);
const nuxtApp = useNuxtApp()

// Initialize global cache on Nuxt app instance if needed
if (!nuxtApp.iconCache) {
  nuxtApp.iconCache = new Map<string, Component>()
}

// Use import.meta.glob for Vite-friendly dynamic imports from the _internal directory.
// `eager: false` ensures dynamic loading.
const internalIcons = import.meta.glob('./_internal/*.vue', { eager: false });

watch(() => props.iconComponent, async (newName) => {
  iconComponent.value = null; // Clear previous
  error.value = false;

  if (!newName) return;

  // Check cache first
  if (nuxtApp.iconCache.has(newName)) {
    iconComponent.value = nuxtApp.iconCache.get(newName)!;
    return;
  }

  const path = `./_internal/${newName}.vue`;

  // Check if the requested icon exists in our glob results
  if (internalIcons[path]) {
    try {
      const importer = internalIcons[path];
      // Wrap the importer with defineAsyncComponent for Suspense integration
      const asyncComponent = defineAsyncComponent(importer as () => Promise<Component>);
      iconComponent.value = asyncComponent;

      // Basic caching attempt after load (optional, relies on defineAsyncComponent resolution)
       watch(iconComponent, (comp) => {
          if (comp && !nuxtApp.iconCache.has(newName)) {
            // Note: Caching the async component wrapper might have nuances.
            nuxtApp.iconCache.set(newName, comp);
          }
       }, { once: true });

    } catch (e) {
      console.error(`Failed to load icon module: ${newName}`, e);
      error.value = true;
      iconComponent.value = null;
    }
  } else {
    console.error(`Icon '${newName}' not found in './_internal/'. Expected path: ${path}`);
    error.value = true;
    iconComponent.value = null;
  }
}, { immediate: true }); // Run watcher immediately on component mount/prop availability

</script>
