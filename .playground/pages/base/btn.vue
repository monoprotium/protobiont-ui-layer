<template>
  <div class="min-h-screen bg-neutral-900 ">

      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Button Component</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Variants Section -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Variants</h2>
          <div class="space-y-4">
            <!-- Solid Variants -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Solid</h3>
              <div class="flex flex-wrap gap-2">
                <PrtBtn variant="solid" color="bg-el-6">Default</PrtBtn>
                <PrtBtn variant="solid" color="bg-el-7">Primary</PrtBtn>
                <PrtBtn variant="solid" color="bg-el-8">Danger</PrtBtn>
              </div>
            </div>
            <!-- Outline Variants -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Outline</h3>
              <div class="flex flex-wrap gap-2">
                <PrtBtn variant="outline" color="bg-el-6">Default</PrtBtn>
                <PrtBtn variant="outline" color="bg-el-7">Primary</PrtBtn>
                <PrtBtn variant="outline" color="bg-el-8">Danger</PrtBtn>
              </div>
            </div>
            <!-- Ghost Variants -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Ghost</h3>
              <div class="flex flex-wrap gap-2">
                <PrtBtn variant="ghost" color="bg-el-6">Default</PrtBtn>
                <PrtBtn variant="ghost" color="bg-el-7">Primary</PrtBtn>
                <PrtBtn variant="ghost" color="bg-el-8">Danger</PrtBtn>
              </div>
            </div>
          </div>
        </section>

        <!-- Sizes Section -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Sizes</h2>
          <div class="flex items-end gap-4">
            <PrtBtn size="lg" color="bg-el-6">Large</PrtBtn>
            <PrtBtn color="bg-el-6">Default</PrtBtn>
            <PrtBtn size="sm" color="bg-el-6">Small</PrtBtn>
          </div>
          <!-- Square Sizes -->
          <div class="mt-4">
            <h3 class="text-sm font-medium text-gray-400 mb-2">Square</h3>
            <div class="flex items-end gap-4">
              <PrtBtn size="lg" :square="true" color="bg-el-6">L</PrtBtn>
              <PrtBtn :square="true" color="bg-el-6">D</PrtBtn>
              <PrtBtn size="sm" :square="true" color="bg-el-6">S</PrtBtn>
            </div>
          </div>
        </section>


        <!-- States Section -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">States</h2>
          <div class="space-y-4">
            <!-- Loading State -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Loading</h3>
              <div class="flex flex-wrap gap-2">
                <PrtBtn :loading="true" color="bg-el-6">Loading</PrtBtn>
              </div>
            </div>
            <!-- Disabled State -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Disabled</h3>
              <div class="flex flex-wrap gap-2">
                <PrtBtn :disabled="true" color="bg-el-6">Disabled</PrtBtn>
              </div>
            </div>
          </div>
        </section>


        <!-- Special Cases Section -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Special Cases</h2>
          <div class="space-y-4">
            <!-- Link Button -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Link Button</h3>
              <PrtBtn tag="a" href="https://example.com" color="bg-el-6">Link Button</PrtBtn>
            </div>
            <!-- Full Width -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Full Width</h3>
              <PrtBtn :fullWidth="true" color="bg-el-6">Full Width Button</PrtBtn>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>

