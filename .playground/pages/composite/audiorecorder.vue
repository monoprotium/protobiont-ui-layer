<template>
  <div class="min-h-screen bg-neutral-900">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-16">Audio Recorder</h1>
    </header>

    <div class="space-y-12">
      <!-- Basic -->
      <section>
        <h2 class="text-xl font-semibold text-white mb-6">Basic</h2>
        <div class="bg-neutral-800/50 p-6">
          <ClientOnly>
            <PrtAudioRecorder @addToChat="handleAddToChat" />
          </ClientOnly>
        </div>
      </section>


    </div>
  </div>
</template>

<script setup lang="ts">
const handleAddToChat = (blob: Blob) => {
  console.log('Add to chat:', {
    size: blob.size,
    type: blob.type
  })
}
</script>