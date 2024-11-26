<template>
  <div class="min-h-screen bg-neutral-900  text-neutral-100">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl font-bold">Page Header</h1>
    </header>

    <!-- Examples -->
    <div class="space-y-8">
      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium">Default Header</h2>
        <div class="overflow-hidden  bg-neutral-800">
          <PrtSiteHeader :nav-links="navLinks">
            <template #actions>
              <PrtBtn size="sm">Sign In</PrtBtn>
            </template>
          </PrtSiteHeader>
        </div>
      </section>

      <!-- Transparent -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium">Transparent Header</h2>
        <div class="overflow-hidden bg-neutral-800">
          <PrtSiteHeader
              :nav-links="navLinks"
              variant="transparent"
          >
            <template #logo>
              <NuxtLink to="/" class="flex items-center gap-2">
                <span class="text-xl font-bold">LOGO</span>
              </NuxtLink>
            </template>
          </PrtSiteHeader>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavLink } from '../../../components/composite/siteHeader'

const navLinks: NavLink[] = [
  { label: 'Features', link: '#features' },
  { label: 'Pricing', link: '#pricing' },
  { label: 'About', link: '#about' },
  { label: 'Contact', link: '#contact' }
]
</script>