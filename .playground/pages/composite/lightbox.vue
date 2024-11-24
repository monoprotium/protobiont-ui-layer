<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-gray-100">
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Page Header -->
      <header class="space-y-2">

        <h1 class="text-3xl font-bold">Lightbox Demo</h1>

      </header>

      <!-- Controls -->
      <div class="bg-neutral-800 p-4 rounded-lg">
        <PrtSelect
            v-model="size"
            :options="sizeOptions"
            placeholder="Select Size"
        />
      </div>

      <!-- Demo Content -->
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <!-- Simple Content -->
        <section class="bg-neutral-800 p-6 rounded-lg">
          <h2 class="text-lg font-medium mb-4">Text Content</h2>
          <PrtBtn
              color="bg-el-7"
              @click="showSimple = true"
          >
            Open Text Lightbox
          </PrtBtn>

          <PrtLightbox
              v-model="showSimple"
              :size="size"
          >
            <div class="text-center text-white">
              <h3 class="text-xl font-bold mb-4">Welcome!</h3>
              <p class="max-w-md">
                This is a simple text-based lightbox example. The content is centered
                and the lightbox can be closed by clicking outside or pressing ESC.
              </p>
            </div>
          </PrtLightbox>
        </section>

        <!-- Image Content -->
        <section class="bg-neutral-800 p-6 rounded-lg">
          <h2 class="text-lg font-medium mb-4">Image Content</h2>
          <PrtBtn
              color="bg-el-7"
              @click="showImage = true"
          >
            Open Image Lightbox
          </PrtBtn>

          <PrtLightbox
              v-model="showImage"
              size="lg"
          >
            <div class=" space-y-4 p-4">
              <img
                  src="https://picsum.photos/800/600"
                  alt="Random Image"
                  class=" w-full"
              />
              <p class="text-center text-white text-sm">
               random image from Picsum
              </p>
            </div>
          </PrtLightbox>
        </section>

        <!-- Form Content -->
        <section class="bg-neutral-800 p-6 rounded-lg">
          <h2 class="text-lg font-medium mb-4">Form Content</h2>
          <PrtBtn
              color="bg-el-7"
              @click="showForm = true"
          >
            Open Form Lightbox
          </PrtBtn>

          <PrtLightbox
              v-model="showForm"
              size="sm"
          >
            <div class="text-white">
              <h3 class="text-xl font-bold mb-4">Contact Form</h3>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="space-y-1.5">
                  <label class="text-sm font-medium">Name</label>
                  <PrtInputText
                      v-model="formData.name"
                      placeholder="Enter your name"
                  />
                </div>

                <div class="space-y-1.5">
                  <label class="text-sm font-medium">Email</label>
                  <PrtInputText
                      v-model="formData.email"
                      placeholder="Enter your email"
                  />
                </div>

                <div class="flex justify-end gap-2 pt-2">
                  <PrtBtn
                      variant="ghost"
                      @click="showForm = false"
                  >
                    Cancel
                  </PrtBtn>
                  <PrtBtn
                      color="bg-el-7"
                      type="submit"
                  >
                    Submit
                  </PrtBtn>
                </div>
              </form>
            </div>
          </PrtLightbox>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'

// Demo state
const size = ref('base')
const showSimple = ref(false)
const showImage = ref(false)
const showForm = ref(false)

// Form state
const formData = reactive({
  name: '',
  email: ''
})

// Size options
const sizeOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Base', value: 'base' },
  { label: 'Large', value: 'lg' }
]

// Form handler
const handleSubmit = () => {
  console.log('Form submitted:', formData)
  showForm.value = false
}
</script>