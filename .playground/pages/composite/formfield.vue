<template>
  <div class="min-h-screen bg-neutral-900">

    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-white">Form Field</h1>
    </div>

    <!-- Demo Sections -->
    <div class="space-y-8">
      <!-- Basic Fields Demo -->
      <section class="">
        <h2 class="text-xl font-semibold mb-6 text-white">Basic Fields</h2>
        <div class="flex flex-col gap-6">
          <!-- Text Input with preview -->
          <div>
            <PrtFormField
                type="text"
                id="textField"
                label="Text Input"
                v-model="textValue"
                placeholder="Type something..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Value: <span class="text-white">{{ textValue || 'No text entered' }}</span>
            </div>
          </div>

          <!-- Textarea with preview -->
          <div>
            <PrtFormField
                type="textarea"
                id="textareaField"
                label="Textarea Input"
                v-model="textareaValue"
                placeholder="Type your message..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Value: <span class="text-white">{{ textareaValue || 'No message entered' }}</span>
            </div>
          </div>
        </div>
      </section>


      <!-- Variants Demo -->
      <section class="">
        <h2 class="text-xl font-semibold mb-6 text-white">Field Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Filled variant -->
          <div>
            <PrtFormField
                type="text"
                id="filledField"
                label="Filled Input"
                variant="filled"
                v-model="filledValue"
                placeholder="With background..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Solid background with hover state
            </div>
          </div>

          <!-- Outline variant -->
          <div>
            <PrtFormField
                type="text"
                id="outlineField"
                label="Outline Input"
                variant="outline"
                v-model="outlineValue"
                placeholder="With border..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Transparent with border
            </div>
          </div>

          <!-- Minimal variant -->
          <div>
            <PrtFormField
                type="text"
                id="minimalField"
                label="Minimal Input"
                variant="minimal"
                v-model="minimalValue"
                placeholder="Bottom border only..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Subtle bottom border
            </div>
          </div>
        </div>
      </section>

      <!-- States Demo -->
      <section class="">
        <h2 class="text-xl font-semibold mb-6 text-white">Field States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Error state with preview -->
          <div>
            <PrtFormField
                type="text"
                id="errorField"
                label="Error State"
                v-model="errorValue"
                error="This field has an error"
                placeholder="Error state..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Value: <span class="text-white">{{ errorValue || 'No text entered' }}</span>
            </div>
          </div>

          <!-- Disabled state -->
          <div>
            <PrtFormField
                type="text"
                id="disabledField"
                label="Disabled State"
                v-model="disabledValue"
                disabled
                placeholder="Disabled input..."
            />
            <div class="mt-2 text-sm text-neutral-400">
              Value: <span class="text-white">{{ disabledValue }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const textValue = ref('')
const textareaValue = ref('')
const filledValue = ref('')
const outlineValue = ref('')
const errorValue = ref('')
const disabledValue = ref('This field is disabled')
</script>