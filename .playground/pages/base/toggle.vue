<template>
  <div class="flex min-h-screen flex-col items-center bg-neutral-900 p-8">
    <h1 class="mt-8 mb-12 text-2xl font-semibold text-white">
      Toggle
    </h1>

    <div class="w-full max-w-2xl space-y-12">
      <!-- Default Toggles -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Default Toggles
        </h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Default
            </h3>
            <PrtToggle v-model="isToggleOn" />
            <p class="text-sm text-neutral-500">
              Status: {{ isToggleOn ? "On" : "Off" }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Disabled
            </h3>
            <PrtToggle v-model="isDisabledOn" disabled />
            <p class="text-sm text-neutral-500">
              Status: Disabled ({{ isDisabledOn ? "On" : "Off" }})
            </p>
          </div>
        </div>
      </section>

      <!-- Size Variations -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Size Variations
        </h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Small
            </h3>
            <PrtToggle v-model="isSmallOn" size="sm" />
            <p class="text-sm text-neutral-500">
              Small toggle is
              {{ isSmallOn ? "enabled" : "disabled" }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Base
            </h3>
            <PrtToggle v-model="isBaseOn" />
            <p class="text-sm text-neutral-500">
              Base toggle is
              {{ isBaseOn ? "enabled" : "disabled" }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Large
            </h3>
            <PrtToggle v-model="isLargeOn" size="lg" />
            <p class="text-sm text-neutral-500">
              Large toggle is
              {{ isLargeOn ? "enabled" : "disabled" }}
            </p>
          </div>
        </div>
      </section>

      <!-- Color Variations -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Color Variations
        </h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Success
            </h3>
            <PrtToggle v-model="isSuccessOn" bg-color="bg-el-3" />
            <p class="text-sm text-neutral-500">
              Success mode is
              {{ isSuccessOn ? "active" : "inactive" }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Warning
            </h3>
            <PrtToggle v-model="isWarningOn" bg-color="bg-el-9" />
            <p class="text-sm text-neutral-500">
              Warning mode is
              {{ isWarningOn ? "active" : "inactive" }}
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Danger
            </h3>
            <PrtToggle v-model="isDangerOn" bg-color="bg-el-8" />
            <p class="text-sm text-neutral-500">
              Danger mode is
              {{ isDangerOn ? "active" : "inactive" }}
            </p>
          </div>
        </div>
      </section>

      <!-- Interactive Examples -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Interactive Examples
        </h2>
        <div class="grid grid-cols-2 gap-8">
          <!-- Form Example -->
          <div class="space-y-4">
            <h3 class="text-sm font-medium text-neutral-400">
              Form Integration
            </h3>
            <div class="flex items-center space-x-3">
              <PrtToggle v-model="notificationsEnabled" />
              <label class="text-sm text-neutral-300"
              >Enable notifications</label
              >
            </div>
            <p class="text-sm text-neutral-500">
              Notifications are
              {{ notificationsEnabled ? "enabled" : "disabled" }}
            </p>
          </div>

          <!-- Multiple Settings -->
          <div class="space-y-4">
            <h3 class="text-sm font-medium text-neutral-400">
              Multiple Settings
            </h3>
            <div class="space-y-3">
              <div class="space-y-2">
                <div class="flex items-center space-x-3">
                  <PrtToggle
                      v-model="settings.emails"
                      bg-color="bg-el-4"
                  />
                  <label class="text-sm text-neutral-300"
                  >Email updates</label
                  >
                </div>
                <p class="text-sm text-neutral-500">
                  Email updates are
                  {{
                    settings.emails ? "enabled" : "disabled"
                  }}
                </p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center space-x-3">
                  <PrtToggle
                      v-model="settings.newsletter"
                      bg-color="bg-el-5"
                  />
                  <label class="text-sm text-neutral-300"
                  >Newsletter</label
                  >
                </div>
                <p class="text-sm text-neutral-500">
                  Newsletter is
                  {{
                    settings.newsletter
                        ? "enabled"
                        : "disabled"
                  }}
                </p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center space-x-3">
                  <PrtToggle
                      v-model="settings.cookies"
                      bg-color="bg-el-6"
                  />
                  <label class="text-sm text-neutral-300"
                  >Cookies</label
                  >
                </div>
                <p class="text-sm text-neutral-500">
                  Cookies are
                  {{
                    settings.cookies ? "enabled" : "disabled"
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// Basic toggles
const isToggleOn = ref(false);
const isDisabledOn = ref(true);

// Size variations
const isSmallOn = ref(false);
const isBaseOn = ref(false);
const isLargeOn = ref(false);

// Color variations
const isSuccessOn = ref(false);
const isWarningOn = ref(false);
const isDangerOn = ref(false);

// Interactive examples
const notificationsEnabled = ref(false);
const settings = reactive({
  emails: false,
  newsletter: false,
  cookies: false,
});
</script>
