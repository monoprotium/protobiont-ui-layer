<template>
  <div :class="containerVariants({ size, variant })">
    <!-- Image Section -->
    <div
        v-if="showImage"
        :class="imageContainerVariants({ variant })"
    >
      <div class="w-full h-full overflow-hidden">
        <img
            :src="`https://picsum.photos/seed/${product.id || 1}/400/300`"
            :alt="product.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
        />
      </div>

      <!-- Favorite Button -->
      <div
          v-if="showFavorites"
          class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <button
            class="p-2.5 rounded-full bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-colors"
            aria-label="Add to favorites"
        >
          <Heart class="w-5 h-5 text-white" />
        </button>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-5 space-y-4">
      <!-- Title & Rating -->
      <div class="space-y-2">
        <h3
            v-if="showTitle"
            class="font-medium text-base text-white line-clamp-1"
        >
          {{ product.title }}
        </h3>

        <div v-if="showStars" class="flex">
          <PrtRating :modelValue="product.rating ?? 0" size="sm" />
        </div>
      </div>

      <!-- Description -->
      <p
          v-if="showDescription"
          class="text-sm text-neutral-400 line-clamp-2 min-h-[2.5rem]"
      >
        {{ product.description }}
      </p>

      <!-- Price & Quantity -->
      <div :class="quantityGroupVariants({ layout: quantityLayout })">
        <!-- Price -->
        <div
            v-if="showPrice"
            :class="[
            'text-lg font-medium text-white',
            quantityLayout === 'stacked' ? 'mb-2' : 'shrink-0'
          ]"
        >
          {{ formatPrice(product.price) }}
        </div>

        <!-- Quantity Input -->
        <div
            v-if="showBudgetOptions"
            :class="[
            quantityLayout === 'stacked' ? 'w-full' : 'w-[120px]'
          ]"
        >
          <PrtInputNumber
              v-model="quantity"
              :min="1"
              :max="99"
              variant="filled"
              size="base"
              :color="color"
          />
        </div>
      </div>

      <!-- Add to Cart Button -->
      <PrtBtn
          v-if="showCartButton"
          :color="color"
          class="w-full"
          @click="handleAddToCart"
      >
        Add to Cart
      </PrtBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Heart } from 'lucide-vue-next'
import { PrtBtn } from '../../base/btn'
import { PrtRating } from '../../base/rating'
import { PrtInputNumber } from '../../base/inputNumber'
import { containerVariants, quantityGroupVariants, imageContainerVariants } from './variants'
import type { ProductCardProps } from './types'

const props = withDefaults(defineProps<ProductCardProps>(), {
  size: 'base',
  variant: 'solid',
  showImage: true,
  showFavorites: true,
  showTitle: true,
  showStars: true,
  showDescription: true,
  showPrice: true,
  showCartButton: true,
  showBudgetOptions: true,
  color: 'bg-blue-600',
  quantityLayout: 'inline'
})

const emit = defineEmits<{
  'add-to-cart': [quantity: number]
}>()

const quantity = ref(1)

const formatPrice = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value)

const handleAddToCart = () => {
  emit('add-to-cart', quantity.value)
}
</script>