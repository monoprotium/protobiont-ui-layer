<template>
  <form
      :class="checkoutFormVariants({ loading })"
      @submit.prevent="handleSubmit"
  >
    <!-- Customer Information -->
    <section class="space-y-4">
      <h2 :class="sectionTitleVariants()">Customer Information</h2>

      <PrtFormGroup
          label="Name"
          :error-message="errors?.name"
          required
      >
        <PrtFormField
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="John Doe"
        />
      </PrtFormGroup>

      <PrtFormGroup
          label="Email"
          :error-message="errors?.email"
          required
      >
        <PrtFormField
            type="text"
            id="email"
            v-model="formData.email"
            placeholder="john@example.com"
        />
      </PrtFormGroup>
    </section>

    <!-- Shipping Address -->
    <section class="space-y-4">
      <h2 :class="sectionTitleVariants()">Shipping Address</h2>

      <PrtFormGroup
          label="Street Address"
          :error-message="errors?.street"
          required
      >
        <PrtFormField
            type="text"
            id="street"
            v-model="formData.street"
            placeholder="123 Main St"
        />
      </PrtFormGroup>

      <PrtFormGroup
          label="City"
          :error-message="errors?.city"
          required
      >
        <PrtFormField
            type="text"
            id="city"
            v-model="formData.city"
            placeholder="New York"
        />
      </PrtFormGroup>

      <div class="grid grid-cols-2 gap-4">
        <PrtFormGroup
            label="State"
            :error-message="errors?.state"
            required
        >
          <PrtFormField
              type="text"
              id="state"
              v-model="formData.state"
              placeholder="NY"
          />
        </PrtFormGroup>

        <PrtFormGroup
            label="ZIP Code"
            :error-message="errors?.zip"
            required
        >
          <PrtFormField
              type="text"
              id="zip"
              v-model="formData.zip"
              placeholder="10001"
          />
        </PrtFormGroup>
      </div>
    </section>

    <!-- Payment Information -->
    <section class="space-y-4">
      <h2 :class="sectionTitleVariants()">Payment Information</h2>

      <PrtFormGroup
          label="Card Number"
          :error-message="errors?.cardNumber"
          required
      >
        <PrtFormField
            type="text"
            id="cardNumber"
            v-model="formData.cardNumber"
            placeholder="4242 4242 4242 4242"
        />
      </PrtFormGroup>

      <div class="grid grid-cols-2 gap-4">
        <PrtFormGroup
            label="Expiration"
            :error-message="errors?.expirationDate"
            required
        >
          <PrtFormField
              type="text"
              id="expirationDate"
              v-model="formData.expirationDate"
              placeholder="MM/YY"
          />
        </PrtFormGroup>

        <PrtFormGroup
            label="CVV"
            :error-message="errors?.cvv"
            required
        >
          <PrtFormField
              type="text"
              id="cvv"
              v-model="formData.cvv"
              placeholder="123"
          />
        </PrtFormGroup>
      </div>
    </section>

    <!-- Additional Notes and Submit -->
    <section class="md:col-span-2 space-y-4">
      <PrtFormGroup
          label="Additional Notes"
          :error-message="errors?.notes"
      >
        <PrtFormField
            type="textarea"
            id="notes"
            v-model="formData.notes"
            placeholder="Any special instructions..."
        />
      </PrtFormGroup>
    </section>

    <section class="flex items-end justify-end">
      <PrtBtn
          size="lg"
          :loading="loading"
          :disabled="loading"
          type="submit"
      >
        {{ submitLabel }}
      </PrtBtn>
    </section>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CheckoutFormProps } from './types'
import { checkoutFormVariants, sectionTitleVariants } from './variants'
import { PrtBtn } from '../../base/btn'
import { PrtFormField } from '../formField'
import { PrtFormGroup } from '../formGroup'

const props = withDefaults(defineProps<CheckoutFormProps>(), {
  loading: false,
  errors: undefined,
  submitLabel: 'Complete Checkout'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: CheckoutFormProps['modelValue']): void
  (e: 'submit', value: CheckoutFormProps['modelValue']): void
}>()

const formData = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>