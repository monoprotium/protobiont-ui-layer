<template>
  <div :class="[stepsContainerVariants({ size }), props.class]">
    <!-- Steps Indicator -->
    <div class="flex items-center justify-between relative">
      <div
          class="absolute h-0.5 bg-neutral-700 left-0 right-0 top-1/2 -translate-y-1/2"
      />

      <div
          v-for="index in steps"
          :key="index"
          :class="[
          stepIndicatorVariants({
            size,
            state: getStepState(index - 1),
            disabled: !allowSkip && index - 1 > currentStep + 1
          }),
          'z-10'
        ]"
          @click="handleStepClick(index - 1)"
      >
        {{ index }}
      </div>
    </div>

    <!-- Step Content -->
    <div class="min-h-[200px]">
      <slot :currentStep="currentStep" />
    </div>

    <!-- Navigation -->
    <div class="flex justify-between gap-4">
      <PrtBtn
          variant="outline"
          :disabled="currentStep === 0"
          @click="prevStep"
      >
        Previous
      </PrtBtn>

      <PrtBtn
          :color="isLastStep ? 'bg-el-6' : 'bg-el-7'"
          @click="isLastStep ? submitStep() : nextStep()"
      >
        {{ isLastStep ? 'Submit' : 'Next' }}
      </PrtBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PrtBtn } from '../../base/btn'
import { stepsContainerVariants, stepIndicatorVariants } from './variants'
import type { StepsProps, StepState } from './types'

const props = withDefaults(defineProps<StepsProps>(), {
  size: 'base',
  allowSkip: false,
  class: ''
})

const emit = defineEmits<{
  'update:step': [step: number]
  'submit': []
}>()

const currentStep = ref(0)

const isLastStep = computed(() => currentStep.value === props.steps - 1)

const getStepState = (index: number): StepState => {
  if (index < currentStep.value) return 'complete'
  if (index === currentStep.value) return 'current'
  return 'upcoming'
}

const handleStepClick = (index: number) => {
  if (props.allowSkip || index <= currentStep.value + 1) {
    currentStep.value = index
    emit('update:step', index)
  }
}

const nextStep = () => {
  if (!isLastStep.value) {
    currentStep.value++
    emit('update:step', currentStep.value)
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
    emit('update:step', currentStep.value)
  }
}

const submitStep = () => {
  emit('submit')
}
</script>