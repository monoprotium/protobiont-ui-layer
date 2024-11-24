<template>
  <div :class="containerVariants({ variant, status, size })">
    <!-- Icon -->
    <div class="flex-shrink-0">
      <component
          :is="statusIcon"
          class="w-5 h-5"
          :class="[variant !== 'filled' && `text-${status}`]"
      />
    </div>

    <!-- Message -->
    <div class="flex-grow min-w-0">
      <p class="text-sm">
        <slot>{{ message }}</slot>
      </p>
    </div>

    <!-- Dismiss Button -->
    <button
        v-if="dismissible"
        class="flex-shrink-0 p-1 rounded-sm bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
        @click="$emit('dismiss')"
    >
      <X class="w-4 h-4 opacity-60 hover:opacity-100" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  X
} from 'lucide-vue-next'
import { containerVariants } from './variants'
import type { ResultProps, ResultStatus, ResultEmits } from './types'

const props = withDefaults(defineProps<ResultProps>(), {
  size: 'base',
  variant: 'default',
  message: 'Status message',
  dismissible: false
})

const emit = defineEmits<{
  dismiss: []
}>()

const statusIcon = computed(() => {
  const icons: Record<ResultStatus, typeof AlertCircle> = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info
  }
  return icons[props.status]
})
</script>