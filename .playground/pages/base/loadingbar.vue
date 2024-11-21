<template>
  <div class="min-h-screen bg-neutral-900  text-gray-100">
    <header>
      <h1 class="text-3xl font-bold mb-2">Loading Bar Component</h1>
    </header>

    <section class="space-y-6">
      <PrtLoadingBar
          ref="loadingBarRef"
          :value="progress"
          :size="selectedSize"
          @start="onStart"
          @finish="onFinish"
          @error="onError"
      />

      <!-- Controls -->
      <div class="space-y-4">
        <!-- Size Controls -->
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-400">Size</h3>
          <div class="flex gap-2">
            <PrtBtn
                v-for="size in sizes"
                :key="size"
                :color="selectedSize === size ? 'bg-el-7' : 'bg-el-1'"
                @click="selectedSize = size"
                class="capitalize"
            >
              {{ size }}
            </PrtBtn>
          </div>
        </div>

        <!-- Action Controls -->
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-400">Actions</h3>
          <div class="flex gap-2">
            <PrtBtn color="bg-el-3" @click="triggerStart">Start</PrtBtn>
            <PrtBtn color="bg-el-7" @click="triggerFinish">Finish</PrtBtn>
            <PrtBtn color="bg-el-8" @click="triggerError">Error</PrtBtn>
          </div>
        </div>
      </div>

      <!-- Progress Display -->
      <div class="text-sm text-gray-400">
        Progress: {{ progress }}%
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { LoadingBarSize, LoadingBarMethods } from '../../../components/base/loadingBar/types'

const sizes: LoadingBarSize[] = ['sm', 'base', 'lg']
const selectedSize = ref<LoadingBarSize>('base')
const progress = ref(0)
const loadingBarRef = ref<LoadingBarMethods | null>(null)
let intervalId: ReturnType<typeof setInterval> | null = null

const onStart = () => {
  progress.value = 0
  clearLoadingInterval()
  intervalId = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 10
    } else {
      clearLoadingInterval()
    }
  }, 1000)
}

const onFinish = () => {
  clearLoadingInterval()
  progress.value = 100
}

const onError = () => {
  clearLoadingInterval()
  progress.value = 100
}

const triggerStart = () => loadingBarRef.value?.startLoading()
const triggerFinish = () => loadingBarRef.value?.finishLoading()
const triggerError = () => loadingBarRef.value?.errorLoading()

const clearLoadingInterval = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onUnmounted(clearLoadingInterval)
</script>