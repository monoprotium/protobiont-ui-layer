<template>
  <div class="min-h-screen bg-neutral-900 ">
      <div class="mb-8">
        <h1 class="mb-2 text-3xl font-bold text-white">E-commerce Checkout</h1>
      </div>
    <section class="flex">

      <div class="w-3/4 pr-16">
      <!-- Checkout Form Section -->
      <div class="bg-neutral-900 ">
        <PrtFormCheckout
            v-model="formData"
            :errors="errors"
            :loading="isSubmitting"
            :submit-label="submitLabel"
            @submit="handleSubmit"
        />
      </div>
      </div>
      <div class="w-1/4">
      <!-- Form Data Display -->
      <div class="mt-8 space-y-6">
        <!-- Last Submitted Data -->
        <div
            v-if="lastSubmittedData"
            class="bg-neutral-800 p-8"
        >
          <h2 class="mb-4 text-xl font-semibold text-white">Last Submitted Data</h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <!-- Customer Info -->
            <div class="space-y-2">
              <h3 class="text-lg font-medium text-neutral-400">Customer Information</h3>
              <p class="text-white">Name: {{ lastSubmittedData.name }}</p>
              <p class="text-white">Email: {{ lastSubmittedData.email }}</p>
            </div>

            <!-- Shipping Info -->
            <div class="space-y-2">
              <h3 class="text-lg font-medium text-neutral-400">Shipping Address</h3>
              <p class="text-white">Street: {{ lastSubmittedData.street }}</p>
              <p class="text-white">City: {{ lastSubmittedData.city }}</p>
              <p class="text-white">State: {{ lastSubmittedData.state }}</p>
              <p class="text-white">ZIP: {{ lastSubmittedData.zip }}</p>
            </div>

            <!-- Payment Info (Masked) -->
            <div class="space-y-2">
              <h3 class="text-lg font-medium text-neutral-400">Payment Information</h3>
              <p class="text-white">
                Card: •••• •••• •••• {{ lastSubmittedData.cardNumber.slice(-4) }}
              </p>
              <p class="text-white">
                Expiration: {{ lastSubmittedData.expirationDate }}
              </p>
              <p class="text-white">CVV: •••</p>
            </div>
          </div>

          <!-- Notes -->
          <div
              v-if="lastSubmittedData.notes"
              class="mt-4 border-t border-neutral-700 pt-4"
          >
            <h3 class="mb-2 text-lg font-medium text-neutral-400">Additional Notes</h3>
            <p class="text-white">{{ lastSubmittedData.notes }}</p>
          </div>
        </div>

        <!-- Current Form State -->
        <div class=" bg-neutral-800 p-6">
          <h2 class="mb-4 text-xl font-semibold text-white">Current Form State</h2>
          <pre class="overflow-auto  bg-neutral-900 p-4 text-sm">
            <code class="text-neutral-300">{{ JSON.stringify(formData, null, 2) }}</code>
          </pre>
        </div>
      </div>
      </div>
    </section>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CheckoutFormData, CheckoutFormErrors } from '../../../components/composite/formCheckout/types'

type ValidationRules = {
  required: {
    fields: readonly string[]
    message: (field: string) => string
  }
  patterns: Record<string, [RegExp, string]>
}

// Initial form data
const formData = ref<CheckoutFormData>({
  name: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  notes: ''
})

const errors = ref<CheckoutFormErrors>({})
const isSubmitting = ref(false)
const lastSubmittedData = ref<CheckoutFormData | null>(null)

const submitLabel = computed(() =>
    isSubmitting.value ? 'Processing...' : 'Complete Checkout'
)

// Validation rules
const validationRules: ValidationRules = {
  required: {
    fields: [
      'name',
      'email',
      'street',
      'city',
      'state',
      'zip',
      'cardNumber',
      'expirationDate',
      'cvv'
    ] as const,
    message: (field: string) =>
        `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
  },
  patterns: {
    email: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Invalid email format'
    ],
    zip: [
      /^(?:\d{5}|\d{2}-\d{3})$/,
      'Invalid ZIP code'
    ],
    cardNumber: [
      /^\d{16}$/,
      'Invalid card number'
    ],
    expirationDate: [
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      'Invalid expiration date (MM/YY)'
    ],
    cvv: [
      /^\d{3,4}$/,
      'Invalid CVV'
    ]
  }
} as const

const validateForm = (data: CheckoutFormData): boolean => {
  errors.value = {}

  // Required fields
  for (const field of validationRules.required.fields) {
    if (!data[field as keyof CheckoutFormData]?.trim()) {
      errors.value[field as keyof CheckoutFormErrors] = validationRules.required.message(field)
    }
  }

  // Pattern validations
  for (const [field, [pattern, message]] of Object.entries(validationRules.patterns)) {
    const value = data[field as keyof CheckoutFormData]
    if (value?.trim() && !pattern.test(value.replace(/\s/g, ''))) {
      errors.value[field as keyof CheckoutFormErrors] = message
    }
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async (data: CheckoutFormData) => {
  if (!validateForm(data)) return

  isSubmitting.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    lastSubmittedData.value = { ...data }
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>