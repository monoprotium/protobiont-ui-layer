<template>
  <p
      class="prt-excerpt inline-block font-normal text-base leading-relaxed"
      :class="props.class"
  >
    {{ truncatedText }}
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { truncateText } from "./utils"
import type { ExcerptProps } from "./types"

const props = withDefaults(defineProps<ExcerptProps>(), {
  type: 'char',
  length: 100,
  suffix: "...",
  class: ''
})

const truncatedText = computed(() => truncateText(props.text, props.length, props.type, props.suffix));

</script>