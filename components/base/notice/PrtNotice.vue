<template>
  <div :class="noticeClasses">
    <div v-if="intent !== 'default'" class="flex-shrink-0">
      <component :is="getIcon" class="w-5 h-5" />
    </div>

    <div class="flex-1 min-w-0">
      <div v-if="$slots.title || title" class="font-medium leading-5">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="$slots.description || description" class="mt-1 text-sm opacity-90">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>

    <div v-if="closable" class="flex-shrink-0 ml-4">
      <slot name="close">
        <button
            type="button"
            class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="closeButtonClasses"
            @click="emit('close')"
        >
          <span class="sr-only">Dismiss</span>
          <XIcon class="h-5 w-5" />
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { variants } from './variants'
import type { NoticeProps, NoticeIntent } from './types'
import {
  X as XIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  AlertTriangle as ExclamationTriangleIcon,
  Info as InfoIcon
} from 'lucide-vue-next'

const emit = defineEmits<{
  close: []
}>()

const props = withDefaults(defineProps<NoticeProps>(), {
  variant: 'solid',
  intent: 'default',
  closable: false
})

const icons: Record<NoticeIntent, any | null> = {
  default: null,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon
}

const getIcon = computed(() => icons[props.intent])

const noticeClasses = computed(() =>
    variants({
      variant: props.variant,
      intent: props.intent
    })
)

const closeButtonClasses = computed(() => [
  props.variant === 'solid' ? 'bg-black/20 hover:bg-black/30' : 'bg-transparent',
  props.variant === 'solid' ? 'focus:ring-white' : 'focus:ring-current',
  props.variant === 'solid' ? 'text-white/90' : 'text-current opacity-90'
])
</script>