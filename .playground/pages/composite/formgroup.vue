<template>
  <div class="min-h-screen bg-neutral-900">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 text-white">Form Group</h1>
    </div>
    <div class="flex">
      <!-- Contact Form -->
      <div class="py-8 w-1/2">
        <h2 class="text-2xl font-semibold mb-6 text-white">Contact Form</h2>

        <ClientOnly>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <PrtFormGroup
                label="Your Name"
                :errorMessage="errors.name"
                required
            >
              <PrtFormField
                  type="text"
                  id="nameField"
                  :modelValue="formData.name"
                  @update:modelValue="formData.name = $event"
                  placeholder="Enter your name"
              />
              <div class="text-sm text-gray-400 mt-1">
                Preview: <span class="text-white">{{ formData.name || 'No name entered' }}</span>
              </div>
            </PrtFormGroup>

            <!-- Email Field -->
            <PrtFormGroup
                label="Email Address"
                :errorMessage="errors.email"
                helpText="Check your email to verify your account."
                required
            >
              <PrtFormField
                  type="text"
                  id="emailField"
                  :modelValue="formData.email"
                  @update:modelValue="formData.email = $event"
                  placeholder="your@email.com"
              />
              <div class="text-sm text-gray-400 mt-1">
                Preview: <span class="text-white">{{ formData.email || 'No email entered' }}</span>
              </div>
            </PrtFormGroup>

            <!-- Phone Field -->
            <PrtFormGroup
                label="Phone Number"
                :errorMessage="errors.phone"
            >
              <PrtFormField
                  type="text"
                  id="phoneField"
                  :modelValue="formData.phone"
                  @update:modelValue="formData.phone = $event"
                  placeholder="Enter phone number"
              />
              <div class="text-sm text-gray-400 mt-1">
                Preview: <span class="text-white">{{ formData.phone || 'No phone entered' }}</span>
              </div>
            </PrtFormGroup>

            <!-- Message Field -->
            <PrtFormGroup
                label="Your Message"
                :errorMessage="errors.message"
                required
            >
              <PrtFormField
                  type="textarea"
                  id="messageField"
                  :modelValue="formData.message"
                  @update:modelValue="formData.message = $event"
                  placeholder="Type your message here..."
              />
              <div class="text-sm text-gray-400 mt-1">
                Preview: <span class="text-white">{{ formData.message || 'No message entered' }}</span>
              </div>
            </PrtFormGroup>

            <!-- Submit Button -->
            <div class="flex justify-end">
              <PrtBtn
                  color="bg-el-7"
                  size="lg"
                  type="submit"
                  :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Submitting...' : 'Submit Form' }}
              </PrtBtn>
            </div>
          </form>
        </ClientOnly>
      </div>

      <!-- Form Data Preview -->
      <div class="mt-8 p-6 w-1/2">
        <h3 class="text-lg font-medium text-white mb-4">Form Data</h3>
        <pre class="text-sm text-gray-400 bg-neutral-900 p-4 rounded">{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const errors = reactive<FormErrors>({});
const isSubmitting = ref(false);

const validateForm = () => {
  errors.name = !formData.name ? 'Name is required' : undefined;
  errors.email = !formData.email ? 'Email is required' : undefined;
  errors.message = !formData.message ? 'Message is required' : undefined;

  return !Object.values(errors).some(error => error);
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);

    // Optional: Reset form
    // Object.keys(formData).forEach(key => formData[key as keyof FormData] = '');
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>