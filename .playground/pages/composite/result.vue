<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <header class="space-y-4">

        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Result Component</h1>
        </div>
      </header>

      <!-- Basic Examples -->
      <section class="space-y-6">
        <h2 class="text-xl font-medium">Basic Usage</h2>
        <div class="space-y-4">
          <PrtResult
              status="success"
              message="Operation completed successfully."
          />
          <PrtResult
              status="error"
              message="An error occurred while processing your request."
          />
          <PrtResult
              status="warning"
              message="Some features may be unavailable at this time."
          />
          <PrtResult
              status="info"
              message="Your session will expire in 5 minutes."
          />
        </div>
      </section>

      <!-- Variants -->
      <section class="space-y-6">
        <h2 class="text-xl font-medium">Variants</h2>

        <div class="space-y-8">
          <!-- Default -->
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Default</h3>
            <div class="space-y-4">
              <PrtResult
                  v-for="status in statuses"
                  :key="status"
                  :status="status"
                  :message="`This is a ${status} message.`"
              />
            </div>
          </div>

          <!-- Bordered -->
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Bordered</h3>
            <div class="space-y-4">
              <PrtResult
                  v-for="status in statuses"
                  :key="status"
                  variant="bordered"
                  :status="status"
                  :message="`This is a ${status} message with border.`"
              />
            </div>
          </div>

          <!-- Filled -->
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Filled</h3>
            <div class="space-y-4">
              <PrtResult
                  v-for="status in statuses"
                  :key="status"
                  variant="filled"
                  :status="status"
                  :message="`This is a ${status} message with filled background.`"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- With Dismiss -->
      <section class="space-y-6">
        <h2 class="text-xl font-medium">Dismissible</h2>
        <div class="space-y-4">
          <template v-for="status in statuses" :key="status">
            <PrtResult
                v-if="!dismissed[status]"
                :status="status"
                :message="`This is a dismissible ${status} message.`"
                dismissible
                @dismiss="handleDismiss(status)"
            />
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ResultStatus } from '../../../components/composite/result/types'

const statuses: ResultStatus[] = ['success', 'error', 'warning', 'info']
const dismissed = reactive<Record<ResultStatus, boolean>>({
  success: false,
  error: false,
  warning: false,
  info: false
})

function handleDismiss(status: ResultStatus) {
  dismissed[status] = true
  console.log(`Dismissed ${status} message`)
}
</script>