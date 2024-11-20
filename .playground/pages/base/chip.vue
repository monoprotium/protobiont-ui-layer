<template>
  <div class="min-h-screen bg-neutral-900 ">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Chip Component</h1>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 gap-8">
        <!-- Solid Variant -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-8 text-white">Solid Variant</h2>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <PrtChip size="lg" variant="solid" color="bg-el-6" textColor="text-white">
                Large Chip
              </PrtChip>
              <PrtChip variant="solid" color="bg-el-6" textColor="text-white">
                Base Chip
              </PrtChip>
              <PrtChip size="sm" variant="solid" color="bg-el-6" textColor="text-white">
                Small Chip
              </PrtChip>
            </div>
          </div>
        </section>

        <!-- Outline Variant -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-8 text-white">Outline Variant</h2>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <PrtChip size="lg" variant="outline" color="bg-el-6" textColor="text-white">
                Large Chip
              </PrtChip>
              <PrtChip variant="outline" color="bg-el-6" textColor="text-white">
                Base Chip
              </PrtChip>
              <PrtChip size="sm" variant="outline" color="bg-el-6" textColor="text-white">
                Small Chip
              </PrtChip>
            </div>
          </div>
        </section>

        <!-- Ghost Variant -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-8 text-white">Ghost Variant</h2>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <PrtChip size="lg" variant="ghost" color="bg-el-6" textColor="text-white">
                Large Chip
              </PrtChip>
              <PrtChip variant="ghost" color="bg-el-6" textColor="text-white">
                Base Chip
              </PrtChip>
              <PrtChip size="sm" variant="ghost" color="bg-el-6" textColor="text-white">
                Small Chip
              </PrtChip>
            </div>
          </div>
        </section>

        <!-- Colors Section -->
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-8 text-white">Colors</h2>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <PrtChip variant="solid" color="bg-el-1" textColor="text-white">Default</PrtChip>
              <PrtChip variant="solid" color="bg-el-4" textColor="text-white">Primary</PrtChip>
              <PrtChip variant="solid" color="bg-el-6" textColor="text-white">Success</PrtChip>
              <PrtChip variant="solid" color="bg-el-8" textColor="text-white">Danger</PrtChip>
            </div>

            <div class="flex items-center gap-4">
              <PrtChip variant="outline" color="bg-el-1" textColor="text-white">Default</PrtChip>
              <PrtChip variant="outline" color="bg-el-4" textColor="text-white">Primary</PrtChip>
              <PrtChip variant="outline" color="bg-el-6" textColor="text-white">Success</PrtChip>
              <PrtChip variant="outline" color="bg-el-8" textColor="text-white">Danger</PrtChip>
            </div>

            <div class="flex items-center gap-4">
              <PrtChip variant="ghost" color="bg-el-1" textColor="text-white">Default</PrtChip>
              <PrtChip variant="ghost" color="bg-el-4" textColor="text-white">Primary</PrtChip>
              <PrtChip variant="ghost" color="bg-el-6" textColor="text-white">Success</PrtChip>
              <PrtChip variant="ghost" color="bg-el-8" textColor="text-white">Danger</PrtChip>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>

