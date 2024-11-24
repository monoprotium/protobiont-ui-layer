<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="mx-auto max-w-4xl">
      <!-- Demo Container -->
      <section class="bg-neutral-800 rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Sticky Example</h2>


        <!-- Sticky Element -->
        <PrtSticky class="bg-neutral-800">
          <div class="p-4 bg-neutral-900 rounded-lg shadow-lg">
            <h3 class="text-lg font-semibold mb-2">I'm a Sticky Header</h3>
            <p class="text-sm">Keep scrolling to see me stick to the top!</p>
          </div>
        </PrtSticky>

        <!-- Scrollable Content -->
        <div class="space-y-4 mt-8">
          <template v-for="n in 50" :key="n">
            <p class="text-gray-300">
              Paragraph {{ n }} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

