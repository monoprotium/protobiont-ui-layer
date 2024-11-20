//badge.vue
<template>
  <div class="page-badge">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-white">Badge Component</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Positions Section -->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Positions</h2>
        <div class="flex flex-wrap gap-12 items-center justify-center">
          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge position="top-right" text="New" />
            </div>
            <p class="text-sm text-gray-400">Top Right</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge position="top-left" text="New" />
            </div>
            <p class="text-sm text-gray-400">Top Left</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge position="bottom-right" text="New" />
            </div>
            <p class="text-sm text-gray-400">Bottom Right</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge position="bottom-left" text="New" />
            </div>
            <p class="text-sm text-gray-400">Bottom Left</p>
          </div>
        </div>
      </section>

      <!-- Sizes Section -->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Sizes</h2>
        <div class="flex flex-wrap gap-12 items-end justify-center">
          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge size="sm" text="Small" />
            </div>
            <p class="text-sm text-gray-400">Small</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge size="base" text="Base" />
            </div>
            <p class="text-sm text-gray-400">Base</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge size="lg" text="Large" />
            </div>
            <p class="text-sm text-gray-400">Large</p>
          </div>
        </div>
      </section>

      <!-- Colors Section -->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Colors</h2>
        <div class="flex flex-wrap gap-12 items-center justify-center">
          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge text="Info" bgColor="bg-el-7" />
            </div>
            <p class="text-sm text-gray-400">Information</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge text="Done" bgColor="bg-el-3" />
            </div>
            <p class="text-sm text-gray-400">Success</p>
          </div>

          <div class="space-y-2 text-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Button
              </button>
              <PrtBadge text="Alert" bgColor="bg-el-8" />
            </div>
            <p class="text-sm text-gray-400">Warning</p>
          </div>
        </div>
      </section>

      <!-- Usage Examples Section -->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Usage Examples</h2>
        <div class="space-y-8">
          <!-- Notification Example -->
          <div class="bg-neutral-700/50 rounded-lg p-4">
            <div class="flex items-center gap-4">
              <div class="relative inline-block">
                <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                  Notifications
                </button>
                <PrtBadge text="99+" bgColor="bg-el-8" size="sm" />
              </div>
              <div>
                <p class="text-white text-sm">Notification Badge</p>
                <p class="text-gray-400 text-xs">With counter</p>
              </div>
            </div>
          </div>

          <!-- Multiple Badges Example -->
          <div class="flex flex-wrap gap-8 justify-center">
            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Updates
              </button>
              <PrtBadge text="New" bgColor="bg-el-4" size="sm" />
            </div>

            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Messages
              </button>
              <PrtBadge text="5" bgColor="bg-el-7" size="sm" />
            </div>

            <div class="relative inline-block">
              <button class="bg-neutral-700 text-white px-4 py-2 rounded-lg">
                Alerts
              </button>
              <PrtBadge text="!" bgColor="bg-el-8" size="sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>