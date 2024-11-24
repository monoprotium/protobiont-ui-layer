<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="mx-auto max-w-4xl">

      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Typography Component</h1>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 gap-8">
        <!-- Headings Section -->
        <section class="bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Headings</h2>
          <div class="p-4">
            <PrtTypography>
              <h1>Heading Level 1</h1>
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
            </PrtTypography>
          </div>
        </section>

        <!-- Text Elements Section -->
        <section class="bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Text Elements</h2>
          <div class=" p-4">
            <PrtTypography>
              <p>This is a standard paragraph with <strong>bold text</strong> and <em>emphasized text</em>.</p>
              <p>You can also include <a href="#" class="text-blue-400 hover:text-blue-300">hyperlinks</a> within your text.</p>
              <blockquote>
                This is a blockquote element for highlighting important quotes or statements within your content.
              </blockquote>
              <code>This is an inline code element</code>
            </PrtTypography>
          </div>
        </section>

        <!-- Lists Section -->
        <section class="bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Lists</h2>
          <div class="p-4">
            <PrtTypography>
              <div class="mb-6">
                <h3 class="mb-2">Unordered List</h3>
                <ul>
                  <li>First unordered list item</li>
                  <li>Second unordered list item
                    <ul>
                      <li>Nested unordered list item</li>
                      <li>Another nested item</li>
                    </ul>
                  </li>
                  <li>Third unordered list item</li>
                </ul>
              </div>

              <div>
                <h3 class="mb-2">Ordered List</h3>
                <ol>
                  <li>First ordered list item</li>
                  <li>Second ordered list item
                    <ol>
                      <li>Nested ordered list item</li>
                      <li>Another nested item</li>
                    </ol>
                  </li>
                  <li>Third ordered list item</li>
                </ol>
              </div>
            </PrtTypography>
          </div>
        </section>

        <!-- Content Blocks Section -->
        <section class="bg-neutral-800 p-6">
          <h2 class="text-xl font-semibold mb-4 text-white">Content Blocks</h2>
          <div class="p-4">
            <PrtTypography>
              <h3>Article Example</h3>
              <p>
                This is a sample article paragraph with various inline elements like
                <strong>bold text</strong>, <em>italic text</em>, and
                <code>code snippets</code>.
              </p>
              <blockquote>
                "This is a featured quote that stands out from the regular text content."
              </blockquote>
              <p>
                Below the quote, we continue with regular paragraph text to demonstrate
                spacing and rhythm in typography.
              </p>
            </PrtTypography>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script needed as we're only using the PrtTypography component
</script>