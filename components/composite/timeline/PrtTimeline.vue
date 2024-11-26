<template>
  <div class="prt-timeline">
    <!-- Case 1: Vertical Timeline On The Left -->
    <div v-if="layoutCase === 1">
      <div class="relative prt-timeline tl-vertical tl-items-right">
        <div class="absolute left-4 top-0 bottom-0 w-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index" class="mt-8 flex items-center z-10 relative">
          <div class="w-8 h-8 rounded-full border-4 border-neutral-950  " :class="item.dotColor || 'bg-el-7'"></div>
          <div class="ml-4 bg-neutral-900 p-4 rounded-md shadow-md flex-grow">
            <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Case 2: Vertical Timeline On The Right -->
    <div v-else-if="layoutCase === 2">
      <div class="relative prt-timeline tl-vertical tl-items-left">
        <div class="absolute right-4 top-0 bottom-0 w-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index" class="mt-8 flex items-center z-10 relative justify-end">
          <div class="mr-4 bg-neutral-900 p-4 rounded-md shadow-md flex-grow">
            <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
          <div class="w-8 h-8 rounded-full border-4  border-neutral-950" :class="item.dotColor || 'bg-el-7'"></div>
        </div>
      </div>
    </div>

    <!-- Case 3: Vertical Timeline In The Middle, Items on Both Sides -->
    <div v-else-if="layoutCase === 3">
      <div class="relative prt-timeline tl-vertical">
        <div class="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index" class="flex items-center justify-center mt-8">
          <div class="bg-neutral-900 p-4 rounded-md shadow-md flex-grow mr-8 max-w-[45%] text-right">
            <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
          <div class="w-8 h-8 rounded-full border-4  border-neutral-950 z-10" :class="item.dotColor || 'bg-el-7'"></div>
          <div class="bg-neutral-900 p-4 rounded-md shadow-md flex-grow ml-8 max-w-[45%] text-left">
            <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Case 4: Vertical Timeline In The Middle, Alternating Items, Starting From Left -->
    <div v-else-if="layoutCase === 4">
      <div class="relative prt-timeline tl-vertical">
        <div class="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index" class="flex items-center justify-center mt-8">
          <template v-if="index % 2 === 0">
            <div class="bg-neutral-900 p-4 rounded-md shadow-md w-1/2 text-right">
              <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
              <p class="text-gray-300">{{ item.description }}</p>
            </div>
            <div class="w-8 h-8 rounded-full border-4  border-neutral-950 z-10 mx-4" :class="item.dotColor || 'bg-el-7'"></div>
            <div class="w-1/2"></div>
          </template>
          <template v-else>
            <div class="w-1/2"></div>
            <div class="w-8 h-8 rounded-full border-4  border-neutral-950 z-10 mx-4" :class="item.dotColor || 'bg-el-7'"></div>
            <div class="bg-neutral-900 p-4 rounded-md shadow-md w-1/2">
              <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
              <p class="text-gray-300">{{ item.description }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Case 5: Vertical Timeline In The Middle, Alternating Items, Starting From Right -->
    <div v-else-if="layoutCase === 5">
      <div class="relative prt-timeline tl-vertical">
        <div class="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index" class="flex items-center justify-center mt-8">
          <template v-if="index % 2 === 0">
            <div class="w-1/2"></div>
            <div class="w-8 h-8 rounded-full border-4  border-neutral-950 z-10 mx-4" :class="item.dotColor || 'bg-el-7'"></div>
            <div class="bg-neutral-900 p-4 rounded-md shadow-md w-1/2">
              <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
              <p class="text-gray-300">{{ item.description }}</p>
            </div>
          </template>
          <template v-else>
            <div class="bg-neutral-900 p-4 rounded-md shadow-md w-1/2 text-right">
              <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
              <p class="text-gray-300">{{ item.description }}</p>
            </div>
            <div class="w-8 h-8 rounded-full border-4  border-neutral-950 z-10 mx-4" :class="item.dotColor || 'bg-el-7'"></div>
            <div class="w-1/2"></div>
          </template>
        </div>
      </div>
    </div>

    <!-- Case 6: Horizontal Timeline On Top  -->
    <div v-else-if="layoutCase === 6">
      <div class="prt-timeline tl-horizontal relative min-h-[300px]">
        <div class="w-full flex absolute items-center mt-16 h-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index"
             class="flex flex-col items-center absolute top-12"
             :class="getPositionClass(index, items.length)">
          <div class="w-8 h-8 rounded-full border-4 border-neutral-950" :class="item.dotColor || 'bg-el-7'"></div>
          <div class="mt-4 bg-neutral-900 p-4 rounded-md shadow-md w-64 text-center">
            <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Case 6: Horizontal Timeline On Bottom  -->
    <div v-else-if="layoutCase === 7">
      <div class="prt-timeline tl-horizontal relative min-h-[300px]">
        <div v-for="(item, index) in items" :key="index"
             class="flex flex-col items-center absolute bottom-12"
             :class="getPositionClass(index, items.length)">
          <div class="mb-4 bg-neutral-900 p-4 rounded-md shadow-md w-64 text-center">
            <h4 class="font-bold text-lg text-white">{{ item.title }}</h4>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
          <div class="w-8 h-8 rounded-full border-4 border-neutral-950 z-10" :class="item.dotColor || 'bg-el-7'"></div>
        </div>
        <div class="w-full flex absolute items-center bottom-16 h-0.5" :class="lineColor || 'bg-gray-600'"></div>
      </div>
    </div>


    <!-- Case 8: Horizontal Timeline In The Middle, Items On Both Sides -->
    <div v-else-if="layoutCase === 8">
      <div class="relative min-h-120">
        <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index"
             class="absolute flex flex-col items-center top-1/2 -translate-y-1/2"
             :class="getPositionClass(index, items.length)">
          <div class="w-64 p-4 bg-neutral-900 text-white rounded-md shadow-md mb-2 text-center">
            <h4 class="font-bold text-lg">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
          <div class="w-8 h-8 rounded-full border-4 border-neutral-950" :class="item.dotColor || 'bg-el-7'"></div>
          <div class="w-64 p-4 bg-neutral-900 text-white rounded-md shadow-md mt-2 text-center">
            <h4 class="font-bold text-lg">{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Case 9: Horizontal Timeline In The Middle, Items Alternating, Strating From The Top -->
    <div v-else-if="layoutCase === 9">
      <div class="relative min-h-120">
        <div class="absolute inset-x-0 top-1/2 h-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index"
             class="absolute flex flex-col items-center top-1/2 -translate-y-1/2"
             :class="getPositionClass(index, items.length)">
          <template v-if="index % 2 === 0">
            <!-- Top item -->
            <div class="relative top-[-16px]">
              <div class="w-64 text-white rounded-md shadow-md text-center">
                <div class="bg-neutral-900 p-4 mb-8">
                  <h4 class="font-bold text-lg">{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full border-4 border-neutral-950 z-10"
                   :class="item.dotColor || 'bg-el-7'"></div>
            </div>
            <div class="w-64 h-26"></div>
          </template>
          <template v-else>
            <!-- Bottom item -->
            <div class="w-64 h-26"></div>
            <div class="relative top-[16px]">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-neutral-950 z-10"
                   :class="item.dotColor || 'bg-el-7'"></div>
              <div class="w-64 text-white rounded-md shadow-md text-center">
                <div class="bg-neutral-900 p-4 mt-8">
                  <h4 class="font-bold text-lg">{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Case 10: Horizontal Timeline In The Middle, Items Alternating, Strating From The Bottom -->
    <div v-else-if="layoutCase === 10">
      <div class="relative min-h-120">
        <div class="absolute inset-x-0 top-1/2 h-0.5" :class="lineColor || 'bg-gray-600'"></div>
        <div v-for="(item, index) in items" :key="index"
             class="absolute flex flex-col items-center top-1/2 -translate-y-1/2"
             :class="getPositionClass(index, items.length)">
          <template v-if="index % 2 === 0">
            <div class="w-64 h-26"></div>
            <div class="relative top-[16px]">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-neutral-950 z-10"
                   :class="item.dotColor || 'bg-el-7'"></div>
              <div class="w-64 text-white rounded-md shadow-md text-center">
                <div class="bg-neutral-900 p-4 mt-8">
                  <h4 class="font-bold text-lg">{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="relative top-[-16px]">
              <div class="w-64 text-white rounded-md shadow-md text-center">
                <div class="bg-neutral-900 p-4 mb-8">
                  <h4 class="font-bold text-lg">{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full border-4 border-neutral-950 z-10"
                   :class="item.dotColor || 'bg-el-7'"></div>
            </div>
            <div class="w-64 h-26"></div>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TimelineProps } from './types'


const props = withDefaults(defineProps<TimelineProps>(), {
  orientation: 'Vertical',
  dotAlignment: 'Left',
  itemPosition: 'Right',
  alternation: 'None',
  items: () => [],
  lineColor: '',
  dotSize: 'base'
})

const layoutCase = computed(() => {
  const key = `${props.orientation}-${props.dotAlignment}-${props.itemPosition}-${props.alternation}`
  const configMap = {
    "Vertical-Left-Right-None": 1,
    "Vertical-Right-Left-None": 2,
    "Vertical-Middle-BothSides-None": 3,
    "Vertical-Middle-BothSides-StartLeft": 4,
    "Vertical-Middle-BothSides-StartRight": 5,
    "Horizontal-Top-Bottom-None": 6,
    "Horizontal-Bottom-Top-None": 7,
    "Horizontal-Middle-BothSides-None": 8,
    "Horizontal-Middle-BothSides-StartTop": 9,
    "Horizontal-Middle-BothSides-StartBottom": 10
  }
  return configMap[key as keyof typeof configMap] || 1
})

// helpers
const getPositionClass = (index: number, totalItems: number) => {
  const percentage = ((index + 1) * 100 / (totalItems + 1));
  // for UnoCSS
  const roundedPercentage = Math.round(percentage / 5) * 5;
  return `left-${roundedPercentage}%`;
}

</script>