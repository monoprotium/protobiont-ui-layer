
<template>
  <div class="flex min-h-screen flex-col items-center bg-neutral-900 p-8">

    <h1 class="mt-8 mb-12 text-2xl font-semibold text-white">Uploader</h1>

    <div class="w-full max-w-2xl space-y-12">
      <!-- Basic Uploader -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Basic Uploader</h2>
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-neutral-400">Default Style</h3>
          <PrtUploader
              v-model="basicFiles"
              accept="image/*"
              :max-size="5 * 1024 * 1024"
          />
          <p class="text-sm text-neutral-500 mt-2">
            Accepts images up to 5MB
          </p>
        </div>
      </section>

      <!-- Uploader Variants -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Uploader Variants</h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Outline Style</h3>
            <PrtUploader
                v-model="outlineFiles"
                variant="outline"
                accept="image/*"
            />
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Dashed Style</h3>
            <PrtUploader
                v-model="dashedFiles"
                variant="dashed"
                accept="image/*"
            />
          </div>
        </div>
      </section>

      <!-- Size Variations -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Size Variations</h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Small</h3>
            <PrtUploader
                v-model="smallFiles"
                size="sm"
                variant="dashed"
            />
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Base</h3>
            <PrtUploader
                v-model="baseFiles"
                size="base"
                variant="dashed"
            />
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-medium text-neutral-400">Large</h3>
            <PrtUploader
                v-model="largeFiles"
                size="lg"
                variant="dashed"
            />
          </div>
        </div>
      </section>

      <!-- Multiple Files -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Multiple Files Upload</h2>
        <div class="space-y-2">
          <PrtUploader
              v-model="multipleFiles"
              :multiple="true"
              :max-files="3"
              accept="image/*,.pdf"
              variant="outline"
          />
          <p class="text-sm text-neutral-500">
            Upload up to 3 files (images or PDFs)
          </p>
        </div>
      </section>

      <!-- Custom Preview -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Custom Preview</h2>
        <div class="space-y-2">
          <PrtUploader
              v-model="customPreviewFiles"
              accept="image/*"
              variant="dashed"
          >
            <template #default>
              <div class="flex flex-col items-center gap-2 text-neutral-400">
                <Camera class="w-8 h-8" />
                <p class="text-sm font-medium">Upload Images</p>
                <p class="text-xs">Drop your images here or click to browse</p>
              </div>
            </template>
          </PrtUploader>
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Disabled State</h2>
        <div class="space-y-2">
          <PrtUploader
              v-model="disabledFiles"
              :disabled="true"
              variant="dashed"
          />
          <p class="text-sm text-neutral-500">
            Uploader in disabled state
          </p>
        </div>
      </section>

      <!-- PDF Upload (Working Example) -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">PDF Upload</h2>
        <div class="space-y-2">
          <PrtUploader
              v-model="pdfFiles"
              accept=".pdf"
              :max-size="10 * 1024 * 1024"
              variant="outline"
          />
          <p class="text-sm text-neutral-500">
            Accepts PDF files up to 10MB
          </p>
        </div>
      </section>

      <!-- Error Handling (Intentionally Restrictive) -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">Error Handling Demo</h2>
        <div class="space-y-2">
          <div class="text-sm text-neutral-400 mb-4">
            <p class="font-medium">This is a demo of error handling:</p>
            <ul class="list-disc list-inside mt-1 space-y-1 text-neutral-500">
              <li>Intentionally strict 1MB limit</li>
              <li>Shows error messages</li>
              <li>Try uploading larger PDFs to see validation</li>
            </ul>
          </div>
          <PrtUploader
              v-model="restrictedFiles"
              accept=".pdf"
              :max-size="1024 * 1024"
              @error="handleError"
          />
          <p class="text-sm text-neutral-500">
            Demonstration: Only PDFs under 1MB (intentionally restrictive)
          </p>
          <p v-if="errorMsg" class="text-sm text-el-8 mt-2 animate-in fade-in-0">
            {{ errorMsg }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Camera } from "lucide-vue-next";
import type { UploaderFile } from "../../../components/composite/uploader/types";

const basicFiles = ref<UploaderFile[]>([]);
const outlineFiles = ref<UploaderFile[]>([]);
const dashedFiles = ref<UploaderFile[]>([]);
const smallFiles = ref<UploaderFile[]>([]);
const baseFiles = ref<UploaderFile[]>([]);
const largeFiles = ref<UploaderFile[]>([]);
const multipleFiles = ref<UploaderFile[]>([]);
const customPreviewFiles = ref<UploaderFile[]>([]);
const disabledFiles = ref<UploaderFile[]>([]);
const pdfFiles = ref<UploaderFile[]>([]);
const restrictedFiles = ref<UploaderFile[]>([]);

// Error handling
const errorMsg = ref("");
const handleError = (message: string) => {
  errorMsg.value = message;
  setTimeout(() => {
    errorMsg.value = "";
  }, 3000);
};
</script>