<template>
  <div
      ref="tooltipRef"
      class="relative inline-flex"
      @mouseenter="trigger === 'hover' && show()"
      @mouseleave="trigger === 'hover' && hide()"
      @click="trigger === 'click' && toggle()"
  >
    <slot />

    <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <div
          v-if="isVisible && !disabled"
          v-bind="$attrs"
          :class="[
          tooltipVariants({ placement, variant }),
          customClass,
          bgColor,
          textColor,
          'absolute z-50 whitespace-nowrap',
        ]"
          role="tooltip"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div
            :class="[
            arrowVariants({ placement }),
            bgColor || variantColors[props.variant],
          ]"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { tooltipVariants, arrowVariants } from "./variants";
import type { TooltipProps, TooltipVariant, VariantColors } from "./types";

const props = withDefaults(defineProps<TooltipProps>(), {
  variant: "default" as TooltipVariant,
  placement: "top",
  disabled: false,
  trigger: "hover",
  content: "",
  customClass: "",
  bgColor: "",
  textColor: "",
});

const isVisible = ref(false);
const tooltipRef = ref<HTMLElement | null>(null);

const variantColors: VariantColors = {
  default: "bg-neutral-900",
  primary: "bg-blue-600",
  success: "bg-green-600",
  warning: "bg-amber-600",
  danger: "bg-red-600",
} as const;

const show = () => {
  if (!props.disabled) {
    isVisible.value = true;
  }
};

const hide = () => {
  isVisible.value = false;
};

const toggle = () => {
  if (!props.disabled) {
    isVisible.value = !isVisible.value;
  }
};

if (typeof window !== "undefined") {
  window.addEventListener("click", (e) => {
    if (
        props.trigger === "click" &&
        isVisible.value &&
        tooltipRef.value &&
        !tooltipRef.value.contains(e.target as Node)
    ) {
      hide();
    }
  });
}
</script>