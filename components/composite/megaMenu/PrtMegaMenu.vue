<template>
  <div
      ref="menuRef"
      :class="containerVariants({ variant, size, fullWidth })"
      @mouseleave="closeMenu"
  >
    <!-- Navigation section -->
    <div class="relative">
      <nav :class="navigationVariants({ align })">
        <div
            v-for="category in categories"
            :key="category.id"
            class="relative"
        >
          <a
              :href="category.link"
              :class="menuItemVariants({ active: currentMenu === category.id })"
              @mouseover="openMenu(category.id)"
              class="pb-6"
          >
            {{ category.name }}
          </a>
        </div>
      </nav>
    </div>

    <!-- Dropdown section -->
    <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="currentMenu"
          :class="dropdownVariants({ variant })"
      >
        <div class="max-w-7xl mx-auto px-4">
          <div class="py-6">
            <slot :name="currentMenu">
              <div class="space-y-4">
                <h3 class="text-lg font-medium text-white">Featured Items</h3>
                <div class="grid grid-cols-2 gap-6">
                  <slot name="default" />
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { containerVariants, navigationVariants, menuItemVariants, dropdownVariants } from './variants'
import type { MegaMenuProps } from './types'

const props = withDefaults(defineProps<MegaMenuProps>(), {
  size: 'base',
  variant: 'primary',
  align: 'left',
  fullWidth: false
})

const menuRef = ref<HTMLElement | null>(null)
const currentMenu = ref<string>('')
let closeTimeout: ReturnType<typeof setTimeout>

const openMenu = (categoryId: string) => {
  clearTimeout(closeTimeout)
  currentMenu.value = categoryId
}

const closeMenu = () => {
  closeTimeout = setTimeout(() => {
    currentMenu.value = ''
  }, 150)
}

onClickOutside(menuRef, () => {
  currentMenu.value = ''
})

</script>