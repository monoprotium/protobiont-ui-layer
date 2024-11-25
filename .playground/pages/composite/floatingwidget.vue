<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Base Examples -->
        <section v-for="config in baseConfigs" :key="config.id" class="bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold mb-4 text-white capitalize">
            {{ config.title }}
          </h2>
          <div class="relative min-h-[300px] bg-neutral-700/50 ">
            <div class="absolute inset-0 flex items-center justify-center">
              <PrtFloatingWidget
                  v-model="widgetStates[config.id]"
                  :position="config.position"
                  :direction="config.direction"
                  :color="config.color || 'bg-el-7'"
              >
                <div :class="getActionContainerClasses(config.direction)">
                  <PrtBtn size="sm" color="bg-el-4" class="whitespace-nowrap">Action 1</PrtBtn>
                  <PrtBtn size="sm" color="bg-el-4" class="whitespace-nowrap">Action 2</PrtBtn>
                </div>
              </PrtFloatingWidget>
            </div>
          </div>
        </section>

        <!-- Custom Example -->
        <section class="bg-neutral-800  p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Custom Styling</h2>
          <div class="relative min-h-[300px] bg-neutral-700/50 ">
            <div class="absolute inset-0 flex items-center justify-center">
              <PrtFloatingWidget
                  v-model="widgetStates.custom"
                  position="bottom"
                  color="bg-el-4"
                  :gap="8"
                  size="lg"
              >
                <template #trigger>
                  <Settings class="w-6 h-6" />
                </template>
                <div class="flex gap-2">
                  <PrtBtn size="sm" color="bg-el-6" class="whitespace-nowrap">Opt 1</PrtBtn>
                  <PrtBtn size="sm" color="bg-el-4" class="whitespace-nowrap">Opt 2</PrtBtn>
                  <PrtBtn size="sm" color="bg-el-7" class="whitespace-nowrap">Opt 3</PrtBtn>
                </div>
              </PrtFloatingWidget>
            </div>
          </div>
        </section>

        <!-- Fixed Position Example -->
        <section class="bg-neutral-800  p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Fixed Position</h2>
          <div class="relative min-h-[300px] bg-neutral-700/50  flex items-center justify-center">
            <PrtFloatingWidget
                v-model="widgetStates.fixed"
                position="bottom"
                color="bg-el-9"
            >
              <div class="flex gap-2">
                <PrtBtn size="sm" color="bg-el-4" class="whitespace-nowrap">Fixed 1</PrtBtn>
                <PrtBtn size="sm" color="bg-el-4" class="whitespace-nowrap">Fixed 2</PrtBtn>
              </div>
            </PrtFloatingWidget>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { Settings } from 'lucide-vue-next'
import type { MenuPosition, MenuDirection } from '../../../components/composite/floatingWidget/types'



type WidgetStates = {
  [key: string]: boolean
} & {
  custom: boolean
  fixed: boolean
}

const baseConfigs = [
  {
    id: 'horizontal-bottom',
    title: 'Horizontal Menu (Bottom)',
    position: 'bottom',
    direction: 'horizontal'
  },
  {
    id: 'horizontal-top',
    title: 'Horizontal Menu (Top)',
    position: 'top',
    direction: 'horizontal'
  },
  {
    id: 'vertical-right',
    title: 'Vertical Menu (Right)',
    position: 'right',
    direction: 'vertical'
  },
  {
    id: 'vertical-left',
    title: 'Vertical Menu (Left)',
    position: 'left',
    direction: 'vertical'
  }
] as const

const widgetStates = ref<WidgetStates>(
    baseConfigs.reduce((acc, config) => ({
      ...acc,
      [config.id]: false
    }), {
      custom: false,
      fixed: false
    })
)

const getActionContainerClasses = (direction: MenuDirection) => ({
  flex: true,
  'flex-col': direction === 'vertical',
  'flex-row': direction === 'horizontal',
  'gap-2': true
})
</script>