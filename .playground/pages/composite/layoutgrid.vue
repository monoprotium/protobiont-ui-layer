<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <header>
        <h1 class="text-3xl font-bold text-white mb-2">
          Layout Grid Component Demo
        </h1>
      </header>

      <!-- Three Columns Example -->
      <section class="bg-neutral-800 rounded-lg p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          3 Columns with Medium Gap
        </h2>
        <PrtLayoutGrid
            :cols="3"
            gap="md"
            :responsive="false"
        >
          <div
              v-for="n in 12"
              :key="n"
              class="h-16 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800"
          >
            Item {{ n }}
          </div>
        </PrtLayoutGrid>
      </section>

      <!-- Four Columns Example -->
      <section class="bg-neutral-800 rounded-lg p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          4 Columns with Large Gap
        </h2>
        <PrtLayoutGrid
            :cols="4"
            gap="lg"
            :responsive="false"
        >
          <div
              v-for="n in 8"
              :key="n"
              class="h-16 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800"
          >
            Item {{ n }}
          </div>
        </PrtLayoutGrid>
      </section>

      <!-- Two Columns Example -->
      <section class="bg-neutral-800 rounded-lg p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          2 Columns with Small Gap
        </h2>
        <PrtLayoutGrid
            :cols="2"
            gap="sm"
            :responsive="false"
        >
          <div
              v-for="n in 8"
              :key="n"
              class="h-16 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800"
          >
            Item {{ n }}
          </div>
        </PrtLayoutGrid>
      </section>

      <!-- Different Heights Example -->
      <section class="bg-neutral-800 rounded-lg p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          Different Heights Example
        </h2>
        <PrtLayoutGrid
            :cols="3"
            gap="md"
            :responsive="false"
        >
          <div class="h-32 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm">
            Tall Item
          </div>
          <div class="h-16 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm">
            Short Item
          </div>
          <div class="h-24 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm">
            Medium Item
          </div>
        </PrtLayoutGrid>
      </section>

      <!-- Responsive Example -->
      <section class="bg-neutral-800 rounded-lg p-6 shadow-lg">
        <h2 class="text-xl font-semibold text-white mb-4">
          Responsive Grid
        </h2>
        <PrtLayoutGrid
            :cols="3"
            gap="md"
            :responsive="true"
        >
          <div
              v-for="n in 6"
              :key="n"
              class="h-16 border border-gray-700 rounded bg-neutral-900 flex items-center justify-center text-sm transition-colors hover:bg-neutral-800"
          >
            Item {{ n }}
          </div>
        </PrtLayoutGrid>
      </section>
    </div>
  </div>
</template>