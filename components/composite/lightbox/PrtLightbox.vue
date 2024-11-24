<template>
  <Teleport to="body">
    <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="modelValue"
          class="fixed inset-0 z-50"
          @click="close"
      >
        <div class="absolute inset-0 bg-black/75 backdrop-blur-sm" />

        <div class="relative w-full h-full flex items-center justify-center p-4">
          <Transition
              enter-active-class="transition-all duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-4"
          >
            <div
                v-if="modelValue"
                :class="[
                containerVariants({ size }),
                'relative'
              ]"
                @click.stop
            >
              <PrtBtn
                  variant="ghost"
                  size="sm"
                  class="absolute right-2 top-2 z-10 text-white hover:text-white/80"
                  @click="close"
              >
                <X class="w-4 h-4" />
              </PrtBtn>

              <div :class="contentVariants({ size })">
                <slot />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { X } from 'lucide-vue-next'
import { containerVariants, contentVariants } from './variants'
import type { LightboxProps } from './types'

const props = withDefaults(defineProps<LightboxProps>(), {
  modelValue: false,
  size: 'base',
  closeOnEsc: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

useEventListener(window, 'keyup', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnEsc) {
    close()
  }
})
</script>