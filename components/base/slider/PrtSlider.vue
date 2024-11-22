<template>
  <div
      ref="sliderRef"
      :class="[sliderVariants({ orientation, disabled }), 'prt-slider']"
  >
    <!-- Track Background -->
    <div
        :class="[
        trackVariants({ orientation }),
        bgColor || 'bg-neutral-800',
      ]"
    />

    <!-- Track Fill -->
    <div
        :class="[trackVariants({ orientation }), rangeColor || 'bg-blue-600']"
        :style="fillStyle"
    />

    <!-- Range Slider Start Handle -->
    <div
        v-if="range"
        :class="[
        handleVariants({ orientation, edges: handleEdges }),
        handleColor || 'bg-blue-600',
      ]"
        :style="startHandleStyle"
        @mousedown="startDrag($event, 0)"
        @touchstart.prevent="startDrag($event, 0)"
    />

    <!-- End Handle -->
    <div
        :class="[
        handleVariants({ orientation, edges: handleEdges }),
        handleColor || 'bg-blue-600',
      ]"
        :style="endHandleStyle"
        @mousedown="startDrag($event, range ? 1 : 0)"
        @touchstart.prevent="startDrag($event, range ? 1 : 0)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, watch, type CSSProperties } from "vue";
import { sliderVariants, handleVariants, trackVariants } from "./variants";
import type { SliderProps } from "./types";

const props = withDefaults(defineProps<SliderProps>(), {
    orientation: "horizontal",
    range: false,
    max: 100,
    min: 0,
    bgColor: "",
    rangeColor: "",
    handleColor: "",
    handleEdges: "circle",
    disabled: false,
});

const emit = defineEmits<{
    "update:modelValue": [value: number | number[]];
    change: [value: number | number[]];
    start: [];
    end: [];
}>();

const sliderRef = ref<HTMLElement | null>(null);
const currentHandle = ref<number>(0);
const internalValue = ref<number | number[]>(
    props.range && Array.isArray(props.modelValue)
        ? [...props.modelValue]
        : props.modelValue,
);

// Helper Functions
const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

const roundToStep = (value: number): number => {
    return Math.round(value);
};

const getPositionFromEvent = (
    event: MouseEvent | TouchEvent,
): number | null => {
    const rect = sliderRef.value?.getBoundingClientRect();
    if (!rect) return null;

    const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY =
        "touches" in event ? event.touches[0].clientY : event.clientY;

    const position =
        props.orientation === "horizontal"
            ? (clientX - rect.left) / rect.width
            : 1 - (clientY - rect.top) / rect.height;

    return clamp(
        Math.round(position * (props.max - props.min) + props.min),
        props.min,
        props.max,
    );
};

// Event Handlers
const startDrag = (event: MouseEvent | TouchEvent, handleIndex: number) => {
    if (props.disabled) return;
    event.preventDefault();

    currentHandle.value = handleIndex;
    const initialValue = getPositionFromEvent(event);
    if (initialValue === null) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
        e.preventDefault();
        const newPosition = getPositionFromEvent(e);
        if (newPosition === null) return;

        let newValue: number | number[];
        if (props.range && Array.isArray(internalValue.value)) {
            const values = [...internalValue.value];
            values[handleIndex] = roundToStep(newPosition);
            // Ensure handles don't cross
            if (handleIndex === 0) {
                values[0] = Math.min(values[0], values[1]);
            } else {
                values[1] = Math.max(values[0], values[1]);
            }
            newValue = values;
        } else {
            newValue = roundToStep(newPosition);
        }

        internalValue.value = newValue;
        emit("update:modelValue", newValue);
        emit("change", newValue);
    };

    const handleEnd = () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleEnd);
        emit("end");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleEnd);
    emit("start");
};

// Style Computations
const getPositionStyle = (value: number): string => {
    return `${((value - props.min) / (props.max - props.min)) * 100}%`;
};

const startHandleStyle = computed<CSSProperties>(() => ({
    [props.orientation === "vertical" ? "bottom" : "left"]: getPositionStyle(
        Array.isArray(internalValue.value)
            ? internalValue.value[0]
            : internalValue.value,
    ),
}));

const endHandleStyle = computed<CSSProperties>(() => ({
    [props.orientation === "vertical" ? "bottom" : "left"]: getPositionStyle(
        Array.isArray(internalValue.value) && props.range
            ? internalValue.value[1]
            : internalValue.value,
    ),
}));

const fillStyle = computed<CSSProperties>(() => {
    if (props.range && Array.isArray(internalValue.value)) {
        const start = getPositionStyle(internalValue.value[0]);
        const end = getPositionStyle(internalValue.value[1]);
        return props.orientation === "vertical"
            ? { bottom: start, height: `calc(${end} - ${start})` }
            : { left: start, width: `calc(${end} - ${start})` };
    }

    const position = getPositionStyle(
        Array.isArray(internalValue.value)
            ? internalValue.value[0]
            : internalValue.value,
    );
    return props.orientation === "vertical"
        ? { height: position, bottom: "0" }
        : { width: position, left: "0" };
});

// Watch for external value changes
watch(
    () => props.modelValue,
    (newValue) => {
        if (props.range && Array.isArray(newValue)) {
            internalValue.value = [...newValue];
        } else if (!props.range && typeof newValue === "number") {
            internalValue.value = newValue;
        }
    },
    { immediate: true },
);
</script>
