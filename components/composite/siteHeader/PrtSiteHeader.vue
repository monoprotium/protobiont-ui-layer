<!-- PrtPageHeader.vue -->
<template>
  <header :class="headerVariants({ variant })">
    <nav class="mx-auto flex items-center justify-between p-4">
      <!-- Logo Section -->
      <div class="flex items-center">
        <slot name="logo">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/avatar.png" alt="Logo" class="h-8 w-8" />
          </NuxtLink>
        </slot>
      </div>

      <!-- Navigation -->
      <ul class="flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink
              :to="link.link"
              class="text-neutral-300 transition-colors hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </li>

        <!-- Actions Slot -->
        <slot name="actions" />
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { HeaderVariant, NavLink } from './types'
import { headerVariants } from './variants'

interface Props {
  navLinks: NavLink[]
  variant?: HeaderVariant
}

defineProps<Props>()
</script>