<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="flex flex-col items-center">

      <h1 class="text-xl font-semibold text-white mb-6">Countdown Demo</h1>

      <div class="w-full max-w-3xl space-y-8">
        <!-- Event Countdown -->
        <div class="p-6 bg-neutral-800">
          <h2 class="text-lg text-white mb-4 bold">New Year Countdown</h2>
          <PrtCountdown
              time="2024-12-31T00:00:00"
              size="lg"
              color="bg-el-7"
              @end="handleNewYearEnd"
          />
        </div>

        <!-- Sale Countdown -->
        <div class="p-6 bg-neutral-800">
          <div class="flex items-center gap-2 mb-4">
            <div class="text-el-8 text-lg font-bold">SALE</div>
            <div class="text-neutral-400">Ends in:</div>
          </div>
          <PrtCountdown
              :time="saleEndTime"
              size="base"
              color="bg-el-8"
              :format="['hours', 'minutes', 'seconds']"
              @end="handleSaleEnd"
          />
        </div>

        <!-- Different Sizes -->
        <div class="p-6 bg-neutral-800">
          <h2 class="text-lg text-white mb-4 font-bold">Different Sizes</h2>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-20 text-neutral-400">Small:</div>
              <PrtCountdown
                  time="2026-06-01T00:00:00"
                  size="sm"
                  color="bg-el-4"
              />
            </div>

            <div class="flex items-center gap-4">
              <div class="w-20 text-neutral-400">Base:</div>
              <PrtCountdown
                  time="2026-06-01T00:00:00"
                  size="base"
                  color="bg-el-7"
              />
            </div>

            <div class="flex items-center gap-4">
              <div class="w-20 text-neutral-400">Large:</div>
              <PrtCountdown
                  time="2026-06-01T00:00:00"
                  size="lg"
                  color="bg-el-9"
              />
            </div>
          </div>
        </div>

        <!-- Different Formats -->
        <div class="p-6 bg-neutral-800">
          <h2 class="text-lg text-white mb-4 font-bold">Different Formats</h2>
          <div class="space-y-6">
            <div>
              <div class="text-neutral-400 mb-2">Days & Hours only:</div>
              <PrtCountdown
                  time="2024-06-01T00:00:00"
                  :format="['days', 'hours']"
                  color="bg-el-4"
              />
            </div>

            <div>
              <div class="text-neutral-400 mb-2">Minutes & Seconds only:</div>
              <PrtCountdown
                  :time="fiveMinutes"
                  :format="['minutes', 'seconds']"
                  color="bg-el-7"
              />
            </div>
          </div>
        </div>

        <!-- Timer Example -->
        <div class="p-6 bg-neutral-800">
          <div class="flex items-center gap-2 mb-4 fold-bold">
            <div class="text-el-4">Quick Timer</div>
            <div class="text-neutral-400">(60 seconds)</div>
          </div>
          <PrtCountdown
              v-if="showTimer"
              :time="60000"
              :format="['minutes', 'seconds']"
              color="bg-el-4"
              @end="handleTimerEnd"
          />
          <div v-else>
            <PrtBtn @click="restartTimer"  color="bg-el-4">
              Start Again
            </PrtBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'


// Calculate sale end time (24 hours from now)
const saleEndTime = computed(() => {
  const date = new Date()
  date.setHours(date.getHours() + 24)
  return date.toISOString()
})

// Constants
const fiveMinutes = 5 * 60 * 1000

// Timer state
const showTimer = ref(true)

// Event handlers
const handleNewYearEnd = () => {
  console.log('Happy New Year! 🎉')
}

const handleSaleEnd = () => {
  console.log('Sale ended!')
}

const handleTimerEnd = () => {
  console.log('Timer completed!')
  showTimer.value = false
}

const restartTimer = () => {
  showTimer.value = true
}
</script>