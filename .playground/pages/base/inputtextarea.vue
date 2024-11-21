<template>
  <div class="min-h-screen bg-neutral-900">

      <header class="mb-8">
        <h1 class="text-3xl font-bold text-white">
          Textarea Component
        </h1>
      </header>

      <ClientOnly>
        <!-- Variants -->
        <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">Variants</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Filled (Default)</label
              >
              <PrtInputTextArea
                  id="filled"
                  v-model="values.filled"
                  variant="filled"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.filled }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Outline</label>
              <PrtInputTextArea
                  id="outline"
                  v-model="values.outline"
                  variant="outline"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.outline }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Minimal</label>
              <PrtInputTextArea
                  id="minimal"
                  v-model="values.minimal"
                  variant="minimal"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.minimal }}
              </div>
            </div>
          </div>
        </section>

        <!-- Edge Styles -->
        <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">
            Edge Styles
          </h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Square (Default)</label
              >
              <PrtInputTextArea
                  id="square"
                  v-model="values.square"
                  edges="square"
                  variant="filled"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.square }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Rounded</label>
              <PrtInputTextArea
                  id="rounded"
                  v-model="values.rounded"
                  edges="rounded"
                  variant="filled"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.rounded }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Circle</label>
              <PrtInputTextArea
                  id="circle"
                  v-model="values.circle"
                  edges="circle"
                  variant="filled"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.circle }}
              </div>
            </div>
          </div>
        </section>

        <!-- Edge & Variant Combinations -->
        <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">
            Edge & Variant Combinations
          </h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Rounded Outline</label
              >
              <PrtInputTextArea
                  id="rounded-outline"
                  v-model="values.roundedOutline"
                  edges="rounded"
                  variant="outline"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.roundedOutline }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Circle Minimal</label
              >
              <PrtInputTextArea
                  id="circle-minimal"
                  v-model="values.circleMinimal"
                  edges="circle"
                  variant="minimal"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.circleMinimal }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Rounded Filled</label
              >
              <PrtInputTextArea
                  id="rounded-filled"
                  v-model="values.roundedFilled"
                  edges="rounded"
                  variant="filled"
                  placeholder="Type something..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.roundedFilled }}
              </div>
            </div>
          </div>
        </section>

        <!-- States -->
        <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">States</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Disabled</label
              >
              <PrtInputTextArea
                  id="disabled"
                  v-model="values.disabled"
                  disabled
                  placeholder="Disabled state..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.disabled }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Error</label>
              <PrtInputTextArea
                  id="error"
                  v-model="values.error"
                  error
                  errorMessage="This is an error message"
                  placeholder="Error state..."
              />

            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400"
              >Read Only</label
              >
              <PrtInputTextArea
                  id="readonly"
                  v-model="values.readonly"
                  readonly
                  placeholder="Read only content..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.readonly }}
              </div>
            </div>
          </div>
        </section>

        <!-- Sizes -->
        <section class="bg-neutral-900 rounded-lg pb-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">Sizes</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Small</label>
              <PrtInputTextArea
                  id="small"
                  v-model="values.small"
                  size="sm"
                  placeholder="Small textarea..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.small }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Base</label>
              <PrtInputTextArea
                  id="base"
                  v-model="values.base"
                  size="base"
                  placeholder="Base textarea..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.base }}
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-400">Large</label>
              <PrtInputTextArea
                  id="large"
                  v-model="values.large"
                  size="lg"
                  placeholder="Large textarea..."
              />
              <div class="text-sm text-gray-300 mt-2">
                Value: {{ values.large }}
              </div>
            </div>
          </div>
        </section>


      </ClientOnly>
    </div>

</template>

<script setup lang="ts">
import { reactive } from "vue";

const values = reactive({
  // Variants
  filled: "",
  outline: "",
  minimal: "",

  // Edge variations
  square: "",
  rounded: "",
  circle: "",

  // Edge & variant combinations
  roundedOutline: "",
  circleMinimal: "",
  roundedFilled: "",

  // States
  disabled: "This textarea is disabled",
  error: "This field has an error",
  readonly: "This content is read-only",

  // Sizes
  small: "",
  base: "",
  large: "",

  // Custom rows
  rows2: "",
  rows6: "",
});
</script>
