<template>
  <teleport to="body">
    <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="visible"
          :class="containerClasses"
          @click="handleOverlayClick"
      >
        <div :class="contentClasses" @click.stop>
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { variants, contentVariants } from "./variants";
import type { OverlayProps } from "./types";

const props = withDefaults(defineProps<OverlayProps>(), {
  visible: false,
  color: "default",
  position: "center",
  size: "base",
  closeOnClick: true,
});

const emit = defineEmits<{
  (e: "close"): void;
}>();

const containerClasses = computed(() =>
    variants({
      color: props.color,
      position: props.position,
    })
);

const contentClasses = computed(() => contentVariants({ size: props.size }));

const handleOverlayClick = () => {
  if (props.closeOnClick) {
    emit("close");
  }
};
</script>