<template>
  <div
      :class="[
      containerVariants({
        variant,
        size,
        textAlign,
        layout
      })
    ]"
  >
    <!-- Newsletter Content -->
    <div class="flex-grow space-y-1">
      <slot name="message">
        <h3 class="text-lg font-medium text-white">
          Subscribe to our newsletter
        </h3>
        <p class="text-neutral-400 text-sm">
          Get the latest updates delivered to your inbox.
        </p>
      </slot>
    </div>

    <!-- Newsletter Form -->
    <form
        @submit.prevent="handleSubmit"
        :class="formVariants({ layout })"
    >
      <PrtInputText
          v-model="email"
          :id="id"
          type="email"
          :placeholder="placeholder"

          :size="size"
          required
          class="min-w-[260px] bg-neutral-900"
          :class="layout === 'stacked' ? 'w-full' : ''"
      />

      <PrtBtn
          type="submit"
          :size="size"
          :loading="isLoading"
          :color="buttonColor"
          :class="layout === 'stacked' ? 'w-full' : 'shrink-0'"
      >
        {{ buttonText }}
      </PrtBtn>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PrtBtn } from '../../base/btn'
import { PrtInputText } from '../../base/inputText'
import { containerVariants, formVariants } from './variants'
import type { NewsletterBarProps } from './types'

const props = withDefaults(defineProps<NewsletterBarProps>(), {
  size: 'base',
  variant: 'minimal',
  id: 'newsletter-email',
  buttonText: 'Subscribe',
  buttonColor: 'bg-el-7',
  placeholder: 'Enter your email',
  textAlign: 'left',
  layout: 'inline'
})

const emit = defineEmits<{
  'subscribe': [email: string]
}>()

const email = ref('')
const isLoading = ref(false)

async function handleSubmit() {
  if (!email.value) return

  try {
    isLoading.value = true
    emit('subscribe', email.value)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    email.value = ''
  } finally {
    isLoading.value = false
  }
}
</script>