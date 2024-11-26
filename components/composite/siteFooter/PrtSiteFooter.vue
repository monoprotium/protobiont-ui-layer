<template>
  <footer :class="footerVariants({ variant })">
    <!-- Main Content -->
    <div class="py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-700/50 max-w-[1200px] w-full mx-auto">
      <div class="flex flex-col flex-wrap md:flex-no-wrap md:flex-row md:justify-between gap-8 md:gap-12">
        <!-- Categories -->
        <div class="flex flex-wrap gap-8">
          <div
              v-for="category in categories"
              :key="category.label"
              class="flex flex-col w-full md:w-auto"
          >
            <h3 class="text-lg font-medium mb-4 text-white">
              {{ category.label }}
            </h3>
            <ul class="space-y-2">
              <li
                  v-for="item in category.subcategories"
                  :key="item.subcategoryLabel"
              >
                <a
                    :href="item.link"
                    class="text-neutral-400 hover:text-white transition-colors"
                >
                  {{ item.subcategoryLabel }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Social & Contact -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-12">
          <!-- Social -->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium mb-4 text-white">Follow Us</h3>
            <div class="space-y-2">
              <a
                  v-for="social in socialMedia"
                  :key="social.label"
                  :href="social.link"
                  class="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <component
                    :is="social.icon.usePrtIcon ? PrtIcon : LucideIcon"
                    v-bind="getIconProps(social.icon)"
                    class="w-5 h-5"
                />
                {{ social.label }}
              </a>
            </div>
          </div>

          <!-- Contact -->
          <div class="flex flex-col">
            <h3 class="text-lg font-medium mb-4 text-white">Contact</h3>
            <div class="space-y-2">
              <a
                  v-for="contact in contactOptions"
                  :key="contact.label"
                  :href="contact.link"
                  class="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <component
                    :is="contact.icon.usePrtIcon ? PrtIcon : LucideIcon"
                    v-bind="getIconProps(contact.icon)"
                    class="w-5 h-5"
                />
                {{ contact.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="w-full py-6 bg-neutral-950">
      <div class="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-7xl mx-auto">
        <a
            v-for="link in bottomLinks"
            :key="link.label"
            :href="link.link"
            class="text-neutral-500 hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { h } from 'vue'
import * as LucideIcons from 'lucide-vue-next'
import { PrtIcon } from '../../base/icon'
import type { IconConfig, Category, SocialMedia, ContactOption, BottomLink } from './types'
import { footerVariants } from './variants'

const props = defineProps<{
  categories: Category[]
  socialMedia: SocialMedia[]
  contactOptions: ContactOption[]
  bottomLinks: BottomLink[]
  variant?: 'default' | 'minimal'
}>()

// Create LucideIcon that dynamically imports icons
const LucideIcon = {
  props: ['name'],
  render() {
    const IconComponent = LucideIcons[this.name as keyof typeof LucideIcons] as typeof LucideIcons.ArrowRight
    return IconComponent ? h(IconComponent) : null
  }
}

const getIconProps = (icon: IconConfig) => ({
  ...(icon.usePrtIcon ? { iconComponent: icon.name } : { name: icon.name })
})
</script>
