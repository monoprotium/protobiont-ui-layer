<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <header>
        <h1 class="text-3xl font-bold text-white mb-2">
          Layout Flex Component
        </h1>

      </header>


      <!-- Three Columns Example -->
      <section class="bg-neutral-800  p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          3 Items Per Row with Medium Gap
        </h2>
        <PrtLayoutFlex :itemsPerRow="3" gap="md"  v-slot="{ itemClass }">
          <div
              v-for="n in 12"
              :key="n"
              :class="[itemClass, 'px-2 mb-4']"
          >
            <div class="p-4 h-16 bg-neutral-900 rounded border border-neutral-700 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800">
              Item {{ n }}
            </div>
          </div>
        </PrtLayoutFlex>
      </section>

      <!-- Four Columns Example -->
      <section class="bg-neutral-800  p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          4 Items Per Row with Large Gap
        </h2>
        <PrtLayoutFlex :itemsPerRow="4" gap="lg"  v-slot="{ itemClass }">
          <div
              v-for="n in 16"
              :key="n"
              :class="[itemClass, 'px-3 mb-6']"
          >
            <div class="p-4 h-16 bg-neutral-900 rounded border border-neutral-700 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800">
              Item {{ n }}
            </div>
          </div>
        </PrtLayoutFlex>
      </section>

      <!-- Two Columns Example -->
      <section class="bg-neutral-800  p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          2 Items Per Row with Small Gap
        </h2>
        <PrtLayoutFlex :itemsPerRow="2" gap="sm"  v-slot="{ itemClass }">
          <div
              v-for="n in 8"
              :key="n"
              :class="[itemClass, 'px-1 mb-2']"
          >
            <div class="p-4 h-16 bg-neutral-900 rounded border border-neutral-700 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800">
              Item {{ n }}
            </div>
          </div>
        </PrtLayoutFlex>
      </section>

      <!-- Six Columns Example -->
      <section class="bg-neutral-800  p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          6 Items Per Row with Extra Large Gap
        </h2>
        <PrtLayoutFlex :itemsPerRow="6" gap="xl"  v-slot="{ itemClass }">

          <div
              v-for="n in 12"
              :key="n"
              :class="[itemClass, 'px-4 mb-8']"
          >
            <div class="p-4 h-16 bg-neutral-900 rounded border border-neutral-700 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800">
              Item {{ n }}
            </div>
          </div>
        </PrtLayoutFlex>
      </section>
    </div>
  </div>
</template>
