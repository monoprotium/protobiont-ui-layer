<template>
  <div class="flex flex-wrap gap-2">
    <TransitionGroup
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <PrtChip
          v-for="(tag, index) in tags"
          :key="tag"
          :size="size"
          :color="color"
          class="flex items-center gap-2 group"
          clickable
      >
        <span class="text-sm">{{ tag }}</span>
        <button
            type="button"
            :class="closeBg"
            class="p-0.5 rounded-full hover:bg-black/20 transition-colors"
            @click.stop="removeTag(index)"
            aria-label="Remove tag"
        >
          <X class="w-3 h-3" />
        </button>
      </PrtChip>
    </TransitionGroup>

    <PrtInputText
        ref="inputRef"
        v-model="newTag"
        type="text"
        :size="size"
        :key="key"
        :placeholder="placeholder"
        :disabled="disabled"
        class="flex-1 min-w-[120px]"
        @keydown.enter.prevent="addTag"
        @keydown.backspace="handleBackspace"
        @blur="handleBlur"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { X } from 'lucide-vue-next'
import type { TagChipsSize, InputTextInstance } from './types'

interface Props {
  tags: string[]
  size?: TagChipsSize
  color?: string
  closeBg?: string
  placeholder?: string
  disabled?: boolean
  allowDuplicates?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
  color: 'bg-neutral-800',
  closeBg: 'bg-neutral-800',
  placeholder: 'Add a tag...',
  disabled: false,
  allowDuplicates: false
})

const emit = defineEmits<{
  'update:tags': [tags: string[]]
  'tag:add': [tag: string]
  'tag:remove': [tag: string]
  'error': [message: string]
}>()

const inputRef = ref<InputTextInstance | null>(null)
const newTag = ref('')
const key = ref(0)

const addTag = () => {
  const trimmedTag = newTag.value.trim()

  if (!trimmedTag) return

  if (!props.allowDuplicates && props.tags.includes(trimmedTag)) {
    emit('error', 'Duplicate tags are not allowed')
    return
  }

  const updatedTags = [...props.tags, trimmedTag]
  emit('update:tags', updatedTags)
  emit('tag:add', trimmedTag)

  newTag.value = ''
  key.value++
  nextTick(() => {
    inputRef.value?.focusInput()
  })
}

const removeTag = (index: number) => {
  const removedTag = props.tags[index]
  const updatedTags = props.tags.filter((_, i) => i !== index)
  emit('update:tags', updatedTags)
  emit('tag:remove', removedTag)
}

const handleBackspace = (event: KeyboardEvent) => {
  if (newTag.value === '' && props.tags.length > 0) {
    event.preventDefault()
    removeTag(props.tags.length - 1)
  }
}

const handleBlur = () => {
  if (newTag.value.trim()) {
    addTag()
  }
}
</script>