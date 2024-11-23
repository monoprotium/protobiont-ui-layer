<template>
  <div :class="containerClasses">
    <TransitionGroup
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-for="(group, letter) in groupedItems"
          :key="letter"
          :class="groupVariants({ orientation })"
      >
        <!-- Letter Header -->
        <div
            :class="[
            headerVariants({ orientation }),
            colorClasses.text
          ]"
        >
          {{ letter }}
        </div>

        <!-- Items List -->
        <div :class="listVariants({ orientation })">
          <template v-for="item in group" :key="getItemId(item)">
            <!-- Link Item -->
            <a
                v-if="isObject(item) && item.url"
                :href="item.url"
                :class="[
                itemVariants({ orientation, isLink: true }),
                `hover:${colorClasses.text}`
              ]"
            >
              <slot name="item" :item="item">
                {{ getItemName(item) }}
              </slot>
            </a>

            <!-- Regular Item -->
            <div
                v-else
                :class="[
                itemVariants({ orientation }),
                `hover:${colorClasses.text}`
              ]"
            >
              <slot name="item" :item="item">
                {{ getItemName(item) }}
              </slot>
            </div>
          </template>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { containerVariants, groupVariants, headerVariants, listVariants, itemVariants } from './variants'
import type { IndexBarProps, IndexBarItemType, IndexBarItem } from './types'

const props = withDefaults(defineProps<IndexBarProps>(), {
  displayEmptyLetters: false,
  orientation: 'vertical',
  size: 'base',
  color: 'bg-el-7',
  itemKey: 'name'
})

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Type guards
const isObject = (item: IndexBarItemType): item is IndexBarItem => {
  return typeof item === 'object' && item !== null
}

// Helper functions
const getItemName = (item: IndexBarItemType): string => {
  if (isObject(item)) {
    return item[props.itemKey] || item.name || ''
  }
  return item
}

const getItemId = (item: IndexBarItemType): string => {
  if (isObject(item)) {
    return item.id?.toString() || item[props.itemKey] || item.name
  }
  return item
}

//  generate color classes
const colorClasses = computed(() => {
  const baseColor = props.color.replace('bg-', '')
  return {
    text: `text-${baseColor}`,
    bg: props.color
  }
})

const groupedItems = computed(() => {
  const groups: Record<string, IndexBarItemType[]> = {}

  // Initialize empty groups if displayEmptyLetters is true
  if (props.displayEmptyLetters) {
    ALPHABET.split('').forEach(letter => {
      groups[letter] = []
    })
  }

  // Group items by first letter
  props.items.forEach(item => {
    const name = getItemName(item)
    const firstLetter = name.charAt(0).toUpperCase()
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(item)
  })

  // Sort items within each group
  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => getItemName(a).localeCompare(getItemName(b)))
  })

  return props.displayEmptyLetters
      ? groups
      : Object.fromEntries(
          Object.entries(groups).filter(([_, items]) => items.length > 0)
      )
})

const containerClasses = computed(() =>
    containerVariants({
      orientation: props.orientation,
      size: props.size
    })
)
</script>