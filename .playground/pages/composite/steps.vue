<template>
  <div class="min-h-screen bg-neutral-900 p-8 text-neutral-100">
    <div class="mx-auto max-w-4xl">

      <div class="mb-8">
        <h1 class="text-3xl font-bold text-neutral-100 mb-2">Steps Component</h1>

      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 gap-8">
        <!-- Basic Steps Example -->
        <section class="">
          <h2 class="text-xl font-semibold mb-4 text-neutral-100">Basic Form Steps</h2>
          <div class="bg-neutral-700/50 ">
            <PrtSteps
                :steps="4"
                @submit="onBasicSubmit"
                @update:step="handleStepChange"
                class="w-full"
            >
              <template #default="{ currentStep }">
                <!-- Step 1: Personal Information -->
                <div v-if="currentStep === 0" class="space-y-4">
                  <h3 class="text-lg font-semibold">Personal Information</h3>
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <PrtInputText
                          v-model="basicForm.firstName"
                          placeholder="First Name"
                          class="w-full"
                      />
                      <PrtInputText
                          v-model="basicForm.lastName"
                          placeholder="Last Name"
                          class="w-full"
                      />
                    </div>
                    <PrtInputText
                        v-model="basicForm.email"
                        type="email"
                        placeholder="Email"
                        class="w-full"
                    />
                  </div>
                </div>

                <!-- Step 2: Address -->
                <div v-if="currentStep === 1" class="space-y-4">
                  <h3 class="text-lg font-semibold">Address Details</h3>
                  <div class="space-y-4">
                    <PrtInputText
                        v-model="basicForm.street"
                        placeholder="Street Address"
                        class="w-full"
                    />
                    <div class="grid grid-cols-3 gap-4">
                      <PrtInputText
                          v-model="basicForm.city"
                          placeholder="City"
                      />
                      <PrtInputText
                          v-model="basicForm.state"
                          placeholder="State"
                      />
                      <PrtInputText
                          v-model="basicForm.zip"
                          placeholder="ZIP"
                      />
                    </div>
                  </div>
                </div>

                <!-- Step 3: Preferences -->
                <div v-if="currentStep === 2" class="space-y-4">
                  <h3 class="text-lg font-semibold">Preferences</h3>
                  <div class="space-y-4">
                    <div class="flex flex-col gap-3">
                      <PrtCheckbox
                          v-model="basicForm.newsletter"
                          color="bg-el-7"
                      >
                        Subscribe to newsletter
                      </PrtCheckbox>
                      <PrtCheckbox
                          v-model="basicForm.updates"
                          color="bg-el-7"
                      >
                        Receive product updates
                      </PrtCheckbox>
                    </div>
                  </div>
                </div>

                <!-- Step 4: Review -->
                <div v-if="currentStep === 3" class="space-y-4">
                  <h3 class="text-lg font-semibold">Review Information</h3>
                  <div class="bg-neutral-700 p-4  space-y-3">
                    <div class="grid grid-cols-2 gap-2">
                      <div>
                        <p class="text-neutral-400 font-bold">Name</p>
                        <p class="text-sm">{{ basicForm.firstName }} {{ basicForm.lastName }}</p>
                      </div>
                      <div>
                        <p class="text-neutral-400">Email</p>
                        <p class="text-sm">{{ basicForm.email }}</p>
                      </div>
                    </div>
                    <div>
                      <p class="text-neutral-400">Address</p>
                      <div class="text-sm">
                      <p>{{ basicForm.street }}</p>
                      <p>{{ basicForm.city }}, {{ basicForm.state }} {{ basicForm.zip }}</p>
                      </div>
                    </div>
                    <div>
                      <p class="text-neutral-400">Preferences</p>
                      <ul class="list-disc list-inside text-sm">
                        <li>Newsletter: {{ basicForm.newsletter ? 'Yes' : 'No' }}</li>
                        <li>Updates: {{ basicForm.updates ? 'Yes' : 'No' }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </template>
            </PrtSteps>
          </div>
        </section>

        <!-- Checkout Process Example -->
        <section class="">
          <h2 class="text-xl font-semibold mb-4 text-neutral-100">Checkout Process</h2>
          <div class="bg-neutral-700/50">
            <PrtSteps
                :steps="3"
                @submit="onCheckoutSubmit"
                @update:step="handleCheckoutStepChange"
                class="w-full"
            >
              <template #default="{ currentStep }">
                <!-- Step 1: Shipping -->
                <div v-if="currentStep === 0" class="space-y-4">
                  <h3 class="text-lg font-semibold">Shipping Information</h3>
                  <div class="space-y-4">
                    <PrtInputText
                        v-model="checkoutForm.address"
                        placeholder="Shipping Address"
                        class="w-full"
                    />
                    <PrtSelect
                        v-model="checkoutForm.shipping"
                        :options="shippingOptions"
                        placeholder="Select Shipping Method"
                        class="w-full"
                    />
                  </div>
                </div>

                <!-- Step 2: Payment -->
                <div v-if="currentStep === 1" class="space-y-4">
                  <h3 class="text-lg font-semibold">Payment Details</h3>
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <PrtInputText
                          v-model="checkoutForm.cardNumber"
                          placeholder="Card Number"
                      />
                      <PrtInputText
                          v-model="checkoutForm.cvv"
                          placeholder="CVV"
                          maxlength="4"
                      />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <PrtInputText
                          v-model="checkoutForm.expiry"
                          placeholder="MM/YY"
                      />
                      <PrtInputText
                          v-model="checkoutForm.zipCode"
                          placeholder="ZIP Code"
                      />
                    </div>
                  </div>
                </div>

                <!-- Step 3: Review -->
                <div v-if="currentStep === 2" class="space-y-4">
                  <h3 class="text-lg font-semibold">Order Summary</h3>
                  <div class="bg-neutral-700 p-4 space-y-4">
                    <div class="flex justify-between">
                      <span>Subtotal:</span>
                      <span>$99.99</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Shipping:</span>
                      <span>{{
                          checkoutForm.shipping === 'express' ? '$9.99' : '$5.99'
                        }}</span>
                    </div>
                    <div class="flex justify-between font-semibold border-t border-neutral-600 pt-2">
                      <span>Total:</span>
                      <span>{{
                          checkoutForm.shipping === 'express' ? '$109.98' : '$105.98'
                        }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </PrtSteps>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Basic Form State
const basicForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  newsletter: false,
  updates: false
})

// Checkout Form State
const checkoutForm = ref({
  address: '',
  shipping: '',
  cardNumber: '',
  cvv: '',
  expiry: '',
  zipCode: ''
})

// Select Options
const shippingOptions = [
  { label: 'Standard Shipping (3-5 days)', value: 'standard' },
  { label: 'Express Shipping (1-2 days)', value: 'express' }
]

// Event Handlers
const handleStepChange = (step: number) => {
  console.log(`Basic form - Moving to step ${step + 1}`)
}

const handleCheckoutStepChange = (step: number) => {
  console.log(`Checkout - Moving to step ${step + 1}`)
}

const onBasicSubmit = () => {
  console.log('Basic form submitted:', basicForm.value)
}

const onCheckoutSubmit = () => {
  console.log('Checkout completed:', checkoutForm.value)
}
</script>