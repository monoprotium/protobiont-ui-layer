<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">
    <header>
      <h1 class="text-3xl font-bold mb-2">Notice Component</h1>

    </header>

    <!-- Default Variants -->
    <section class="space-y-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">Default Variants</h2>

      <PrtNotice
          variant="solid"
          intent="default"
          title="Default Notice"
          description="A simple neutral notice for general information."
      />

      <PrtNotice
          variant="solid"
          intent="default"
          :closable="true"
          title="Dismissible Notice"
          description="A neutral notice with close button."
          @close="onClose"
      />
    </section>

    <!-- State Variants -->
    <section class="space-y-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">State Variants</h2>

      <PrtNotice
          v-for="intent in intents.slice(1)"
          :key="intent"
          variant="solid"
          :intent="intent"
          :closable="true"
          :title="`${capitalize(intent)} Notice`"
          :description="getDescription(intent)"
          @close="onClose"
      />
    </section>

    <!-- Outline Variants -->
    <section class="space-y-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">Outline Variants</h2>

      <PrtNotice
          v-for="intent in intents.slice(1)"
          :key="intent"
          variant="outline"
          :intent="intent"
          :closable="true"
          :title="`${capitalize(intent)} Outline`"
          :description="`Outlined variant for ${intent} messages.`"
          @close="onClose"
      />
    </section>

    <!-- Interactive Demo -->
    <section class="space-y-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">Interactive Demo</h2>

      <div class="flex flex-wrap gap-2 mb-4">
        <PrtBtn
            v-for="variant in variants"
            :key="variant"
            :color="selectedVariant === variant ? 'bg-el-7' : 'bg-el-1'"
            @click="selectedVariant = variant"
            class="capitalize"
        >
          {{ variant }}
        </PrtBtn>
      </div>

      <div class="flex flex-wrap gap-2 mb-4 ">
        <PrtBtn
            v-for="intent in intents"
            :key="intent"
            :color="selectedIntent === intent ? 'bg-el-7' : 'bg-el-1'"
            @click="selectedIntent = intent"
            class="capitalize"
        >
          {{ intent }}
        </PrtBtn>
      </div>

      <PrtNotice
          :variant="selectedVariant"
          :intent="selectedIntent"
          :closable="true"
          title="Interactive Notice"
          description="Try different combinations of variants and intents."
          @close="onClose"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NoticeVariant, NoticeIntent } from '../../../components/base/notice/types'

const variants: NoticeVariant[] = ['solid', 'outline']
const intents: NoticeIntent[] = ['default', 'info', 'success', 'warning', 'error']

const selectedVariant = ref<NoticeVariant>('solid')
const selectedIntent = ref<NoticeIntent>('default')

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const getDescription = (intent: NoticeIntent): string => {
  const descriptions = {
    info: 'Important information that needs attention.',
    success: 'The operation was completed successfully.',
    warning: 'Please review this warning message.',
    error: 'An error occurred during the operation.',
    default: 'A simple neutral notice for general information.'
  }

  return descriptions[intent]
}

const onClose = () => {
  console.log('Notice closed')
}
</script>