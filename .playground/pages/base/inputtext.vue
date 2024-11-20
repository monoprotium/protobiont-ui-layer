<template>
  <div class="min-h-screen bg-neutral-900 ">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white">
        Input Text
      </h1>
    </header>

    <ClientOnly>
      <!-- Variants -->
      <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
        <h2 class="text-xl font-semibold text-white">Variants</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Filled (Default)</label>
            <PrtInputText
                id="filled"
                v-model="values.filled"
                variant="filled"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.filled }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Outline</label>
            <PrtInputText
                id="outline"
                v-model="values.outline"
                variant="outline"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.outline }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Minimal</label>
            <PrtInputText
                id="minimal"
                v-model="values.minimal"
                variant="minimal"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.minimal }}</p>
          </div>
        </div>
      </section>

      <!-- Edge Styles -->
      <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
        <h2 class="text-xl font-semibold text-white">Edge Styles</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Square (Default)</label>
            <PrtInputText
                id="square"
                v-model="values.square"
                edges="square"
                variant="filled"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.square }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Rounded</label>
            <PrtInputText
                id="rounded"
                v-model="values.rounded"
                edges="rounded"
                variant="filled"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.rounded }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Circle</label>
            <PrtInputText
                id="circle"
                v-model="values.circle"
                edges="circle"
                variant="filled"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.circle }}</p>
          </div>
        </div>
      </section>

      <!-- Edge & Variant Combinations -->
      <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
        <h2 class="text-xl font-semibold text-white">Edge & Variant Combinations</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Rounded Outline</label>
            <PrtInputText
                id="rounded-outline"
                v-model="values.roundedOutline"
                edges="rounded"
                variant="outline"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.roundedOutline }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Circle Minimal</label>
            <PrtInputText
                id="circle-minimal"
                v-model="values.circleMinimal"
                edges="circle"
                variant="minimal"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.circleMinimal }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Rounded Filled</label>
            <PrtInputText
                id="rounded-filled"
                v-model="values.roundedFilled"
                edges="rounded"
                variant="filled"
                placeholder="Type something..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.roundedFilled }}</p>
          </div>
        </div>
      </section>

      <!-- States -->
      <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
        <h2 class="text-xl font-semibold text-white">States</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Disabled</label>
            <PrtInputText
                id="disabled"
                v-model="values.disabled"
                disabled
                placeholder="Disabled state..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.disabled }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Error</label>
            <PrtInputText
                id="error"
                v-model="values.error"
                error
                errorMessage="This is an error message"
                placeholder="Error state..."
            />

          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Read Only</label>
            <PrtInputText
                id="readonly"
                v-model="values.readonly"
                readonly
                placeholder="Read only content..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.readonly }}</p>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
        <h2 class="text-xl font-semibold text-white">Sizes</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Small</label>
            <PrtInputText
                id="small"
                v-model="values.small"
                size="sm"
                placeholder="Small input..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.small }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Base</label>
            <PrtInputText
                id="base"
                v-model="values.base"
                size="base"
                placeholder="Base input..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.base }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Large</label>
            <PrtInputText
                id="large"
                v-model="values.large"
                size="lg"
                placeholder="Large input..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.large }}</p>
          </div>
        </div>
      </section>

      <!-- Input Types -->
      <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
        <h2 class="text-xl font-semibold text-white">Input Types</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Text</label>
            <PrtInputText
                id="type-text"
                v-model="values.typeText"
                type="text"
                placeholder="Text input..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.typeText }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Number</label>
            <PrtInputText
                id="type-number"
                v-model="values.typeNumber"
                type="number"
                placeholder="Number input..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.typeNumber }}</p>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Password</label>
            <PrtInputText
                id="type-password"
                v-model="values.typePassword"
                type="password"
                placeholder="Password input..."
            />
            <p class="text-sm text-gray-200">Value: {{ values.typePassword }}</p>
          </div>
        </div>
      </section>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const values = ref({
  filled: "",
  outline: "",
  minimal: "",
  square: "",
  rounded: "",
  circle: "",
  roundedOutline: "",
  circleMinimal: "",
  roundedFilled: "",
  disabled: "This input is disabled",
  error: "This field has an error",
  readonly: "This content is read-only",
  small: "",
  base: "",
  large: "",
  typeText: "",
  typeNumber: 0,
  typePassword: "",
});
</script>
