<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Page Header -->
      <header class="space-y-2">
        <h1 class="text-3xl font-bold">Language Select Demo</h1>
      </header>

      <!-- Controls -->
      <div class="flex items-center gap-4 bg-neutral-800 p-4 ">
        <PrtSelect
            v-model="variant"
            :options="variantOptions"
            placeholder="Select Variant"
        />
        <PrtSelect
            v-model="size"
            :options="sizeOptions"
            placeholder="Select Size"
        />
        <PrtToggle
            v-model="showText"
            bg-color="bg-el-7"
        >
          Show Text
        </PrtToggle>
      </div>

      <!-- Display Options -->
      <div class="grid gap-6">
        <!-- Inline Variant -->
        <section class="bg-neutral-800  p-6">
          <h2 class="text-xl font-medium mb-4">Language Selector</h2>
          <PrtLangSelect
              v-model="currentLanguage"
              :languages="languages"
              :variant="variant"
              :size="size"
              :show-text="showText"
          />
          <p class="mt-4 text-neutral-400">
            Selected Language:
            <span class="text-el-7 font-medium">
              {{ getLanguageName(currentLanguage) }}
            </span>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import type { Language, LangSelectVariant, LangSelectSize } from '../../../components/composite/langSelect/types'

const currentLanguage = ref('en')
const variant = ref<LangSelectVariant>('inline')
const size = ref<LangSelectSize>('base')
const showText = ref(true)

const languages: Language[] = [
  { name: 'English', code: 'en', flag: 'gb' },
  { name: 'Deutsch', code: 'de', flag: 'de' },
  { name: 'Polski', code: 'pl', flag: 'pl' },
  { name: 'Español', code: 'es', flag: 'es' },
  { name: 'Français', code: 'fr', flag: 'fr' }
]

const variantOptions = [
  { label: 'Inline Buttons', value: 'inline' },
  { label: 'Dropdown Select', value: 'dropdown' }
]

const sizeOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Base', value: 'base' },
  { label: 'Large', value: 'lg' }
]

const getLanguageName = (code: string): string => {
  return languages.find(lang => lang.code === code)?.name || code
}
</script>