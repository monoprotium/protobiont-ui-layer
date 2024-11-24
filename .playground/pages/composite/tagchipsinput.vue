<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="mx-auto max-w-4xl">
      <!-- Header -->
      <div class="mb-8">

        <h1 class="text-3xl font-bold text-white mb-2">Tag Chips Input</h1>
     
      </div>

      <!-- Examples -->
      <div class="grid grid-cols-1 gap-8">
        <!-- Basic Usage -->
        <section class=" bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold text-white mb-4">Basic Usage</h2>
          <div class="bg-neutral-700/50  p-4 space-y-4">
            <PrtTagChipsInput
                v-model:tags="basicTags"
                placeholder="Type and press enter..."
                @tag:add="(tag) => handleTagAdd(tag, 'basic')"
                @error="handleError"
            />

          </div>
        </section>

        <!-- Different Sizes -->
        <section class=" bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold text-white mb-4">Sizes</h2>
          <div class="bg-neutral-700/50  p-4 space-y-4">
            <div class="space-y-4">
              <div>
                <label class="text-sm font-medium text-gray-400 mb-2 block">Small</label>
                <PrtTagChipsInput
                    v-model:tags="sizeTags.sm"
                    size="sm"
                    placeholder="Small tags..."
                />
              </div>
              <div>
                <label class="text-sm font-medium text-gray-400 mb-2 block">Base</label>
                <PrtTagChipsInput
                    v-model:tags="sizeTags.base"
                    size="base"
                    placeholder="Base size tags..."
                />
              </div>
              <div>
                <label class="text-sm font-medium text-gray-400 mb-2 block">Large</label>
                <PrtTagChipsInput
                    v-model:tags="sizeTags.lg"
                    size="lg"
                    placeholder="Large tags..."
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Different Colors -->
        <section class=" bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold text-white mb-4">Colors</h2>
          <div class="bg-neutral-700/50  p-4 space-y-4">
            <div class="space-y-4">
              <PrtTagChipsInput
                  v-model:tags="colorTags.blue"
                  color="bg-el-7"
                  placeholder="Blue tags..."
              />
              <PrtTagChipsInput
                  v-model:tags="colorTags.green"
                  color="bg-el-1"
                  close-bg="bg-el-7"
                  placeholder="Green tags..."
              />
              <PrtTagChipsInput
                  v-model:tags="colorTags.purple"
                  color="bg-el-4"
                  placeholder="Purple tags..."
              />
            </div>
          </div>
        </section>

        <!-- With Validation -->
        <section class=" bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold text-white mb-4">Validation</h2>
          <div class="bg-neutral-700/50  p-4">
            <PrtTagChipsInput
                v-model:tags="validationTags"
                :allow-duplicates="false"
                placeholder="Add unique tags (no duplicates)..."
                @error="handleError"
            />

          </div>
        </section>

        <!-- Disabled State -->
        <section class=" bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold text-white mb-4">Disabled State</h2>
          <div class="bg-neutral-700/50  p-4">
            <PrtTagChipsInput
                v-model:tags="disabledTags"
                disabled
                placeholder="This input is disabled..."
            />
          </div>
        </section>
      </div>
    </div>

    <PrtToast
        v-model="showToast"
        :type="toastType"
        :duration="3000"
        position="bottom-right"
    >
      {{ toastMessage }}
    </PrtToast>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TagChipsSize } from './types'

interface TagState {
  sm: string[]
  base: string[]
  lg: string[]
}

interface ColorTagState {
  blue: string[]
  green: string[]
  purple: string[]
}

const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref<'error' | 'success'>('success')

const basicTags = ref<string[]>(['Vue', 'TypeScript'])

const sizeTags = reactive<TagState>({
  sm: ['Small', 'Tags'],
  base: ['Base', 'Size', 'Tags'],
  lg: ['Large', 'Tags']
})

const colorTags = reactive<ColorTagState>({
  blue: ['Blue', 'Tags'],
  green: ['Green', 'Tags'],
  purple: ['Purple', 'Tags']
})

const validationTags = ref<string[]>(['Unique', 'Tags'])
const disabledTags = ref<string[]>(['Disabled', 'State'])

const handleTagAdd = (tag: string, context: string = '') => {
  showToast.value = true
  toastType.value = 'success'
  toastMessage.value = `Added tag: "${tag}"${context ? ` to ${context}` : ''}`
}

const handleError = (message: string) => {
  showToast.value = true
  toastType.value = 'error'
  toastMessage.value = message
}
</script>