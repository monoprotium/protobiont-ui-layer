<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-xl font-semibold text-white mb-8">Card Demo</h1>
      <div class="grid grid-cols-3 gap-6">
        <!-- Default Card -->
        <PrtCard variant="default">
          <template #image>
            <img
                src="https://picsum.photos/400/300"
                alt="Sample"
                class="w-full h-full object-cover"
                @load="handleImageLoad"
            />
          </template>
          <template #header>
            <h3 class="text-xl font-semibold text-white">Default Card</h3>
          </template>
          <template #content>
            <p class="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </template>
          <template #footer>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">Default variant</span>
              <PrtBtn color="bg-blue-600" size="sm">Learn More</PrtBtn>
            </div>
          </template>
        </PrtCard>
        <!-- Elevated Card -->
        <PrtCard variant="elevated">
          <template #image>
            <img
                src="https://picsum.photos/400/300"
                alt="Sample"
                class="w-full h-full object-cover"
                @load="handleImageLoad"
            />
          </template>
          <template #header>
            <h3 class="text-xl font-semibold text-white">Elevated Card</h3>
          </template>
          <template #content>
            <p class="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </template>
          <template #footer>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">Elevated variant</span>
              <PrtBtn color="bg-purple-600" size="sm">Explore</PrtBtn>
            </div>
          </template>
        </PrtCard>
        <!-- Outline Card -->
        <PrtCard variant="outline">
          <template #image>
            <img
                src="https://picsum.photos/400/300"
                alt="Sample"
                class="w-full h-full object-cover"
                @load="handleImageLoad"
            />
          </template>
          <template #header>
            <h3 class="text-xl font-semibold text-white">Outline Card</h3>
          </template>
          <template #content>
            <p class="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </template>
          <template #footer>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">Outline variant</span>
              <PrtBtn color="bg-green-600" size="sm">Details</PrtBtn>
            </div>
          </template>
        </PrtCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleImageLoad(event: Event) {
  const target = event.target as HTMLElement | null;
  if (target?.parentElement) {
    target.parentElement.classList.remove('opacity-0');
  }
}
</script>
