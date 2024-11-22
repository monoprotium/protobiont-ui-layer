<template>
  <button
      type="button"
      :class="[
      toggleVariants({ size, disabled }),
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50',
      modelValue ? bgColor : 'bg-neutral-800',
    ]"
      :disabled="disabled"
      role="switch"
      :aria-checked="modelValue"
      @click="toggle"
  >
    <span
        :class="[
        thumbVariants({ size }),
        translateClasses[modelValue ? 'checked' : 'unchecked'][props.size],
      ]"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { toggleVariants, thumbVariants } from "./variants";
import type { ToggleProps, ToggleSize, TranslateClasses } from "./types";

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  bgColor: "bg-blue-600",
  size: "base" as ToggleSize,
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const translateClasses: TranslateClasses = {
  checked: {
    sm: "translate-x-4",
    base: "translate-x-5",
    lg: "translate-x-6",
  },
  unchecked: {
    sm: "translate-x-0",
    base: "translate-x-0",
    lg: "translate-x-0",
  },
} as const;

const toggle = () => {
  if (!props.disabled) {
    emit("update:modelValue", !props.modelValue);
  }
};
</script>