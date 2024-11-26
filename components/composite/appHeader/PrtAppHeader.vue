<template>
  <header
      :class="[
      'relative w-full px-6 py-4',
      'flex items-center justify-between',
      'shadow-lg bg-neutral-800',
      variant === 'minimal' ? 'py-3' : ''
    ]"
  >
    <!-- Logo Section -->
    <div class="flex-shrink-0">
      <slot name="logo">
        <div class="flex items-center gap-2 hover:opacity-90">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700">
            <PrtIcon size="base" iconComponent="home" />
          </div>
        </div>
      </slot>
    </div>

    <!-- Navigation -->
    <nav class="hidden md:flex items-center gap-6">
      <template v-for="(label, idx) in pages" :key="idx">
        <PrtBtn
            color="bg-neutral-700"
            class="!hover:bg-neutral-600"
            :class="navItemVariants({ active: false })"
            @click="handleNavigation(label)"
        >
          {{ label }}
        </PrtBtn>
      </template>
    </nav>

    <!-- Actions -->
    <div class="flex items-center gap-4">
      <!-- Search -->
      <PrtBtn
          color="bg-neutral-700"
          class="!hover:bg-neutral-600 !p-3 flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          @click="$emit('iconClick', 'search')"
      >
        <PrtIcon size="base" iconComponent="search" />
      </PrtBtn>

      <!-- Settings -->
      <PrtBtn
          color="bg-neutral-700"
          class="!hover:bg-neutral-600 !p-3 flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          @click="$emit('iconClick', 'settings')"
      >
        <PrtIcon size="base" iconComponent="settings" />
      </PrtBtn>

      <!-- Mobile Menu -->
      <PrtBtn
          class="!hover:bg-neutral-600 !p-3 md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          :class="{ 'bg-neutral-800': isMenuOpen }"
          @click="toggleMenu"
      >
        <PrtIcon
            size="base"
            :iconComponent="isMenuOpen ? 'x' : 'menu'"
        />
      </PrtBtn>
    </div>

    <!-- Mobile Menu Panel -->
    <div
        v-show="isMenuOpen"
        :class="[
        'absolute top-full left-0 right-0',
        'bg-neutral-900 border-t border-neutral-800',
        'md:hidden'
      ]"
    >
      <div class="space-y-1 px-4 py-3">
        <PrtBtn
            v-for="(label, idx) in pages"
            :key="idx"
            :class="[
            'block w-full text-left',
            navItemVariants({ active: false })
          ]"
            @click="handleNavigation(label)"
        >
          {{ label }}
        </PrtBtn>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navItemVariants } from './variants'
import type { HeaderVariant } from './types'

interface Props {
  pages: string[]
  variant?: HeaderVariant
}

const props = withDefaults(defineProps<Props>(), {
  pages: () => [],
  variant: 'default',
})

const emit = defineEmits<{
  (e: 'navigate', page: string): void
  (e: 'iconClick', icon: string): void
}>()

const isMenuOpen = ref(false)

const handleNavigation = (page: string) => {
  emit('navigate', page)
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>