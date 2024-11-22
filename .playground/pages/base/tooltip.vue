<template>
  <div class="flex min-h-screen flex-col items-center bg-neutral-900 p-8">
    <h1 class="mt-8 mb-12 text-2xl font-semibold text-white">
      Tooltip Examples
    </h1>

    <div class="w-full max-w-2xl space-y-12">
      <!-- Basic Tooltips -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Basic Tooltips
        </h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Default Variant
            </h3>
            <PrtTooltip content="Default tooltip variant">
              <PrtBtn>Hover me</PrtBtn>
            </PrtTooltip>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Custom Colors
            </h3>
            <PrtTooltip
                content="Custom colored tooltip"
                bg-color="bg-purple-600"
                text-color="text-white"
            >
              <PrtBtn>Hover me</PrtBtn>
            </PrtTooltip>
          </div>
        </div>
      </section>

      <!-- Predefined Variants -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Predefined Variants
        </h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Primary
            </h3>
            <PrtTooltip content="Primary tooltip" variant="primary">
              <PrtBtn>Primary</PrtBtn>
            </PrtTooltip>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Success
            </h3>
            <PrtTooltip content="Success tooltip" variant="success">
              <PrtBtn>Success</PrtBtn>
            </PrtTooltip>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Warning
            </h3>
            <PrtTooltip content="Warning tooltip" variant="warning">
              <PrtBtn>Warning</PrtBtn>
            </PrtTooltip>
          </div>
        </div>
      </section>

      <!-- Custom Colors -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Custom Colors
        </h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Custom Purple
            </h3>
            <PrtTooltip
                content="Custom purple tooltip"
                bg-color="bg-purple-600"
                text-color="text-white"
            >
              <PrtBtn>Purple</PrtBtn>
            </PrtTooltip>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Custom Teal
            </h3>
            <PrtTooltip
                content="Custom teal tooltip"
                bg-color="bg-teal-500"
                text-color="text-white"
            >
              <PrtBtn>Teal</PrtBtn>
            </PrtTooltip>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Light Theme
            </h3>
            <PrtTooltip
                content="Light themed tooltip"
                bg-color="bg-white"
                text-color="!text-neutral-900"
            >
              <PrtBtn>Light</PrtBtn>
            </PrtTooltip>
          </div>
        </div>
      </section>

      <!-- Placements -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Placements
        </h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Top & Bottom
            </h3>
            <div class="flex gap-4">
              <PrtTooltip
                  content="Top tooltip"
                  placement="top"
                  bg-color="!bg-el-7"
              >
                <PrtBtn>Top</PrtBtn>
              </PrtTooltip>
              <PrtTooltip
                  content="Bottom tooltip"
                  placement="bottom"
                  bg-color="!bg-el-7"
              >
                <PrtBtn>Bottom</PrtBtn>
              </PrtTooltip>
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Left & Right
            </h3>
            <div class="flex gap-4">
              <PrtTooltip
                  content="Left tooltip"
                  placement="left"
                  bg-color="!bg-el-7"
              >
                <PrtBtn>Left</PrtBtn>
              </PrtTooltip>
              <PrtTooltip
                  content="Right tooltip"
                  placement="right"
                  bg-color="!bg-el-7"
              >
                <PrtBtn>Right</PrtBtn>
              </PrtTooltip>
            </div>
          </div>
        </div>
      </section>

      <!-- Triggers -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Trigger Types
        </h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Hover Trigger
            </h3>
            <PrtTooltip
                content="Hover to show"
                bg-color="!bg-el-3"
                text-color="text-white"
            >
              <PrtBtn>Hover me</PrtBtn>
            </PrtTooltip>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">
              Click Trigger
            </h3>
            <PrtTooltip
                content="Click to toggle"
                trigger="click"
                bg-color="!bg-el-4"
                text-color="text-white"
            >
              <PrtBtn>Click me</PrtBtn>
            </PrtTooltip>
          </div>
        </div>
      </section>

      <!-- Custom Content -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Custom Content
        </h2>
        <div class="space-y-2">
          <PrtTooltip bg-color="!bg-el-4">
            <PrtBtn>Rich Content</PrtBtn>
            <template #content>
              <div class="flex items-center gap-2">
                <div
                    class="h-2 w-2 rounded-full bg-green-400"
                ></div>
                <span>Status: Active</span>
              </div>
            </template>
          </PrtTooltip>
        </div>
      </section>
    </div>
  </div>
</template>
