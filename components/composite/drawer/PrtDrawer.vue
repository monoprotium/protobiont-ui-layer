<template>
  <Teleport to="body">
    <Transition
        enter-active-class="transition-opacity ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-if="modelValue" :class="drawerClasses">
        <!-- Backdrop -->
        <div
            class="fixed inset-0 bg-black/50"
            @click="handleBackdropClick"
            aria-hidden="true"
        />

        <!-- Content -->
        <div
            :class="[contentClasses, customClass, 'focus:outline-none']"
            :style="contentStyle"
            :data-state="modelValue ? 'open' : 'closed'"
            role="dialog"
            aria-modal="true"
            tabindex="-1"
        >
          <!-- Close Button -->
          <button
              v-if="showCloseButton"
              @click="closeDrawer"
              class="absolute right-4 top-4 rounded-sm opacity-90 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-el-7 text-white p-1.5"
          >
            <X class="h-4 w-4" />
            <span class="sr-only">Close</span>
          </button>

          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useRoute } from '#app'
import { X } from 'lucide-vue-next'
import { drawerVariants, contentVariants } from './variants'
import type { DrawerProps } from './types'

const props = withDefaults(defineProps<DrawerProps>(), {
  placement: 'right',
  disableClickAway: false,
  disableEsc: false,
  width: undefined,
  height: undefined,
  closeOnNavigation: true,
  showCloseButton: true,
  customClass: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const route = useRoute()

const drawerClasses = computed(() =>
    drawerVariants({ placement: props.placement })
)

const contentClasses = computed(() =>
    contentVariants({ placement: props.placement })
)

const contentStyle = computed(() => {
  const styles: Record<string, string> = {}
  if (props.width && ['left', 'right'].includes(props.placement)) {
    styles.width = props.width
  }
  if (props.height && ['top', 'bottom'].includes(props.placement)) {
    styles.height = props.height
  }
  return styles
})

const closeDrawer = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = () => {
  if (!props.disableClickAway) {
    closeDrawer()
  }
}

const handleEsc = (event: KeyboardEvent) => {
  if (!props.disableEsc && event.key === 'Escape' && props.modelValue) {
    closeDrawer()
  }
}

watch(() => route.path, () => {
  if (props.closeOnNavigation && props.modelValue) {
    closeDrawer()
  }
})

useEventListener(document, 'keydown', handleEsc)
</script>