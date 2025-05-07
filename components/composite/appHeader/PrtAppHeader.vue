<template>
  <header
    :class="[
      headerVariants({ variant: props.variant, size: props.size }),
      props.bgColor || 'bg-neutral-800',
      props.textColor || 'text-white',
      props.class
    ]"
  >
    <!-- Left Section (Logo) -->
    <div class="flex-shrink-0">
      <slot name="logo">
        <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-90">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700">
            <PrtIcon size="base" iconComponent="home" />
          </div>
        </NuxtLink>
      </slot>
    </div>

    <!-- Middle Section (Navigation) -->
    <div class="hidden md:flex flex-grow items-center justify-center px-6">
      <slot name="navigation">
        <nav class="flex items-center gap-4">
          <!-- Structured Navigation (if props.navigation is provided) -->
          <template v-if="props.navigation && props.navigation.length > 0">
             <template v-for="(item, idx) in props.navigation" :key="idx">
                <PrtBtn
                  :color="item.active ? 'bg-neutral-700' : 'bg-transparent'"
                  :class="[
                    '!hover:bg-neutral-600/30',
                     navItemVariants({ active: item.active || false })
                  ]"
                  :tag="item.href ? 'a' : 'button'"
                  :href="item.href"
                  @click="() => handleNavigation(item)"
                  size="sm"
                  variant="ghost"
                  :disableFocusRing="true"
                >
                  <PrtIcon v-if="item.icon" :iconComponent="item.icon" size="sm" class="mr-1.5" />
                  {{ item.label }}
                </PrtBtn>
             </template>
          </template>
          <!-- Simple Navigation (fallback if props.pages is provided) -->
          <template v-else-if="props.pages && props.pages.length > 0">
             <template v-for="(page, idx) in props.pages" :key="idx">
                 <PrtBtn
                    color="bg-neutral-700"
                    class="!hover:bg-neutral-600"
                    size="sm"
                    variant="solid"
                    :disableFocusRing="true"
                    edges="rounded"
                    @click="() => handleNavigation(page)"
                  >
                    {{ page }}
                 </PrtBtn>
             </template>
          </template>
        </nav>
      </slot>
    </div>

    <!-- Right Section (Actions) -->
    <div class="flex flex-shrink-0 items-center gap-3">
       <slot name="actions">
          <PrtBtn
            v-if="showSearch"
            :class="actionButtonVariants({ bgColor: variant === 'transparent' ? 'transparent' : 'default' })"
            @click="$emit('searchClick')"
            aria-label="Search"
            :disableFocusRing="true"
          >
            <PrtIcon size="base" iconComponent="search" />
          </PrtBtn>
          <PrtBtn
            v-if="showSettings"
             :class="actionButtonVariants({ bgColor: variant === 'transparent' ? 'transparent' : 'default' })"
            @click="$emit('settingsClick')"
            aria-label="Settings"
            :disableFocusRing="true"
          >
            <PrtIcon size="base" iconComponent="settings" />
          </PrtBtn>
        </slot>
      <PrtBtn
        :class="[
          actionButtonVariants({ bgColor: variant === 'transparent' ? 'transparent' : 'default' }),
          'md:hidden'
        ]"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
        aria-label="Toggle menu"
        :disableFocusRing="true"
      >
        <PrtIcon
          size="base"
          :iconComponent="isMenuOpen ? 'x' : 'menu'"
        />
      </PrtBtn>
    </div>

    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isMenuOpen"
        :class="[
          mobileMenuVariants({ isOpen: isMenuOpen }),
          'bg-neutral-900 border-t border-neutral-800',
          'md:hidden'
        ]"
      >
        <slot name="mobile-navigation">
           <div class="space-y-1 px-4 py-3">
             <template v-if="props.navigation && props.navigation.length > 0">
                 <template v-for="(item, idx) in props.navigation" :key="`mobile-${idx}`">
                    <PrtBtn
                       :class="[
                         'block w-full text-left justify-start',
                          navItemVariants({ active: item.active || false })
                       ]"
                       :tag="item.href ? 'a' : 'button'"
                       :href="item.href"
                       @click="() => handleNavigation(item)"
                       variant="ghost"
                       :disableFocusRing="true"
                     >
                      <PrtIcon v-if="item.icon" :iconComponent="item.icon" size="sm" class="mr-2" />
                       {{ item.label }}
                    </PrtBtn>
                 </template>
             </template>
             <template v-else-if="props.pages && props.pages.length > 0">
                <template v-for="(page, idx) in props.pages" :key="`mobile-${idx}`">
                    <PrtBtn
                       color="bg-neutral-700"
                       class="!hover:bg-neutral-600 block w-full text-left justify-start"
                       size="sm"
                       variant="solid"
                       :disableFocusRing="true"
                       edges="rounded"
                       @click="() => handleNavigation(page)"
                     >
                       {{ page }}
                    </PrtBtn>
                </template>
             </template>
           </div>
        </slot>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Assuming PrtIcon and PrtBtn are globally registered or auto-imported
import { headerVariants, navItemVariants, actionButtonVariants, mobileMenuVariants } from './variants'
import type { HeaderProps, NavigationItem } from './types'


const props = withDefaults(defineProps<HeaderProps>(), {
  pages: () => [],
  navigation: () => [],
  variant: 'default',
  size: 'base',
  bgColor: '',
  textColor: '',
  showSearch: true,
  showSettings: true,
  class: '',
})

const emit = defineEmits<{
  (e: 'navigate', payload: string | NavigationItem): void
  (e: 'searchClick'): void
  (e: 'settingsClick'): void
  (e: 'menuToggle', isOpen: boolean): void
}>()

const isMenuOpen = ref(false)

const handleNavigation = (payload: string | NavigationItem) => {
  if (typeof payload === 'object' && payload.onClick) {
      payload.onClick();
  }
  emit('navigate', payload)
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  emit('menuToggle', isMenuOpen.value)
}
</script>
