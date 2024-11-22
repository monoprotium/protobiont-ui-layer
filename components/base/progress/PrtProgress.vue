<template>
  <div :class="containerClasses">
    <!-- Circle Progress -->
    <div v-if="type === 'circle'" class="progress-circle-wrapper">
      <div class="progress-circle">
        <svg :viewBox="`0 0 ${size} ${size}`">
          <circle
              class="progress-circle__background"
              :cx="center"
              :cy="center"
              :r="radius"
          />
          <circle
              class="progress-circle__value"
              :cx="center"
              :cy="center"
              :r="radius"
              :class="colorClass"
              :style="circleProgressStyle"
          />
        </svg>
        <div v-if="showLabel" :class="labelClasses">{{ percent }}%</div>
      </div>
    </div>

    <!-- Line Progress -->
    <div v-else class="progress-line">
      <div class="progress-line__track">
        <div
            class="progress-line__value"
            :class="colorClass"
            :style="{ width: `${percent}%` }"
        />
      </div>
      <div v-if="showLabel" class="progress-line__label">
        {{ percent }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProgressProps } from "./types";

const props = withDefaults(defineProps<ProgressProps>(), {
  type: "line",
  size: "base",
  color: "bg-el-7",
  percent: 0,
  showLabel: false,
});

const SIZE_MAP = {
  sm: 50,
  base: 100,
  lg: 150,
} as const;

const containerClasses = computed(() => [
  "progress",
  `progress--${props.type}`,
  `progress--${props.size}`,
]);

const labelClasses = computed(() => [
  "progress-circle__label",
  `progress-circle__label--${props.size}`,
]);

const colorClass = computed(() => props.color.replace('bg-', 'text-'));

const size = computed(() => SIZE_MAP[props.size]);
const center = computed(() => size.value / 2);
const radius = computed(() => (size.value - 10) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);

const circleProgressStyle = computed(() => ({
  strokeDasharray: `${circumference.value} ${circumference.value}`,
  strokeDashoffset: `${circumference.value - (props.percent / 100) * circumference.value}px`,
}));
</script>

<style scoped>
.progress-circle-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-circle {
  position: relative;
  display: inline-flex;
}

.progress--sm .progress-circle {
  width: 50px;
  height: 50px;
}

.progress--base .progress-circle {
  width: 100px;
  height: 100px;
}

.progress--lg .progress-circle {
  width: 150px;
  height: 150px;
}

.progress-circle svg {
  transform: rotate(-90deg);
}

.progress-circle__background {
  fill: none;
  stroke: rgb(255 255 255 / 0.1);
  stroke-width: 8px;
}

.progress-circle__value {
  fill: none;
  stroke: currentColor;
  stroke-width: 8px;
  transition: stroke-dashoffset 0.35s;
  stroke-linecap: round;
}

.progress-circle__label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  color: white;
}

.progress-line {
  width: 100%;
}

.progress-line__track {
  width: 100%;
  height: 8px;
  background-color: rgb(255 255 255 / 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-line__value {
  height: 100%;
  background-color: currentColor;
  border-radius: 4px;
  transition: width 0.35s ease;
}

.progress-line__label {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  text-align: right;
}

/* Size-specific label styles */
.progress-circle__label--sm {
  font-size: 0.6rem;
}

.progress-circle__label--base {
  font-size: 1rem;
}

.progress-circle__label--lg {
  font-size: 1.25rem;
}
</style>