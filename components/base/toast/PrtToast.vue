<template>
  <Teleport to="body">
    <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <div
          v-if="modelValue"
          :class="[
          toastVariants({ position, variant: type, edges }),
          bounce && 'animate-bounce',
          'fixed z-50 pointer-events-none',
        ]"
          role="alert"
          aria-live="polite"
      >
        <div
            :class="[
            contentVariants({ variant: type, edges }),
            'flex items-center gap-2',
          ]"
        >
          <!-- Icon based on type -->
          <component
              v-if="icon"
              :is="getIcon"
              class="w-4 h-4 flex-shrink-0"
          />

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <slot />
          </div>

          <!-- Close button if dismissible -->
          <button
              v-if="dismissible"
              :class="[
              'flex-shrink-0 hover:opacity-80 pointer-events-auto p-0.5 rounded',
              buttonBgClass,
            ]"
              @click="dismiss"
          >
            <XIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from "vue";
import {
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon,
  X as XIcon,
} from "lucide-vue-next";
import { toastVariants, contentVariants } from "./variants";
import type { ToastProps } from "./types";

const props = withDefaults(defineProps<ToastProps>(), {
  position: "top-right",
  type: "default",
  edges: "rounded",
  duration: 5000,
  bounce: false,
  icon: true,
  dismissible: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  dismiss: [];
}>();

// Icon mapping
const getIcon = computed(() => {
  const iconMap = {
    info: InfoIcon,
    success: CheckCircleIcon,
    warning: AlertTriangleIcon,
    error: AlertCircleIcon,
    default: InfoIcon,
  };
  return iconMap[props.type];
});

// Button background color
const buttonBgClass = computed(() => {
  if (props.buttonColor) return props.buttonColor;
  return props.type === 'default'
      ? 'bg-neutral-700'
      : contentVariants({ variant: props.type }).split(' ')[0];
});

// timer handling
let timer: number | null = null;

const startTimer = () => {
  if (props.duration && props.duration > 0) {
    timer && clearTimeout(timer);
    timer = window.setTimeout(() => {
      emit("update:modelValue", false);
    }, props.duration);
  }
};

const dismiss = () => {
  emit("update:modelValue", false);
  emit("dismiss");
};

// Watch modelValue changes to handle timer
watch(
    () => props.modelValue,
    (newVal) => {
      if (newVal) {
        startTimer();
      } else if (timer) {
        clearTimeout(timer);
      }
    }
);


onMounted(() => {
  if (props.modelValue) {
    startTimer();
  }
});
</script>