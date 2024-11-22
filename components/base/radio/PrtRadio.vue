<template>
  <label :class="wrapperClasses">
    <input
        type="radio"
        :name="name"
        :value="value"
        :checked="isChecked"
        :disabled="disabled"
        class="sr-only"
        @change="handleChange"
    />

    <div :class="[circleClasses, borderColorClass]">
      <div
          :class="[
          indicatorClasses,
          colorClass,
          'w-[calc(100%-6px)] h-[calc(100%-6px)]',
        ]"
      />
    </div>

    <span class="text-sm text-white leading-none">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  radioWrapperVariants,
  radioCircleVariants,
  radioIndicatorVariants,
} from "./variants";
import type { RadioProps } from "./types";

const props = withDefaults(defineProps<RadioProps>(), {
  size: "base",
  shape: "circle",
  color: "bg-el-7",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

const isChecked = computed(() => props.modelValue === props.value);
const colorClass = computed(() => props.color);
const borderColorClass = computed(() => props.color.replace('bg-', 'border-'));

const wrapperClasses = computed(() =>
    radioWrapperVariants({
      disabled: props.disabled,
    })
);

const circleClasses = computed(() =>
    radioCircleVariants({
      size: props.size,
      shape: props.shape,
    })
);

const indicatorClasses = computed(() =>
    radioIndicatorVariants({
      shape: props.shape,
      checked: isChecked.value,
    })
);

const handleChange = () => {
  if (!props.disabled) {
    emit("update:modelValue", props.value);
  }
};
</script>