<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <header class="space-y-4">


        <div class="space-y-2">
          <h1 class="text-3xl font-bold text-white">Tabs Component</h1>

        </div>
      </header>

      <!-- Line Style (Default) -->
      <section class="space-y-4">
        <h2 class="text-xl font-medium text-white">Line Hover</h2>
        <PrtTabs
            v-model="activeTab1"
            :items="basicTabs"
            bg-style="line"
        />
      </section>

      <!-- Full Background Style -->
      <section class="space-y-4">
        <h2 class="text-xl font-medium text-white">Full Bg Hover </h2>
        <PrtTabs
            v-model="activeTab2"
            :items="basicTabs"
            bg-style="full"
        />
      </section>

      <!-- Disabled Tab -->
      <section class="space-y-4">
        <h2 class="text-xl font-medium text-white">Disabled Tab</h2>
        <PrtTabs
            v-model="activeTab3"
            :items="tabsWithDisabled"
        />
      </section>

      <!-- Different Sizes -->
      <section class="space-y-4">
        <h2 class="text-xl font-medium text-white">Different Sizes</h2>
        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Small</h3>
            <PrtTabs
                v-model="activeTabSm"
                :items="basicTabs"
                size="sm"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Large</h3>
            <PrtTabs
                v-model="activeTabLg"
                :items="basicTabs"
                size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const activeTab1 = ref('account')
const activeTab2 = ref('account')
const activeTab3 = ref('overview')
const activeTabSm = ref('account')
const activeTabLg = ref('account')

const basicTabs = [
  {
    id: 'account',
    label: 'Account',
    content: 'Account settings and preferences'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    content: 'Manage your notification preferences'
  },
  {
    id: 'security',
    label: 'Security',
    content: 'Manage your security settings'
  }
]

const tabsWithDisabled = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'This is an overview of the product features.'
  },
  {
    id: 'features',
    label: 'Features',
    content: 'Detailed list of all available features.'
  },
  {
    id: 'disabled',
    label: 'Disabled',
    content: 'This tab is disabled.',
    disabled: true
  }
]
</script>