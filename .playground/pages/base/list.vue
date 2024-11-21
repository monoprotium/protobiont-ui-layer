<template>
  <div class="min-h-screen ">

      <header class="mb-8">
        <h1 class="text-3xl font-bold text-white">List Component</h1>

      </header>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- Basic List -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">Basic List</h2>
          <PrtList :items="basicItems" />
        </section>

        <!-- With Icons -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">With Icons</h2>
          <PrtList :items="basicItems">
            <template #prepend>
              <PrtIcon
                  iconComponent="edit"
                  size="base"
                  class="text-neutral-400"
              />
            </template>
          </PrtList>
        </section>

        <!-- Active State -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">
            Active State
          </h2>
          <PrtList :items="activeItems">
            <template #prepend="{ item }">
              <PrtIcon
                  v-if="item.active"
                  iconComponent="accept"
                  size="base"
                  class="text-el-7"
              />
            </template>
          </PrtList>
        </section>

        <!-- With Links -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">With Links</h2>
          <PrtList :items="linkItems">
            <template #content="{ item }">
              <a :href="item.url">{{ item.content }}</a>
            </template>
          </PrtList>
        </section>

        <!-- Different Sizes -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">
            Different Sizes
          </h2>
          <div class="space-y-8">
            <PrtList :items="basicItems" size="sm" />
            <PrtList :items="basicItems" size="base" />
            <PrtList :items="basicItems" size="lg" />
          </div>
        </section>

        <!-- List Types -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">List Types</h2>
          <div class="space-y-8">
            <PrtList :items="basicItems" type="decimal" />
            <PrtList :items="basicItems" type="disc" />
          </div>
        </section>

        <!-- Dense List -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">Dense List</h2>
          <PrtList :items="basicItems" dense />
        </section>

        <!-- With Actions -->
        <section class="bg-neutral-950  rounded-lg p-6 space-y-4">
          <h2 class="text-xl font-semibold text-white">
            With Actions
          </h2>
          <PrtList :items="basicItems">
            <template #append>
              <PrtIcon
                  iconComponent="edit"
                  size="base"
                  class="text-neutral-400 hover:text-neutral-200 cursor-pointer"
              />
            </template>
          </PrtList>
        </section>
      </div>
    </div>

</template>

<script setup lang="ts">
const basicItems = [
  { id: "1", content: "Notifications" },
  { id: "2", content: "Account Settings" },
  { id: "3", content: "Privacy & Security" },
];

const activeItems = [
  { id: "1", content: "Dashboard", active: true },
  { id: "2", content: "Projects" },
  { id: "3", content: "Tasks", disabled: true },
];

const linkItems = [
  {
    id: "1",
    content: "Documentation",
    url: "#documentation",
  },
  {
    id: "2",
    content: "Components",
    url: "#components",
  },
  {
    id: "3",
    content: "Examples",
    url: "#examples",
  },
];
</script>
