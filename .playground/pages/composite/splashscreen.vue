<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-neutral-100">
    <div class="mx-auto max-w-4xl">
      <!-- Header -->
      <div class="mb-8">

        <h1 class="text-3xl font-bold mb-2 text-center">Splash Screen</h1>

      </div>

      <div class="flex flex-row gap-4 justify-center items-center p-6 bg-neutral-800 ">
        <!-- Basic Splash Button and Screen -->
        <div class="relative">
          <PrtBtn @click="showBasic = true" color="bg-el-7">
            Show Basic Splash
          </PrtBtn>
          <PrtSplashScreen v-model="showBasic" :timeout="2000">
            <PrtLoader type="spinner" size="lg" color="primary" />
          </PrtSplashScreen>
        </div>

        <!-- Custom Splash Button and Screen -->
        <div class="relative">
          <PrtBtn @click="showCustom = true" color="bg-el-7">
            Show Custom Splash
          </PrtBtn>
          <PrtSplashScreen v-model="showCustom" :timeout="3000" overlayColor="bg-el-1">
            <div class="flex flex-col items-center gap-4">
              <PrtLoader type="dots" size="lg" />
              <p class="text-sm text-neutral-400">Loading...</p>
            </div>
          </PrtSplashScreen>
        </div>

        <!-- Message Splash Button and Screen -->
        <div class="relative">
          <PrtBtn @click="showAnimated = true" color="bg-el-7">
            Show With Message
          </PrtBtn>
          <PrtSplashScreen v-model="showAnimated" :timeout="4000">
            <div class="flex flex-col items-center gap-4 text-center">
              <PrtLoader type="rectangles" size="lg" />
              <div>
                <h3 class="text-lg font-semibold text-white">Loading Application</h3>
                <p class="text-sm text-neutral-400">Please wait...</p>
              </div>
            </div>
          </PrtSplashScreen>
        </div>
      </div>



    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBasic = ref(false)
const showCustom = ref(false)
const showAnimated = ref(false)
</script>