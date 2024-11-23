<template>
  <div class="min-h-screen bg-neutral-900" >
    <div class="flex flex-col items-left">

      <h1 class="text-xl font-semibold text-white mb-6">Confirm Popup </h1>

      <div class="w-full max-w-2xl space-y-8">
        <!-- Basic Example -->
        <div class="space-y-4">
          <h2 class="text-lg text-white mb-4">Basic Usage</h2>
          <PrtBtn @click="showBasic = true">
            Open Basic Confirm
          </PrtBtn>

          <PrtConfirmPopup
              v-model:show="showBasic"
              @confirm="handleBasicConfirm"
              @cancel="handleBasicCancel"
          />
        </div>

        <!-- Custom Content -->
        <div class="space-y-4">
          <h2 class="text-lg text-white mb-4">Custom Content</h2>
          <PrtBtn
              @click="showCustom = true"
              color="bg-el-8"
          >
            Delete Item
          </PrtBtn>

          <PrtConfirmPopup
              v-model:show="showCustom"
              title="Delete Item"
              message="This action cannot be undone. Are you sure you want to permanently delete this item?"
              confirm-text="Delete"
              cancel-text="Keep"
              confirm-color="bg-el-8"
              @confirm="handleCustomConfirm"
              @cancel="handleCustomCancel"
          />
        </div>

        <!-- Different Sizes -->
        <div class="space-y-4">
          <h2 class="text-lg text-white mb-4">Different Text Sizes</h2>
          <div class="flex gap-4">
            <PrtBtn
                @click="showSmall = true"
                color="bg-el-7"
            >
              Small Popup
            </PrtBtn>

            <PrtBtn
                @click="showBase = true"
                color="bg-el-7"
            >
              Base Popup
            </PrtBtn>

            <PrtBtn
                @click="showLarge = true"
                color="bg-el-7"
            >
              Large Popup
            </PrtBtn>
          </div>

          <PrtConfirmPopup
              v-model:show="showSmall"
              size="sm"
              title="Small Popup"
              confirm-color="bg-el-7"
          />

          <PrtConfirmPopup
              v-model:show="showBase"
              size="base"
              title="Base Popup"
              confirm-color="bg-el-7"
          />

          <PrtConfirmPopup
              v-model:show="showLarge"
              size="lg"
              title="Large Popup"
              confirm-color="bg-el-7"
          />
        </div>

        <!-- Different Overlay Styles -->
        <div class="space-y-4">
          <h2 class="text-lg text-white mb-4">Overlay Variants</h2>
          <div class="flex gap-4">
            <PrtBtn
                @click="showDefault = true"
            >
              Default Overlay
            </PrtBtn>

            <PrtBtn
                @click="showBlur = true"
            >
              Blur Overlay
            </PrtBtn>
          </div>

          <PrtConfirmPopup
              v-model:show="showDefault"
              overlay-variant="default"
          />

          <PrtConfirmPopup
              v-model:show="showBlur"
              overlay-variant="blur"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBasic = ref(false)
const showCustom = ref(false)
const showSmall = ref(false)
const showBase = ref(false)
const showLarge = ref(false)
const showDefault = ref(false)
const showBlur = ref(false)

// Handlers
const handleBasicConfirm = () => {
  console.log('Basic confirmed')
}

const handleBasicCancel = () => {
  console.log('Basic cancelled')
}

const handleCustomConfirm = () => {
  console.log('Delete confirmed')
}

const handleCustomCancel = () => {
  console.log('Delete cancelled')
}
</script>