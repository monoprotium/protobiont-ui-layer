<template>
  <Teleport to="body">
    <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="modelValue"
          :class="[
          'fixed inset-0 z-50 flex items-center justify-center',
          overlayColor || 'bg-neutral-900',
          'bg-opacity-75'
        ]"
      >
        <slot>
          <PrtLoader color="primary" size="lg" />
        </slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import type { SplashScreenProps, SplashScreenEmits } from './types'

const props = withDefaults(defineProps<SplashScreenProps>(), {
  timeout: 2000,
  overlayColor: '',
  overlayOpacity: 75
})

const emit = defineEmits<SplashScreenEmits>()

watch(() => props.modelValue, (newValue) => {
  if (newValue && props.timeout > 0) {
    setTimeout(() => {
      emit('update:modelValue', false)
      emit('closed')
    }, props.timeout)
  }
})
</script>