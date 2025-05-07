<template>
    <div class="prt-icon" :class="rootClass">
        <Suspense>
            <component
                :is="loadedComponent" 
                v-if="loadedComponent && !error"
                :style="iconStyle"
            />
            <template #fallback>
                <span v-if="!error" class="w-full h-full animate-pulse bg-neutral-700" />
            </template>
        </Suspense>
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

const iconStyle = computed(() => ({
    "--icon-color": props.color,
    "--icon-width": "100%",
    "--icon-height": "100%",
}));

const error = shallowRef(false);
// Use a separate ref for the component definition to avoid conflicts with the watcher
const loadedComponent = shallowRef<Component | null>(null);
const nuxtApp = useNuxtApp()

if (!nuxtApp.iconCache) {
  nuxtApp.iconCache = new Map<string, Component>()
}

const internalIcons = import.meta.glob('./_internal/*.vue', { eager: false });

watch(() => props.iconComponent, (newName) => {
  // Reset state only if the name actually changes *meaningfully*
  if (!newName) {
      loadedComponent.value = null;
      error.value = false;
      return;
  }

  error.value = false; // Reset error state on new attempt

  // Check cache first
  if (nuxtApp.iconCache.has(newName)) {
    loadedComponent.value = nuxtApp.iconCache.get(newName)!;
    return;
  }

  // --- Load new component ---
  const path = `./_internal/${newName}.vue`;
  const importer = internalIcons[path];

  if (importer) {
     // Use defineAsyncComponent to handle loading and errors gracefully with Suspense
     loadedComponent.value = defineAsyncComponent({
         loader: async () => {
            try {
                const mod = await importer() as { default: Component };
                // Cache the *actual* component after successful load
                if (mod.default && !nuxtApp.iconCache.has(newName)) {
                   nuxtApp.iconCache.set(newName, mod.default);
                }
                return mod.default;
            } catch (e) {
                console.error(`Failed to load icon module: ${newName}`, e);
                error.value = true; // Set error state
                return null; // Return null or an error component if defineAsyncComponent supports it
            }
         },
         // Optional: Add loading/error components for defineAsyncComponent itself
         loadingComponent: { template: '<span class="w-full h-full animate-pulse bg-neutral-700" />', setup: () => {} }, // Matches Suspense fallback
         errorComponent: { template: '<span class="flex items-center justify-center w-full h-full text-red-500 font-bold" title="Icon load error">!</span>', setup: () => { error.value = true; } }, // Matches error display
         delay: 50, // Optional: Show loading component after 50ms
         timeout: 5000 // Optional: Timeout for loading
     });

  } else {
    console.error(`Icon '${newName}' not found in './_internal/'. Expected path: ${path}`);
    error.value = true;
    loadedComponent.value = null;
  }
}, { immediate: true });

</script>
