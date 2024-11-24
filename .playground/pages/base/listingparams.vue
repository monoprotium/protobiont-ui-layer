<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-6">

      <header class="space-y-2">
        <h1 class="text-3xl font-bold">Listing Params</h1>
      </header>


      <section class="bg-neutral-800 p-6">
        <div >
          <PrtListingParams :params="specs" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">


const specs = [
  { name: 'Processor', value: '3.1 GHz Intel Core i7' },
  { name: 'RAM', value: '16 GB DDR4' },
  { name: 'Storage', value: '512 GB SSD' },
  { name: 'Graphics', value: 'NVIDIA GTX 1050 Ti 4GB' },
  { name: 'Display', value: '15.6" 4K UHD (3840 x 2160)' },
  { name: 'Battery', value: '6-cell Li-ion (97 WHr)' }
]
</script>