<template>
    <div v-if="isLoading" :class="containerClasses">
        <!-- Spinner -->
        <div
            v-if="type === 'spinner'"
            :class="['spinner']"
            :style="[spinnerStyle, { width: '100%', height: '100%' }]"
        />

        <!-- Dots -->
        <div v-if="type === 'dots'" :class="['dots']">
            <span :style="itemStyle"></span>
            <span :style="itemStyle"></span>
            <span :style="itemStyle"></span>
        </div>

        <!-- Rectangles -->
        <div v-if="type === 'rectangles'" :class="['rectangles']">
            <div :style="itemStyle"></div>
            <div :style="itemStyle"></div>
            <div :style="itemStyle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { variants } from "./variants";
import type { LoaderProps } from "./types";

const props = withDefaults(defineProps<LoaderProps>(), {
    isLoading: true,
    type: "spinner",
    size: "base",
    color: "gray",
});

// Size map for dots and rectangles
const dotSizeMap = {
    sm: "4px",
    base: "6px",
    lg: "12px",
};

const itemStyle = computed(() => ({
    width: dotSizeMap[props.size],
    height: dotSizeMap[props.size],
}));

// Get opacity color based on main color
const opacityColor = computed(() => {
    const colorMap = {
        primary: "rgb(2, 132, 199, 0.1)", // el-7
        success: "rgb(6, 78, 59, 0.1)", // el-3
        warning: "rgb(220, 38, 38, 0.1)", // el-8
        gray: "rgb(209, 213, 219, 0.1)",
    };
    return colorMap[props.color];
});

const containerClasses = computed(() =>
    variants({
        variant: props.type,
        size: props.size,
        color: props.color,
    }),
);

const spinnerStyle = computed(() => ({
    "--border-color": opacityColor.value,
}));
</script>

<style scoped>
.spinner {
    @apply border-4 border-solid rounded-full;
    border-color: var(--border-color);
    border-top-color: currentColor;
    animation: spin 1s linear infinite;
    aspect-ratio: 1;
}

.dots,
.rectangles {
    @apply flex items-center;
    gap: 2px;
}

.dots span,
.rectangles div {
    @apply bg-current;
    animation: pulse 1.5s infinite ease-in-out;
}

.dots span {
    @apply rounded-full;
}

/* Animation delays */
.dots span:nth-child(2),
.rectangles div:nth-child(2) {
    animation-delay: 0.5s;
}

.dots span:nth-child(3),
.rectangles div:nth-child(3) {
    animation-delay: 1s;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes pulse {
    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(0.75);
        opacity: 0.5;
    }
}
</style>
