<template>
  <div :class="containerClasses">
    <button
        v-for="index in max"
        :key="index"
        type="button"
        :class="[
        itemClasses,
        colorClass(index),
        'hover:opacity-80',
      ]"
        @click="!disabled && updateValue(index)"
    >
      <div
          :class="[
          'w-full h-full rounded-full',
          index <= modelValue ? color : 'bg-white/10',
        ]"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ratingVariants, ratingItemVariants } from "./variants";
import type { RatingProps } from "./types";

const props = withDefaults(defineProps<RatingProps>(), {
  max: 5,
  size: "base",
  color: "bg-el-7",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const containerClasses = computed(() =>
    ratingVariants({
      size: props.size,
      disabled: props.disabled,
    })
);

const itemClasses = computed(() =>
    ratingItemVariants({
      size: props.size,
    })
);

const colorClass = computed(() => (index: number) =>
    index <= props.modelValue ? props.color.replace('bg-', 'text-') : 'text-white/10'
);

const updateValue = (value: number) => {
  const newValue = value === props.modelValue ? 0 : value;
  emit("update:modelValue", newValue);
};
</script>


<style scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    transition: all 0.2s ease;
}
</style>
