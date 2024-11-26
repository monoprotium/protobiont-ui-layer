<template>
  <nav
      :class="footerVariants({ size, variant })"
      :aria-label="ariaLabel"
  >
    <ul class="mx-auto flex w-full max-w-screen-sm items-center justify-around px-2">
      <li
          v-for="item in items"
          :key="item.id"
          :class="itemVariants({ active: currentPath === item.path })"
      >
        <NuxtLink
            :to="item.path"
            class="group flex flex-col items-center gap-1 p-2"
            :aria-current="currentPath === item.path ? 'page' : undefined"
        >
          <div :class="iconVariants({ size })">
            <component
                :is="item.icon"
                :class="[
                iconColorVariants({ active: currentPath === item.path }),
                'h-full w-full'
              ]"
                aria-hidden="true"
            />
          </div>
          <span :class="labelVariants({ active: currentPath === item.path })">
            {{ item.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { FooterProps } from './types'
import {
  footerVariants,
  itemVariants,
  iconVariants,
  iconColorVariants,
  labelVariants
} from './variants'

const props = withDefaults(defineProps<FooterProps>(), {
  size: 'base',
  variant: 'default',
  ariaLabel: 'Footer navigation'
})

const route = useRoute()
const currentPath = computed(() => route.path)
</script>