<template>
  <div class="relative">
    <input
        type="file"
        ref="fileInputRef"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        @change="handleFiles"
        class="sr-only"
    />

    <!-- Drop Zone -->
    <div
        :class="[
                uploaderVariants({ variant, size, disabled }),
                isDragging && 'ring-2 ring-el-7',
                customClass,
            ]"
        @click="!disabled && triggerFileInput()"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
    >
      <!-- Default Slot for Custom Content -->
      <slot>
        <div class="flex flex-col items-center gap-2 text-neutral-400">
          <UploadCloud class="w-8 h-8" />
          <div class="text-sm">
            <span class="font-medium">Click to upload</span> or drag
            and drop
          </div>
          <p class="text-xs text-neutral-400">
            {{ acceptedFileTypes }}
          </p>
        </div>
      </slot>
    </div>

    <!-- File Preview Section -->
    <div v-if="showPreviews && files.length > 0" class="mt-4 space-y-2">
      <TransitionGroup
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
      >
        <div
            v-for="file in files"
            :key="file.id"
            :class="[
                        previewVariants({ hasPreview: file.preview !== undefined }),
                        'relative',
                    ]"
        >
          <!-- Preview Image -->
          <img
              v-if="file.preview"
              :src="file.preview"
              :alt="file.name"
              class="w-12 h-12 rounded object-cover"
          />

          <!-- File Info -->
          <div class="flex-1 min-w-0">
            <p
                class="text-sm font-medium truncate text-neutral-400"
            >
              {{ file.name }}
            </p>
            <p class="text-xs text-neutral-400">
              {{ formatFileSize(file.size) }}
            </p>
          </div>

          <!-- Remove Button -->
          <button
              v-if="removable"
              type="button"
              class="absolute top-1 right-1 p-1 text-neutral-400 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              @click="removeFile(file)"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </TransitionGroup>
    </div>

    <!-- Error Messages -->
    <div v-if="errorMessage" class="mt-2 text-sm text-el-8">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { UploadCloud, X } from "lucide-vue-next";
import { uploaderVariants, previewVariants } from "./variants";
import type { UploaderProps, UploaderFile } from "./types";
import {
  generateId,
  formatFileSize,
  isValidFileType,
  isValidFileSize,
} from "./utils";

const props = withDefaults(defineProps<UploaderProps>(), {
  variant: "default",
  size: "base",
  accept: "",
  multiple: false,
  disabled: false,
  removable: true,
  maxFiles: Infinity,
  maxSize: Infinity,
  showPreviews: true,
  customClass: "",
});

const emit = defineEmits<{
  "update:modelValue": [files: UploaderFile[]];
  error: [message: string];
}>();


const fileInputRef = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const errorMessage = ref("");
const files = ref<UploaderFile[]>([]);

const acceptedFileTypes = computed(() => {
  if (!props.accept) return "All files accepted";
  return `Accepted types: ${props.accept.split(",").join(", ")}`;
});

const triggerFileInput = () => {
  fileInputRef.value?.click();
};

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const validateFile = (file: File): boolean => {
  // Check file type
  if (props.accept && !isValidFileType(file, props.accept)) {
    errorMessage.value = `File type not accepted: ${file.type}`;
    return false;
  }

  // Check file size
  if (!isValidFileSize(file, props.maxSize)) {
    errorMessage.value = `File too large: ${formatFileSize(file.size)}`;
    return false;
  }

  // Check max files
  if (files.value.length >= props.maxFiles) {
    errorMessage.value = `Maximum ${props.maxFiles} files allowed`;
    return false;
  }

  return true;
};

const processFiles = async (fileList: FileList | File[]) => {
  errorMessage.value = "";
  const newFiles: UploaderFile[] = [];

  for (const file of Array.from(fileList)) {
    if (!validateFile(file)) continue;

    const newFile: UploaderFile = {
      id: generateId(),
      name: file.name,
      size: file.size,
      type: file.type,
      file,
    };

    // Generate preview for images
    if (file.type.startsWith("image/")) {
      try {
        newFile.preview = await createPreview(file);
      } catch (error) {
        console.error("Preview generation failed:", error);
      }
    }

    newFiles.push(newFile);
  }

  files.value = props.multiple ? [...files.value, ...newFiles] : newFiles;
  emit("update:modelValue", files.value);
};

const handleFiles = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    processFiles(input.files);
  }
  // Reset input value to allow uploading same file again
  input.value = "";
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  if (event.dataTransfer?.files) {
    processFiles(event.dataTransfer.files);
  }
};

const removeFile = (fileToRemove: UploaderFile) => {
  files.value = files.value.filter((f) => f.id !== fileToRemove.id);
  emit("update:modelValue", files.value);
};

const createPreview = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
</script>