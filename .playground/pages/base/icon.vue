<template>
  <div class="min-h-screen bg-neutral-900" >

    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">
        Icon
      </h1>
    </header>

      <!-- Main content -->
      <div class="space-y-8">
        <!-- Icon Sizes -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-white mb-4">
            Icon Sizes
          </h2>
          <div class="flex flex-wrap items-end gap-8">
            <div
                v-for="size in sizes"
                :key="size"
                class="text-center"
            >
              <PrtIcon
                  :size="size"
                  iconComponent="accept"
                  color="#16C55E"
              />
              <span class="block mt-2 text-sm text-gray-400">{{
                  size
                }}</span>
            </div>
          </div>
        </section>

        <!-- Icon Colors -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-white mb-4">
            Icon Colors
          </h2>
          <div class="flex flex-wrap gap-8">
            <div
                v-for="(color, name) in colors"
                :key="name"
                class="text-center"
            >
              <PrtIcon
                  size="lg"
                  iconComponent="accept"
                  :color="color"
              />
              <span class="block mt-2 text-sm text-gray-400">{{
                  name
                }}</span>
            </div>
          </div>
        </section>

        <!-- Icons with Buttons -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-white mb-4">
            Icons with Buttons
          </h2>
          <div class="flex flex-wrap gap-4">
            <!-- Prepend Icon -->
            <PrtBtn color="bg-el-6">
              <template #prepend>
                <PrtIcon
                    class="mr-2"
                    size="base"
                    iconComponent="accept"
                    color="white"
                />
              </template>
              Accept
            </PrtBtn>

            <!-- Append Icon -->
            <PrtBtn color="bg-el-8">
              Decline
              <template #append>
                <PrtIcon
                    class="ml-2"
                    size="base"
                    iconComponent="x"
                    color="white"
                />
              </template>
            </PrtBtn>

            <!-- Icon Only Button -->
            <PrtBtn :square="true" color="bg-el-7">
              <PrtIcon
                  size="base"
                  iconComponent="accept"
                  color="white"
              />
            </PrtBtn>
          </div>
        </section>

        <!-- Sample Icons -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-white mb-4">
            Sample Icons
          </h2>
          <div
              class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            <div
                v-for="icon in icons"
                :key="icon"
                class="flex flex-col items-center p-4 bg-neutral-700 rounded-lg"
            >
              <PrtIcon
                  size="base"
                  :iconComponent="icon"
                  color="white"
              />
              <span class="mt-2 text-sm text-gray-400">{{
                  icon
                }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>

<script setup lang="ts">
// Icons data
const sizes = ["xs", "sm", "base", "lg", "xl"] as const;

const colors = {
  Success: "#16C55E",
  Primary: "#3B82F6",
  Danger: "#EF4444",
  Warning: "#F59E0B",
};

const icons = [
  "accept",
  "add-circ",
  "add-rect",
  "arrow-r",
  "audio",
  "chat-plus",
  "clipboard-dash",
  "clipboard",
];
</script>
