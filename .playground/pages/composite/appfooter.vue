<template>
  <div class="min-h-screen bg-neutral-900 text-white">
    <header class="bg-neutral-900">
      <div class="mx-auto flex items-center justify-between px-4 py-3">
        <h1 class="text-xl font-semibold">App Footer</h1>
        <div class="flex items-center gap-4">
          <select
              v-model="currentVariant"
              class="rounded-md border border-neutral-800 bg-neutral-800 px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option
                v-for="variant in variants"
                :key="variant.value"
                :value="variant.value"
            >
              {{ variant.label }}
            </option>
          </select>
          <select
              v-model="currentSize"
              class="rounded-md border border-neutral-800 bg-neutral-800 px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option
                v-for="size in sizes"
                :key="size.value"
                :value="size.value"
            >
              {{ size.label }}
            </option>
          </select>
        </div>
      </div>
    </header>

    <!-- Main content area -->
    <main class="pb-24 pt-16">
      <div class="mx-auto max-w-4xl p-4">
        <div class="space-y-6">
          <section
              v-for="i in 10"
              :key="i"
              class="rounded-lg bg-neutral-800 p-6"
          >
            <h2 class="mb-4 text-lg font-medium">Section {{ i }}</h2>
            <p class="text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer menu -->
    <PrtAppFooter
        :items="menuItems"
        :variant="currentVariant"
        :size="currentSize"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Home,
  Search,
  User,
  Heart,
  Settings
} from 'lucide-vue-next'
import type { FooterItem, FooterVariant, FooterSize } from '../../../components/composite/appFooter/types'

const variants: Array<{ value: FooterVariant; label: string }> = [
  { value: 'default', label: 'Default Footer' },
  { value: 'floating', label: 'Floating Footer' },
  { value: 'bordered', label: 'Bordered Footer' }
]

const sizes: Array<{ value: FooterSize; label: string }> = [
  { value: 'sm', label: 'Small' },
  { value: 'base', label: 'Base' },
  { value: 'lg', label: 'Large' }
]

const currentVariant = ref<FooterVariant>('default')
const currentSize = ref<FooterSize>('base')

const menuItems: FooterItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: Home
  },
  {
    id: 'search',
    label: 'Search',
    path: '#search',
    icon: Search
  },
  {
    id: 'favorites',
    label: 'Favorites',
    path: '#favorites',
    icon: Heart
  },
  {
    id: 'profile',
    label: 'Profile',
    path: '#profile',
    icon: User
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '#settings',
    icon: Settings
  }
]
</script>