<template>
  <div class="min-h-screen bg-neutral-900 pt-8">


      <div class="mb-8 flex items-center gap-2">
        <h1 class="text-xl font-semibold text-white mb-6">Button Group</h1>
      </div>

      <!-- Main content -->
      <div class="space-y-8">
        <!-- Basic Usage -->
        <section>
          <h2 class="text-xl font-semibold text-white mb-4">Basic Usage</h2>
          <div class="space-y-4">
            <PrtBtnGroup
                v-model="basicSelected"
                :buttons="['Option 1', 'Option 2', 'Option 3']"
            />
            <div class="text-sm text-gray-400">
              Selected: <span class="text-white">{{ basicSelected || 'None' }}</span>
            </div>
          </div>
        </section>

        <!-- Variants -->
        <section>
          <h2 class="text-xl font-semibold text-white mb-4">Variants</h2>
          <div class="space-y-6">
            <!-- Solid -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Solid</h3>
              <PrtBtnGroup
                  v-model="solidSelected"
                  :buttons="['Solid 1', 'Solid 2', 'Solid 3']"
                  variant="solid"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ solidSelected || 'None' }}</span>
              </div>
            </div>

            <!-- Outline -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Outline</h3>
              <PrtBtnGroup
                  v-model="outlineSelected"
                  :buttons="['Outline 1', 'Outline 2', 'Outline 3']"
                  variant="outline"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ outlineSelected || 'None' }}</span>
              </div>
            </div>

            <!-- Ghost -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Ghost</h3>
              <PrtBtnGroup
                  v-model="ghostSelected"
                  :buttons="['Ghost 1', 'Ghost 2', 'Ghost 3']"
                  variant="ghost"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ ghostSelected || 'None' }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Sizes -->
        <section>
          <h2 class="text-xl font-semibold text-white mb-4">Sizes</h2>
          <div class="space-y-6">
            <!-- Small -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Small</h3>
              <PrtBtnGroup
                  v-model="smallSelected"
                  :buttons="['S1', 'S2', 'S3']"
                  size="sm"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ smallSelected || 'None' }}</span>
              </div>
            </div>

            <!-- Base -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Base</h3>
              <PrtBtnGroup
                  v-model="baseSelected"
                  :buttons="['B1', 'B2', 'B3']"
                  size="base"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ baseSelected || 'None' }}</span>
              </div>
            </div>

            <!-- Large -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Large</h3>
              <PrtBtnGroup
                  v-model="largeSelected"
                  :buttons="['L1', 'L2', 'L3']"
                  size="lg"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ largeSelected || 'None' }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Custom Colors -->
        <section>
          <h2 class="text-xl font-semibold text-white mb-4">Custom Colors</h2>
          <div class="space-y-6">
            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Custom Background</h3>
              <PrtBtnGroup
                  v-model="colorCustom1"
                  :buttons="['One', 'Two', 'Three']"
                  defaultBg="bg-neutral-700"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ colorCustom1 || 'None' }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <h3 class="text-sm font-medium text-gray-400">Custom Active</h3>
              <PrtBtnGroup
                  v-model="colorCustom2"
                  :buttons="['One', 'Two', 'Three']"
                  bgActive="bg-el-4"
              />
              <div class="text-sm text-gray-400">
                Selected: <span class="text-white">{{ colorCustom2 || 'None' }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Real World Example -->
        <section>
          <h2 class="text-xl font-semibold text-white mb-4">Device Selector Example</h2>
          <div class="space-y-4">
            <PrtBtnGroup
                v-model="selectedDevice"
                :buttons="['PC', 'Laptop', 'Tablet', 'Smartphone']"
                defaultBg="bg-neutral-700"
                bgActive="bg-el-8"
            />
            <div class="text-sm text-gray-400">
              Selected Device: <span class="text-white">{{ selectedDevice || 'None' }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>

<script setup lang="ts">
// Selected values for each example
const basicSelected = ref('')
const solidSelected = ref('')
const outlineSelected = ref('')
const ghostSelected = ref('')
const smallSelected = ref('')
const baseSelected = ref('')
const largeSelected = ref('')
const colorCustom1 = ref('')
const colorCustom2 = ref('')
const selectedDevice = ref('')
</script>