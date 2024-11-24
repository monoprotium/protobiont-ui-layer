<template>
  <div :class="containerVariants({ variant })">
    <!-- Inline Buttons Mode -->
    <template v-if="variant === 'inline'">
      <div class="flex flex-wrap gap-2">
        <PrtBtn
            v-for="lang in languages"
            :key="lang.code"
            :variant="modelValue === lang.code ? 'solid' : 'ghost'"
            :size="size"
            :color="modelValue === lang.code ? 'bg-el-7' : undefined"
            class="min-w-0"
            @click="selectLanguage(lang.code)"
        >
          <div class="flex items-center gap-1.5">
            <PrtFlag
                :country="lang.flag"
                :size="getFlagSize"
            />
            <span
                v-if="showText"
                :class="[
                'uppercase font-medium',
                size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
              ]"
            >
              {{ lang.code }}
            </span>
          </div>
        </PrtBtn>
      </div>
    </template>

    <!-- Dropdown Mode -->
    <template v-else>
      <PrtSelect
          :model-value="modelValue"
          :options="languageOptions"
          :size="size"
          @update:model-value="(value) => emit('update:modelValue', String(value))"
      >
        <template #option="{ option }">
          <div class="flex items-center gap-2">
            <PrtFlag
                :country="getFlagCode(option.value)"
                :size="getFlagSize"
            />
            <span v-if="showText" class="uppercase font-medium">
              {{ option.value }}
            </span>
          </div>
        </template>
      </PrtSelect>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { containerVariants } from './variants'
import type { Language, LangSelectSize, LangSelectVariant } from './types'

const props = withDefaults(defineProps<{
  modelValue: string
  languages?: Language[]
  variant?: LangSelectVariant
  size?: LangSelectSize
  showText?: boolean
}>(), {
  languages: () => [
    { name: 'English', code: 'en', flag: 'gb' },
    { name: 'Deutsch', code: 'de', flag: 'de' },
    { name: 'Polski', code: 'pl', flag: 'pl' },
    { name: 'Español', code: 'es', flag: 'es' },
    { name: 'Français', code: 'fr', flag: 'fr' }
  ],
  variant: 'inline',
  size: 'base',
  showText: true
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const getFlagSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'sm'
    case 'lg': return 'base'
    default: return 'sm'
  }
})

const languageOptions = computed(() =>
    props.languages.map(lang => ({
      label: lang.name,
      value: lang.code
    }))
)

const selectLanguage = (value: string | number) => {
  emit('update:modelValue', String(value))
}

const getFlagCode = (code: string): string => {
  const lang = props.languages.find(l => l.code === code)
  return lang?.flag || code
}
</script>