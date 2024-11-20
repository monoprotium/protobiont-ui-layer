<template>
    <div class="prt-icon" :class="rootClass">
        <Suspense>
            <!-- Main content -->
            <component
                :is="iconComponent"
                v-if="iconComponent"
                :style="iconStyle"
            />
            <!-- Loading state -->
            <template #fallback>
                <span v-if="!error" class="w-full h-full" />
            </template>
        </Suspense>
        <!-- Error state -->
        <span
            v-if="error"
            class="flex items-center justify-center w-full h-full text-red-500"
            >!</span
        >
    </div>
</template>

<script setup lang="ts">
import { computed, shallowRef } from "vue";
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


// Global icon cache using Nuxt runtime config
const error = shallowRef(false);
const iconComponent = shallowRef<any>(null);
const nuxtApp = useNuxtApp()


// Initialize cache
if (!('iconCache' in nuxtApp)) {
  nuxtApp.iconCache = new Map<string, Component>()
}


if (props.iconComponent) {
  try {
    if (nuxtApp.iconCache.has(props.iconComponent)) {
      iconComponent.value = nuxtApp.iconCache.get(props.iconComponent);
    } else {
      const module = await import(
          `./_internal/${props.iconComponent}.vue`
          );
      nuxtApp.iconCache.set(props.iconComponent, module.default);
      iconComponent.value = module.default;
    }
  } catch (e) {
    console.error(`Failed to load icon: ${props.iconComponent}`, e);
    error.value = true;
  }
}
</script>
