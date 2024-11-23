<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="flex flex-col items-center">
      <h1 class="text-xl font-semibold text-white mb-6">Collapsible Demo</h1>

      <div class="w-full max-w-2xl space-y-8">
        <!-- Basic Example -->
        <div>
          <h2 class="text-lg text-white mb-4">Basic Usage</h2>
          <PrtCollapsible
              :items="basicItems"
              :initialOpenIndex="0"
          />
        </div>

        <!-- Multiple Open -->
        <div>
          <h2 class="text-lg text-white mb-4">Allow Multiple Open</h2>
          <PrtCollapsible
              :items="basicItems"
              :allowMultiple="true"
              color="bg-neutral-950"
          />
        </div>

        <!-- Different Sizes -->
        <div class="space-y-4">
          <h2 class="text-lg text-white mb-4">Different Sizes</h2>
          <PrtCollapsible
              :items="sizeItems"
              size="sm"
              color="bg-neutral-950"
          />
          <PrtCollapsible
              :items="sizeItems"
              size="base"
              color="bg-neutral-950"
          />
          <PrtCollapsible
              :items="sizeItems"
              size="lg"
              color="bg-neutral-950"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const basicItems = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    title: 'Consectetur adipiscing elit',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    title: 'Sed do eiusmod tempor',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
  }
]

const sizeItems = [
  {
    title: 'Lorem ipsum dolor',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    title: 'Consectetur adipiscing',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
  }
]
</script>