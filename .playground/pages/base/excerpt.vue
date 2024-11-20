
<template>
  <div class="min-h-screen bg-neutral-900">

      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">
          Excerpt Component
        </h1>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 gap-8">
        <!-- By Characters Section -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-6 text-white">
            By Characters
          </h2>

          <div class="bg-neutral-900 rounded-lg overflow-hidden">
            <div class="p-4 border-b border-neutral-800">
              <div class="text-gray-400 mb-2">
                Short (20 characters)
              </div>
              <PrtExcerpt
                  :text="sampleText"
                  type="char"
                  :length="20"
                  class="text-white"
              />
            </div>

            <div class="p-4 border-b border-neutral-800">
              <div class="text-gray-400 mb-2">
                Medium (50 characters)
              </div>
              <PrtExcerpt
                  :text="sampleText"
                  type="char"
                  :length="50"
                  class="text-white"
              />
            </div>

            <div class="p-4">
              <div class="text-gray-400 mb-2">
                Long (100 characters)
              </div>
              <PrtExcerpt
                  :text="sampleText"
                  type="char"
                  :length="100"
                  class="text-white"
              />
            </div>
          </div>
        </section>

        <!-- By Words Section -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-6 text-white">
            By Words
          </h2>

          <div class="bg-neutral-900 rounded-lg overflow-hidden">
            <div class="p-4 border-b border-neutral-800">
              <div class="text-gray-400 mb-2">
                Short (3 words)
              </div>
              <PrtExcerpt
                  :text="sampleText"
                  type="word"
                  :length="3"
                  class="text-white"
              />
            </div>

            <div class="p-4 border-b border-neutral-800">
              <div class="text-gray-400 mb-2">
                Medium (5 words)
              </div>
              <PrtExcerpt
                  :text="sampleText"
                  type="word"
                  :length="5"
                  class="text-white"
              />
            </div>

            <div class="p-4">
              <div class="text-gray-400 mb-2">
                Long (10 words)
              </div>
              <PrtExcerpt
                  :text="sampleText"
                  type="word"
                  :length="10"
                  class="text-white"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script setup lang="ts">
const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
</script>
