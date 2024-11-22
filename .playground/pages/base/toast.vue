<template>
  <div class="flex min-h-screen flex-col items-center bg-neutral-900 8">

    <h1 class="mt-8 mb-12 text-2xl font-semibold text-white">
      Toast Examples
    </h1>

    <div class="w-full max-w-2xl space-y-12">
      <!-- Basic Toasts -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Basic Toasts
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <PrtBtn @click="showBasicToast">Show Basic Toast</PrtBtn>
          <PrtBtn @click="showDismissibleToast"
          >Show Dismissible Toast</PrtBtn
          >
        </div>
      </section>

      <!-- Toast Types -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Toast Types
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <PrtBtn @click="() => showToast('info')">Info Toast</PrtBtn>
          <PrtBtn @click="() => showToast('success')"
          >Success Toast</PrtBtn
          >
          <PrtBtn @click="() => showToast('warning')"
          >Warning Toast</PrtBtn
          >
          <PrtBtn @click="() => showToast('error')"
          >Error Toast</PrtBtn
          >
        </div>
      </section>

      <!-- Positions -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Positions
        </h2>
        <div class="grid grid-cols-3 gap-4">
          <PrtBtn @click="() => showPositionedToast('top-left')"
          >Top Left</PrtBtn
          >
          <PrtBtn @click="() => showPositionedToast('top-center')"
          >Top Center</PrtBtn
          >
          <PrtBtn @click="() => showPositionedToast('top-right')"
          >Top Right</PrtBtn
          >
          <PrtBtn @click="() => showPositionedToast('bottom-left')"
          >Bottom Left</PrtBtn
          >
          <PrtBtn @click="() => showPositionedToast('bottom-center')"
          >Bottom Center</PrtBtn
          >
          <PrtBtn @click="() => showPositionedToast('bottom-right')"
          >Bottom Right</PrtBtn
          >
        </div>
      </section>

      <!-- Styles -->
      <section class="space-y-4">
        <h2 class="border-b border-neutral-800 pb-2 text-lg text-white">
          Styles
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <PrtBtn @click="() => showStyledToast('square')"
          >Square Toast</PrtBtn
          >
          <PrtBtn @click="() => showStyledToast('rounded')"
          >Rounded Toast</PrtBtn
          >
          <PrtBtn @click="() => showStyledToast('circle')"
          >Pill Toast</PrtBtn
          >
          <PrtBtn @click="showBouncyToast">Bouncy Toast</PrtBtn>
        </div>
      </section>
    </div>

    <!-- Toast Components -->
    <PrtToast v-model="showBasic" type="default" :duration="3000">
      This is a basic toast message
    </PrtToast>

    <PrtToast
        v-model="showWithDismiss"
        type="default"
        :dismissible="true"
        :duration="0"
        bg-color="bg-neutral-800"
        button-color="bg-el-7"
    >
      Click the X to dismiss this toast
    </PrtToast>

    <PrtToast
        v-model="show"
        :type="currentType"
        :position="currentPosition"
        :edges="currentEdges"
        :bounce="bounce"
        :duration="3000"
    >
      {{ toastMessage }}
    </PrtToast>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ToastVariant, ToastPosition, ToastEdges } from "./types";

// Basic toasts
const showBasic = ref(false);
const showWithDismiss = ref(false);

// Configured toast
const show = ref(false);
const currentType = ref<ToastVariant>("default");
const currentPosition = ref<ToastPosition>("top-right");
const currentEdges = ref<ToastEdges>("rounded");
const bounce = ref(false);
const toastMessage = ref("");

// Basic toast handlers
const showBasicToast = () => {
  showBasic.value = true;
};

const showDismissibleToast = () => {
  showWithDismiss.value = true;
};

// Type-based toast
const showToast = (type: ToastVariant) => {
  currentType.value = type;
  toastMessage.value = `This is a ${type} toast message`;
  show.value = true;
};

// Position-based toast
const showPositionedToast = (position: ToastPosition) => {
  currentPosition.value = position;
  currentType.value = "info";
  toastMessage.value = `Toast in ${position.replace("-", " ")} position`;
  show.value = true;
};

// Style-based toast
const showStyledToast = (edges: ToastEdges) => {
  currentEdges.value = edges;
  currentType.value = "success";
  toastMessage.value = `Toast with ${edges} edges`;
  show.value = true;
};

// Bouncy toast
const showBouncyToast = () => {
  bounce.value = true;
  currentType.value = "warning";
  toastMessage.value = "Bouncy toast message!";
  show.value = true;
  setTimeout(() => {
    bounce.value = false;
  }, 3000);
};
</script>
