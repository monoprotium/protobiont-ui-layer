<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Demo Header -->
      <header class="space-y-4">

        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Newsletter Bar Component</h1>
        </div>
      </header>

      <!-- Basic Example -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium">Basic Usage</h2>
        <div class="bg-neutral-950 p-6">
          <PrtNewsletterBar
              @subscribe="handleSubscribe"
              button-color="bg-el-7"
          />
        </div>
      </section>

      <!-- Custom Example -->
      <section class="space-y-4">
        <h2 class="text-lg font-medium">Custom Style</h2>
        <div class="bg-neutral-950 p-6">
          <PrtNewsletterBar
              variant="outline"
              button-text="Join Now"
              button-color="bg-el-4"
              @subscribe="handleSubscribe"
          >
            <template #message>
              <h3 class="text-lg font-medium">Lorem ipsum</h3>
              <p class="text-neutral-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </template>
          </PrtNewsletterBar>
        </div>
      </section>

      <!-- Subscription Log -->
      <section
          v-if="subscriptions.length"
          class="space-y-4"
      >
        <h2 class="text-lg font-medium">Recent Subscriptions</h2>
        <div class="bg-neutral-800 p-4 space-y-2">
          <div
              v-for="(email, index) in subscriptions"
              :key="index"
              class="text-sm text-neutral-400"
          >
            Subscribed: {{ email }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const subscriptions = ref<string[]>([])

function handleSubscribe(email: string) {
  subscriptions.value.unshift(email)
}
</script>