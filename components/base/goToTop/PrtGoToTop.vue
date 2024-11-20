<template>
  <Transition
      enter-from-class="opacity-0 translate-y-6"
      enter-to-class="opacity-100 translate-y-0"
      enter-active-class="transition duration-300 ease-out"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-6"
      leave-active-class="transition duration-200 ease-in"
  >
    <button
        v-show="show"
        :class="buttonClasses"
        @click="scrollToTop"
    >
      <span class="text-lg">↑</span>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { variants, getColorClasses } from './variants'
import type { GoToTopProps } from './types'

const props = withDefaults(defineProps<GoToTopProps>(), {
  size: 'base',
  variant: 'solid',
  color: 'bg-el-7',
  threshold: 200
})

const show = ref(false)
const { y } = useWindowScroll()

const buttonClasses = computed(() => [
  variants({ size: props.size, variant: props.variant }),
  ...getColorClasses(props.variant, props.color)
])

watchEffect(() => {
  show.value = y.value > props.threshold
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  show.value = window.scrollY > props.threshold
})
</script>