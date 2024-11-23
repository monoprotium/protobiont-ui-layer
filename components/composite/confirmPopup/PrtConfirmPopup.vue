<template>
  <PrtOverlay
      :visible="show"
      :color="overlayVariant"
      :position="position"
      :closeOnClick="closeOnOutsideClick"
      @close="handleClose"
  >
    <div :class="popupVariants({ size })">
      <!-- Header -->
      <div :class="headerVariants()">
        <div class="flex-1">
          <slot name="title">
            <h3 class="font-semibold text-neutral-100">
              {{ title }}
            </h3>
          </slot>
        </div>
        <PrtBtn
            v-if="showCloseButton"
            variant="ghost"
            size="sm"
            :square="true"
            class="text-neutral-400 hover:text-neutral-200"
            @click="handleCancel"
        >
          <X class="w-4 h-4" />
        </PrtBtn>
      </div>

      <!-- Content -->
      <div :class="contentVariants()">
        <slot>
          <p class="text-neutral-300">{{ message }}</p>
        </slot>
      </div>

      <!-- Actions -->
      <div :class="actionsVariants()">
        <slot name="actions">
          <PrtBtn
              v-if="showCancelButton"
              variant="ghost"
              size="sm"
              class="text-neutral-300 hover:text-neutral-200"
              @click="handleCancel"
          >
            {{ cancelText }}
          </PrtBtn>
          <PrtBtn
              v-if="showConfirmButton"
              :color="confirmColor || 'bg-neutral-700'"
              size="sm"
              @click="handleConfirm"
          >
            {{ confirmText }}
          </PrtBtn>
        </slot>
      </div>
    </div>
  </PrtOverlay>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import type { ConfirmPopupProps } from './types'
import { popupVariants, headerVariants, contentVariants, actionsVariants } from './variants'
import { PrtOverlay } from '../../base/overlay'
import { PrtBtn } from '../../base/btn'

const props = withDefaults(defineProps<ConfirmPopupProps>(), {
  title: 'Confirm',
  message: 'Are you sure you want to proceed?',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  size: 'base',
  position: 'center',
  overlayVariant: 'dark',
  showConfirmButton: true,
  showCancelButton: true,
  showCloseButton: true,
  closeOnOutsideClick: true
})

const emit = defineEmits<{
  'update:show': [value: boolean]
  'confirm': []
  'cancel': []
}>()

const handleConfirm = () => {
  emit('confirm')
  emit('update:show', false)
}

const handleCancel = () => {
  emit('cancel')
  emit('update:show', false)
}

const handleClose = () => {
  if (props.closeOnOutsideClick) {
    handleCancel()
  }
}
</script>