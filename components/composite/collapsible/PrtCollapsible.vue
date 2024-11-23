<template>
  <div class="prt-collapsible" :class="collapsibleVariants({ size })">
    <div
        v-for="(item, index) in internalItems"
        :key="index"
        class="prt-collapsible__item"
    >
      <button
          class="prt-collapsible__header"
          :class="[
          headerVariants({ active: item.isOpen }),
          color || 'bg-neutral-800 hover:bg-neutral-700'
        ]"
          @click="toggleCollapsible(index)"
          type="button"
      >
        <span class="flex-1">{{ item.title }}</span>
        <ChevronDown
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'rotate-180': item.isOpen }"
        />
      </button>

      <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[500px] opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="max-h-[500px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
      >
        <div
            v-if="item.isOpen"
            class="prt-collapsible__content text-neutral-200"
            :class="contentVariants({ size })"
        >
          <slot name="content" :item="item">
            {{ item.content }}
          </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { collapsibleVariants, headerVariants, contentVariants } from './variants'

interface CollapsibleItem {
  title: string
  content: string
  isOpen?: boolean
}

interface Props {
  items: CollapsibleItem[]
  size?: 'sm' | 'base' | 'lg'
  color?: string
  initialOpenIndex?: number
  allowMultiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
  color: 'bg-el-7',
  initialOpenIndex: 0,
  allowMultiple: false,
})

const internalItems = ref<(CollapsibleItem & { isOpen: boolean })[]>(
  props.items.map((item, index) => ({
    ...item,
    isOpen: index === props.initialOpenIndex
  }))
)

const toggleCollapsible = (index: number) => {
  if (props.allowMultiple) {
    internalItems.value[index].isOpen = !internalItems.value[index].isOpen
  } else {
    internalItems.value = internalItems.value.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    }))
  }
}
</script>