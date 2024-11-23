<template>
  <div :class="[
    'prt-tabs',
    props.placement === 'left' || props.placement === 'right' ? 'flex' : ''
  ]">
    <div :class="[
      tabListVariants({ placement: props.placement }),
      'border-b border-neutral-800 bg-neutral-900'
    ]">
      <PrtBtn
          v-for="item in props.items"
          :key="item.id"
          :class="[
          tabTriggerVariants({
            bgStyle: props.bgStyle,
            size: props.size,
            state: item.disabled ? 'disabled' :
                   currentSelectedId === item.id ? 'active' : 'inactive'
          }),
          'text-white'
        ]"
          :disabled="item.disabled"
          :disableFocusRing="true"
          @click="selectTab(item.id)"
          :size="props.size"
          variant="ghost"
          :color="props.color"
          edges="square"
      >
        {{ item.label }}
      </PrtBtn>
    </div>

    <div
        :class="[
        tabContentVariants(),
        'flex-1 bg-neutral-900 text-white'
      ]"
    >
      <div
          v-for="item in props.items"
          :key="item.id"
          v-show="currentSelectedId === item.id"
          class="min-h-0"
      >
        <template v-if="typeof item.content === 'function'">
          <component :is="item.content" />
        </template>
        <template v-else>
          {{ item.content }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { tabListVariants, tabTriggerVariants, tabContentVariants } from './variants'
import type { TabsProps } from './types'
import { PrtBtn } from '../../base/btn'

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: undefined,
  items: () => [],
  size: 'base',
  style: 'line',
  placement: 'top',
  color: 'bg-el-7'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const internalSelectedId = ref(props.items[0]?.id)

const currentSelectedId = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalSelectedId.value,
  set: (value: string) => {
    if (props.modelValue !== undefined) {
      emit('update:modelValue', value)
    } else {
      internalSelectedId.value = value
    }
  }
})

function selectTab(id: string) {
  currentSelectedId.value = id
}
</script>