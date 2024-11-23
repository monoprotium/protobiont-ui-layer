<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="mx-auto max-w-4xl space-y-8">
      <!-- Page Header -->
      <header class="space-y-2">

        <h1 class="text-3xl font-bold">Drawer</h1>

      </header>

      <!-- Basic Example -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Basic Example</h2>
        <div class="flex gap-4">
          <PrtBtn @click="toggleDrawer('basic')" color="bg-el-7">
            Open Drawer
          </PrtBtn>

          <PrtDrawer v-model="drawers.basic">
            <div class="p-6">
              <h3 class="text-lg font-medium mb-4">Basic Drawer</h3>
              <p class="text-gray-400">
                This is a basic drawer that slides in from the right side.
              </p>
            </div>
          </PrtDrawer>
        </div>
      </section>

      <!-- Placements -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Placements</h2>
        <div class="flex flex-wrap gap-4">
          <PrtBtn
              v-for="placement in placements"
              :key="placement"
              @click="toggleDrawer(placement)"
              color="bg-el-7"
          >
            {{ placement }} Drawer
          </PrtBtn>

          <template v-for="placement in placements" :key="placement">
            <PrtDrawer
                v-model="drawers[placement]"
                :placement="placement"
            >
              <div class="p-6">
                <h3 class="text-lg font-medium mb-4 text-white">{{ placement }} Drawer</h3>
                <p class="text-white/70">
                  This drawer slides in from the {{ placement }}.
                </p>
              </div>
            </PrtDrawer>
          </template>
        </div>
      </section>

      <!-- Options -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Options</h2>
        <div class="flex flex-wrap gap-4">
          <!-- Persistent Drawer -->
          <PrtBtn @click="toggleDrawer('persistent')" color="bg-el-7">
            Persistent Drawer
          </PrtBtn>
          <PrtDrawer
              v-model="drawers.persistent"
              :disable-click-away="true"
              :disable-esc="true"
          >
            <div class="p-6">
              <h3 class="text-lg font-medium mb-4">Persistent Drawer</h3>
              <p class="text-gray-400 mb-4">
                This drawer can only be closed by clicking close button.
              </p>
              <PrtBtn @click="drawers.persistent = false" color="bg-el-7">
                Close Drawer
              </PrtBtn>
            </div>
          </PrtDrawer>

          <!-- Custom Size -->
          <PrtBtn @click="toggleDrawer('custom')" color="bg-el-7">
            Custom Width Drawer
          </PrtBtn>
          <PrtDrawer
              v-model="drawers.custom"
              width="600px"
              placement="right"
          >
            <div class="p-6">
              <h3 class="text-lg font-medium mb-4">Custom Width Drawer</h3>
              <p class="text-gray-400">
                This drawer has a custom width of 600px.
              </p>
            </div>
          </PrtDrawer>
        </div>
      </section>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import type { DrawerPlacement } from '../../../components/composite/drawer/types'

interface DrawerStates {
  [key: string]: boolean
}

const drawers = reactive<DrawerStates>({
  basic: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  persistent: false,
  custom: false,
})

const placements: DrawerPlacement[] = ['left', 'right', 'top', 'bottom']

const toggleDrawer = (drawer: keyof DrawerStates) => {
  drawers[drawer] = !drawers[drawer]
}
</script>