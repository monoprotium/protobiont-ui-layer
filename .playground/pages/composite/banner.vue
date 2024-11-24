<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="max-w-6xl mx-auto space-y-8">
      <h1 class="text-xl font-semibold text-white mb-6">Banner Demo</h1>

      <!-- Left Variant -->
      <PrtBanner variant="left" height="base">
        <template #content>
          <h2 class="text-2xl font-bold mb-2">Special Offer</h2>
          <p class="text-neutral-200 mb-4">Get 20% off on all items!</p>
          <PrtBtn color="bg-neutral-700">Shop Now</PrtBtn>
        </template>
      </PrtBanner>

      <!-- Right Variant -->
      <PrtBanner variant="right" height="base">
        <template #content>
          <h2 class="text-2xl font-bold mb-2">New Collection</h2>
          <p class="text-neutral-200 mb-4">Discover our latest arrivals</p>
          <PrtBtn color="bg-neutral-700">Explore</PrtBtn>
        </template>
      </PrtBanner>

      <!-- Full Variant -->
      <PrtBanner variant="full" height="lg">
        <template #content>
          <h2 class="text-3xl font-bold mb-3">Special Event</h2>
          <p class="text-neutral-100 mb-6 max-w-lg">
            Join us for an exclusive preview of upcoming products
          </p>
          <PrtBtn color="bg-neutral-700" size="lg">Register Now</PrtBtn>
        </template>
      </PrtBanner>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional setup needed
</script>