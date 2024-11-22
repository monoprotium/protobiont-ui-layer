<template>
  <div class="min-h-screen bg-neutral-900  pb-36 text-gray-100">

      <header class="text-center">
        <h1 class="text-3xl font-bold mb-4">Select Component Demo</h1>
      </header>

      <!-- Basic Variants -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Basic Variants</h2>
        <div class="grid grid-cols-3 gap-6">
          <!-- Solid Variant -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Solid Variant</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected1 }}
            </div>
            <PrtSelect
                v-model="selected1"
                :options="basicOptions"
                variant="solid"
            />
          </div>

          <!-- Outline Variant -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Outline Variant</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected2 }}
            </div>
            <PrtSelect
                v-model="selected2"
                :options="basicOptions"
                variant="outline"
            />
          </div>

          <!-- Ghost Variant -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Ghost Variant</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected3 }}
            </div>
            <PrtSelect
                v-model="selected3"
                :options="basicOptions"
                variant="ghost"
            />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Sizes</h2>
        <div class="grid grid-cols-3 gap-6">
          <!-- Small -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Small</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected4 }}
            </div>
            <PrtSelect
                v-model="selected4"
                :options="basicOptions"
                size="sm"
            />
          </div>

          <!-- Base -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Base</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected5 }}
            </div>
            <PrtSelect
                v-model="selected5"
                :options="basicOptions"
                size="base"
            />
          </div>

          <!-- Large -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Large</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected6 }}
            </div>
            <PrtSelect
                v-model="selected6"
                :options="basicOptions"
                size="lg"
            />
          </div>
        </div>
      </section>

      <!-- Edge Styles -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Edge Styles</h2>
        <div class="grid grid-cols-3 gap-6">
          <!-- Square -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Square Edges</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected7 }}
            </div>
            <PrtSelect
                v-model="selected7"
                :options="basicOptions"
                edges="square"
            />
          </div>

          <!-- Rounded -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Rounded Edges</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected8 }}
            </div>
            <PrtSelect
                v-model="selected8"
                :options="basicOptions"
                edges="rounded"
            />
          </div>

          <!-- Pill -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Pill Edges</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected9 }}
            </div>
            <PrtSelect
                v-model="selected9"
                :options="basicOptions"
                edges="pill"
            />
          </div>
        </div>
      </section>

      <!-- Advanced Features -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Advanced Features</h2>
        <div class="grid grid-cols-2 gap-6">
          <!-- Searchable -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Searchable</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected10 }}
            </div>
            <PrtSelect
                v-model="selected10"
                :options="countryOptions"
                searchable
            />
          </div>

          <!-- Clearable -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Clearable</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected11 }}
            </div>
            <PrtSelect
                v-model="selected11"
                :options="basicOptions"
                clearable
            />
          </div>

          <!-- Disabled -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Disabled</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected12 }}
            </div>
            <PrtSelect
                v-model="selected12"
                :options="basicOptions"
                disabled
            />
          </div>

          <!-- Loading State -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400">Loading</label>
            <div class="text-sm text-gray-300">
              Selected: {{ selected13 }}
            </div>
            <PrtSelect
                v-model="selected13"
                :options="basicOptions"
                loading
            />
          </div>
        </div>
      </section>

      <!-- Color Variants -->
      <section class="space-y-4 pb-8">
        <h2 class="text-xl font-semibold mb-6">Color Variants</h2>
        <div class="grid grid-cols-3 gap-6">
          <!-- Success -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Success (bg-green-700)</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected14 }}
            </div>
            <PrtSelect
                v-model="selected14"
                :options="basicOptions"
                color="bg-green-700"
            />
          </div>

          <!-- Warning -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Warning (el-8)</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected15 }}
            </div>
            <PrtSelect
                v-model="selected15"
                :options="basicOptions"
                color="bg-el-8"
            />
          </div>

          <!-- Creative -->
          <div class="space-y-2">
            <label class="text-sm text-gray-400"
            >Creative (bg-purple-700)</label
            >
            <div class="text-sm text-gray-300">
              Selected: {{ selected16 }}
            </div>
            <PrtSelect
                v-model="selected16"
                :options="basicOptions"
                color="bg-purple-700"
            />
          </div>
        </div>
      </section>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import type { SelectOption } from "../../../components/base/select/types";

// Basic options
const basicOptions: SelectOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

// Extended options for searchable
const countryOptions: SelectOption[] = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "France", value: "fr" },
  { label: "Germany", value: "de" },
  { label: "Italy", value: "it" },
  { label: "Spain", value: "es" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
  { label: "Japan", value: "jp" },
  { label: "Brazil", value: "br" },
];

// Selected values
const selected1 = ref("");
const selected2 = ref("");
const selected3 = ref("");
const selected4 = ref("");
const selected5 = ref("");
const selected6 = ref("");
const selected7 = ref("");
const selected8 = ref("");
const selected9 = ref("");
const selected10 = ref("");
const selected11 = ref("");
const selected12 = ref("");
const selected13 = ref("");
const selected14 = ref("");
const selected15 = ref("");
const selected16 = ref("");
</script>
