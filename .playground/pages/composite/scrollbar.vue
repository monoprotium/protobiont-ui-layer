<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-white">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <header class="space-y-4">

        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Scrollbar</h1>

        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="h-96 w-full border border-neutral-700  bg-neutral-800">
        <PrtScrollbar class="p-4" :autoHide="false">
          <div
              v-for="paragraph in sampleContent"
              :key="paragraph.id"
              class="mb-4 last:mb-0"
          >
            <h3 class="text-lg font-medium text-white mb-2">
              {{ paragraph.title }}
            </h3>
            <p class="text-neutral-400">
              {{ paragraph.text }}
            </p>
          </div>
        </PrtScrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';


const titles = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt',
  'Ut labore et dolore magna aliqua',
  'Ut enim ad minim veniam',
  'Quisque velit nisi pretium ut lacinia',
  'Nullam quis risus eget urna mollis',
  'Curabitur arcu erat accumsan id imperdiet',
  'Porttitor at sem viverra',
  'Aenean euismod bibendum laoreet',
  'Fusce ac felis sit amet ligula pharetra',
  'Pellentesque in ipsum id orci porta dapibus',
  'Vivamus suscipit tortor eget felis porttitor',
  'Sed porttitor lectus nibh',
  'Vestibulum ante ipsum primis'
];

const texts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Components are the building blocks of Vue applications. Donec sollicitudin molestie malesuada. Fusce ac felis sit amet ligula pharetra condimentum. Vivamus suscipit tortor eget felis porttitor volutpat.',
  'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
  'Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
  'Aenean euismod bibendum laoreet. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
  'Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
  'Fusce ac felis sit amet ligula pharetra condimentum. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
  'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
  'Nullam rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
  'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada.',
  'Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
  'Fusce ac felis sit amet ligula pharetra condimentum. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
  'Sed porttitor lectus nibh. Aenean euismod bibendum laoreet. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.',
  'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
  'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt.'
];


const sampleContent = titles.map((title, index) => ({
  id: index,
  title,
  text: texts[index] + ' ' + texts[(index + 1) % texts.length] + ' ' + texts[(index + 2) % texts.length]
}));
</script>

