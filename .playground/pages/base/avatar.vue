<template>
  <div class="page-avatar">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-white">Avatar Component</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Shapes -->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Shapes</h2>
        <div class="flex flex-wrap items-center gap-6">
          <div class="flex flex-col items-center gap-2">
            <PrtAvatar size="base" edges="square" imgSrc="/avatar.png" />
            <span class="text-sm text-gray-400">Square</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <PrtAvatar size="base" edges="rounded" imgSrc="/avatar.png" />
            <span class="text-sm text-gray-400">Rounded</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <PrtAvatar size="base" edges="circle" imgSrc="/avatar.png" />
            <span class="text-sm text-gray-400">Circle</span>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Sizes</h2>
        <div class="flex flex-wrap items-end gap-6">
          <div class="flex flex-col items-center gap-2">
            <PrtAvatar size="sm" edges="circle" imgSrc="/avatar.png" />
            <span class="text-sm text-gray-400">Small</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <PrtAvatar size="base" edges="circle" imgSrc="/avatar.png" />
            <span class="text-sm text-gray-400">Base</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <PrtAvatar size="lg" edges="circle" imgSrc="/avatar.png" />
            <span class="text-sm text-gray-400">Large</span>
          </div>
        </div>
      </section>

      <!-- Examples-->
      <section class="bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-white">Usage Examples</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-3 p-3 bg-neutral-700/50 rounded-lg">
            <PrtAvatar size="sm" edges="circle" imgSrc="/avatar.png" />
            <div>
              <div class="text-white text-sm">User Profile</div>
              <div class="text-gray-400 text-xs">With user info</div>
            </div>
          </div>
          <div class="flex gap-2">
            <PrtAvatar size="sm" edges="circle" imgSrc="/avatar.png" />
            <PrtAvatar size="sm" edges="circle" imgSrc="/avatar.png" />
            <PrtAvatar size="sm" edges="circle" imgSrc="/avatar.png" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>