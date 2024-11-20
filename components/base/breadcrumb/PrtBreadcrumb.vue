<template>
  <nav aria-label="breadcrumb">
    <ol :class="breadcrumbClasses">
      <li 
        v-for="(item, index) in processedItems" 
        :key="item.name"
        class="flex items-center"
      >
        <!-- Link -->
        <a 
          v-if="item.isClickable && item.url"
          :href="item.url"
          :class="[
            'px-1 py-0.5 rounded-sm hover:underline focus:outline-none focus:ring-2',
            `${linkColor} hover:opacity-80 focus:ring-${linkColor}/20`
          ]"
        >
          {{ item.name }}
        </a>

        <!-- Text -->
        <span
          v-else
          :class="[
            { 'font-medium': item.isCurrent },
            textColor
          ]"
          :aria-current="item.isCurrent ? 'page' : undefined"
        >
          {{ item.name }}
        </span>

        <!-- Separator -->
        <span 
          v-if="index < processedItems.length - 1" 
          class="flex items-center px-2"
          :class="separatorColor"
          aria-hidden="true"
        >
          <slot name="separator">
            <LucideChevronRight class="h-4 w-4" />
          </slot>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { variants } from './variants'
import type { BreadcrumbItem, BreadcrumbSize } from './types'

interface Props {
  items: BreadcrumbItem[]
  size?: BreadcrumbSize
  linkColor?: string
  textColor?: string
  separatorColor?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
  linkColor: 'text-el-7',
  textColor: 'text-gray-500',
  separatorColor: 'text-gray-400',
  class: '',
})

const processedItems = computed(() => {
  return props.items.map((item, index, array) => ({
    ...item,
    isClickable: item.isClickable ?? (!!item.url && index !== array.length - 1),
    isCurrent: item.isCurrent ?? (index === array.length - 1),
  }))
})

const breadcrumbClasses = computed(() => {
  return [
    variants({ size: props.size }),
    props.class
  ]
})
</script>