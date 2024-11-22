<template>
  <div class="min-h-screen bg-neutral-900">

      <header>
        <h1 class="text-3xl font-bold text-white  mb-12">
          Progress
        </h1>
      </header>

      <!-- Circle Progress -->
      <section class="space-y-4 mb-12">
        <h2 class="text-xl font-semibold text-white">
          Circle Progress
        </h2>
        <div class="grid grid-cols-4 gap-8">
          <div class="space-y-2 text-center">
            <PrtProgress
                type="circle"
                color="bg-el-7"
                :percent="75"
                :showLabel="true"
            />

          </div>
          <div class="space-y-2 text-center">
            <PrtProgress
                type="circle"
                color="bg-el-3"
                :percent="75"
                :showLabel="true"
            />

          </div>
          <div class="space-y-2 text-center">
            <PrtProgress
                type="circle"
                color="bg-el-9"
                :percent="75"
                :showLabel="true"
            />

          </div>
          <div class="space-y-2 text-center">
            <PrtProgress
                type="circle"
                color="bg-el-8"
                :percent="75"
                :showLabel="true"
            />

          </div>
        </div>
      </section>

      <!-- Line Progress -->
      <section class="space-y-4  mb-12">
        <h2 class="text-xl font-semibold text-white">Line Progress</h2>
        <div class="space-y-6">
          <div class="space-y-2">
            <PrtProgress
                type="line"
                color="bg-el-7"
                :percent="56"
                :showLabel="true"
            />

          </div>
          <div class="space-y-2">
            <PrtProgress
                type="line"
                color="bg-el-3"
                :percent="35"
                :showLabel="true"
            />

          </div>
          <div class="space-y-2">
            <PrtProgress
                type="line"
                color="bg-el-9"
                :percent="22"
                :showLabel="true"
            />

          </div>
          <div class="space-y-2">
            <PrtProgress
                type="line"
                color="bg-el-8"
                :percent="59"
                :showLabel="true"
            />

          </div>
        </div>
      </section>

      <!-- Size Variants -->
      <section class="space-y-4  mb-12">
        <h2 class="text-xl font-semibold text-white">Size Variants</h2>
        <div class="flex items-end gap-8">
          <div class="text-center">
            <PrtProgress
                type="circle"
                size="sm"
                color="bg-el-7"
                :percent="60"
                :showLabel="true"
            />
            <p class="mt-2 text-sm text-gray-400">Small</p>
          </div>
          <div class="text-center">
            <PrtProgress
                type="circle"
                size="base"
                color="bg-el-7"
                :percent="60"
                :showLabel="true"
            />
            <p class="mt-2 text-sm text-gray-400">Base</p>
          </div>
          <div class="text-center">
            <PrtProgress
                type="circle"
                size="lg"
                color="bg-el-7"
                :percent="60"
                :showLabel="true"
            />
            <p class="mt-2 text-sm text-gray-400">Large</p>
          </div>
        </div>
      </section>
    </div>

</template>
