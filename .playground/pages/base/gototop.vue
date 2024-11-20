<template>
  <div class="min-h-screen bg-neutral-900 ">

      <header class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">
          Go To Top
        </h1>
      </header>

      <section class="bg-neutral-800 rounded-lg p-6 shadow-lg">
        <div
            class="bg-neutral-900 rounded-lg overflow-hidden divide-y divide-neutral-800"
        >
          <div v-for="n in 50" :key="n" class="p-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam non urna eros.
          </div>
        </div>
      </section>

      <!-- Go To Top Button -->
      <PrtGoToTop
          size="lg"
          color="bg-indigo-600"
          textColor="text-white"
      />
    </div>

</template>

