<template>
  <div class="min-h-screen bg-neutral-900 ">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="mt-4 text-3xl font-bold text-white">App Header</h1>
    </div>

    <!-- Examples -->
    <div class="space-y-8">
      <!-- Default Header -->
      <section class="pb-4">
        <h2 class="mb-4 text-xl font-semibold text-white">Default Header</h2>

          <PrtAppHeader
              :pages="['Dashboard', 'Projects', 'Categories', 'Tags']"
              @navigate="handleNavigation"
          />


      </section>

      <!-- Custom Style -->
      <section class="pb-4">
        <h2 class="mb-4 text-xl font-semibold text-white">Custom Style</h2>

          <PrtAppHeader
              :pages="['Dashboard', 'Projects', 'Categories', 'Tags']"
          >
            <template #logo>
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-600">
                  <PrtIcon size="base" iconComponent="home" />
                </div>
                <span class="text-lg font-semibold text-white">AppName</span>
              </div>
            </template>
          </PrtAppHeader>


      </section>

      <!-- Minimal Variant -->
      <section class="pb-4">
        <h2 class="mb-4 text-xl font-semibold text-white">Minimal Variant</h2>

          <PrtAppHeader
              variant="minimal"
              :pages="['Dashboard', 'Projects', 'Categories', 'Tags']"
          >
            <template #logo>
              <PrtIcon size="lg" iconComponent="user" class="text-white" />
            </template>
          </PrtAppHeader>


      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleNavigation = (page: string) => {
  console.log('Navigating to:', page)
}
</script>