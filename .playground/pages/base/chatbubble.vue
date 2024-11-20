<template>
  <div class="min-h-screen bg-neutral-900">

      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Chat Bubble Component</h1>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <!-- Basic Usage -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Basic Usage</h2>
          <div class="p-4 bg-neutral-700/50 rounded-lg overflow-hidden">
            <PrtChatBubble
                class="mb-4"
                position="left"
                bgColor="bg-green-500"
                textColor="text-white"
                text="Hello! How can I help you today?"
            />
            <PrtChatBubble
                class="mb-4"
                position="right"
                bgColor="bg-blue-500"
                textColor="text-white"
                text="I have a question about the chat bubbles."
            />
          </div>
        </section>

        <!-- Edge Variants -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Edge Variants</h2>
          <div class="space-y-8">
            <!-- Square -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Square Edges</h3>
              <div class="p-4 bg-neutral-700/50 rounded-lg overflow-hidden">
                <PrtChatBubble
                    class="mb-4"
                    position="left"
                    edges="square"
                    bgColor="bg-el-3"
                    textColor="text-white"
                    text="Square edges on the left."
                />
                <PrtChatBubble
                    class="mb-4"
                    position="right"
                    edges="square"
                    bgColor="bg-el-4"
                    textColor="text-white"
                    text="Square edges on the right."
                />
              </div>
            </div>

            <!-- Rounded -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Rounded Edges</h3>
              <div class="p-4 bg-neutral-700/50 rounded-lg overflow-hidden">
                <PrtChatBubble
                    class="mb-4"
                    position="left"
                    edges="rounded"
                    bgColor="bg-el-5"
                    textColor="text-white"
                    text="Rounded edges on the left."
                />
                <PrtChatBubble
                    class="mb-4"
                    position="right"
                    edges="rounded"
                    bgColor="bg-el-6"
                    textColor="text-white"
                    text="Rounded edges on the right."
                />
              </div>
            </div>

            <!-- Circle -->
            <div>
              <h3 class="text-sm font-medium text-gray-400 mb-2">Circle Edges</h3>
              <div class="p-4 bg-neutral-700/50 rounded-lg overflow-hidden">
                <PrtChatBubble
                    class="mb-4"
                    position="left"
                    edges="circle"
                    bgColor="bg-el-7"
                    textColor="text-white"
                    text="Circle edges on the left."
                />
                <PrtChatBubble
                    class="mb-4"
                    position="right"
                    edges="circle"
                    bgColor="bg-el-8"
                    textColor="text-white"
                    text="Circle edges on the right."
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Full Width -->
        <section class="bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Full Width</h2>
          <div class="p-4 bg-neutral-700/50 rounded-lg overflow-hidden">
            <PrtChatBubble
                class="mb-4"
                position="left"
                :fullWidth="true"
                bgColor="bg-el-1"
                textColor="text-white"
                text="This is a full-width message that demonstrates how the chat bubble can expand to fill the available space."
            />
            <PrtChatBubble
                class="mb-4"
                position="right"
                :fullWidth="true"
                bgColor="bg-el-2"
                textColor="text-white"
                text="Another full-width message showing the flexibility of the chat bubble component."
            />
          </div>
        </section>
      </div>
    </div>

</template>

