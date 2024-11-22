<template>
  <div class="flex flex-col  text-gray-100">

    <header class="text-left">
      <h1 class="text-3xl font-bold mb-4 ">Slider</h1>
    </header>

    <div id="sliders" class="w-full space-y-8">
      <!-- Basic Examples Section -->
      <div class="space-y-8">
        <h2 class="text-xl text-white pb-2">Basic Examples</h2>

        <!-- Vertical Single Value Slider -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">Vertical Single Value Slider</h3>
          <div class="h-[200px]">
            <PrtSlider
                v-model="sliderValue"
                orientation="vertical"
                :max="100"
                :min="0"
                @change="handleSliderChange"
            />
          </div>
          <p class="text-gray-200">
            Slider Value: <strong>{{ sliderValue }}</strong>
          </p>
        </div>

        <!-- Horizontal Single Value Slider -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">Horizontal Single Value Slider</h3>
          <div class="max-w-[200px]">
            <PrtSlider
                v-model="sliderValueHoriz"
                orientation="horizontal"
                :max="100"
                :min="0"
                @change="handleSliderChange"
            />
          </div>
          <p class="text-gray-200">
            Slider Value: <strong>{{ sliderValueHoriz }}</strong>
          </p>
        </div>

        <!-- Vertical Range Slider -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">Vertical Range Slider</h3>
          <div class="h-[200px]">
            <PrtSlider
                v-model="rangeSliderValueVert"
                orientation="vertical"
                :max="100"
                :min="0"
                :range="true"
                @change="handleRangeSliderChange"
            />
          </div>
          <p class="text-gray-200">
            Range Values:
            <strong>{{ rangeSliderValueVert.join(" - ") }}</strong>
          </p>
        </div>

        <!-- Horizontal Range Slider -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">Horizontal Range Slider</h3>
          <div class="max-w-[200px]">
            <PrtSlider
                v-model="rangeSliderValue"
                orientation="horizontal"
                :max="100"
                :min="0"
                :range="true"
                @change="handleRangeSliderChange"
            />
          </div>
          <p class="text-gray-200">
            Range Values:
            <strong>{{ rangeSliderValue.join(" - ") }}</strong>
          </p>
        </div>
      </div>

      <!-- Style Variations Section -->
      <div class="space-y-8 mt-12">
        <h2 class="text-xl text-white pb-2">Style Variations</h2>

        <!-- Square Handles -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">
            Square Handles with Purple Accent
          </h3>
          <div class="max-w-[200px]">
            <PrtSlider
                v-model="styleValue1"
                handle-edges="square"
                handle-color="bg-el-4"
                range-color="bg-el-4"
                bg-color="bg-neutral-700"
            />
          </div>
          <p class="text-gray-200">
            Value: <strong>{{ styleValue1 }}</strong>
          </p>
        </div>

        <!-- Rounded Handles -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">
            Rounded Handles with Green Accent
          </h3>
          <div class="max-w-[200px]">
            <PrtSlider
                v-model="styleValue2"
                handle-edges="rounded"
                handle-color="bg-el-3"
                range-color="bg-el-3"
                bg-color="bg-neutral-700"
            />
          </div>
          <p class="text-gray-200">
            Value: <strong>{{ styleValue2 }}</strong>
          </p>
        </div>

        <!-- Circle Handles Range -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">
            Circle Handles Range with Pink Accent
          </h3>
          <div class="max-w-[200px]">
            <PrtSlider
                v-model="styleRangeValue"
                :range="true"
                handle-edges="circle"
                handle-color="bg-el-5"
                range-color="bg-el-5"
                bg-color="bg-neutral-700"
            />
          </div>
          <p class="text-gray-200">
            Range Values:
            <strong>{{ styleRangeValue.join(" - ") }}</strong>
          </p>
        </div>

        <!-- Vertical with Custom Colors -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">Vertical with Red Accent</h3>
          <div class="h-[200px]">
            <PrtSlider
                v-model="styleValue3"
                orientation="vertical"
                handle-edges="rounded"
                handle-color="bg-el-8"
                range-color="bg-el-8"
                bg-color="bg-neutral-700"
            />
          </div>
          <p class="text-gray-200">
            Value: <strong>{{ styleValue3 }}</strong>
          </p>
        </div>

        <!-- Disabled State Example -->
        <div class="space-y-2">
          <h3 class="text-white pb-8">Disabled Slider</h3>
          <div class="max-w-[200px]">
            <PrtSlider
                v-model="disabledValue"
                :disabled="true"
                handle-edges="circle"
                handle-color="bg-el-7"
                range-color="bg-el-7"
                bg-color="bg-neutral-700"
            />
          </div>
          <p class="text-gray-200">
            Value: <strong>{{ disabledValue }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Basic examples values
const sliderValue = ref(48);
const sliderValueHoriz = ref(18);
const rangeSliderValue = ref([34, 75]);
const rangeSliderValueVert = ref([25, 75]);

// Style variations values  
const styleValue1 = ref(30);
const styleValue2 = ref(60);
const styleValue3 = ref(45);
const styleRangeValue = ref([20, 80]);
const disabledValue = ref(50);

// Event handlers
const handleSliderChange = (value: number) => {
  console.log("Slider value changed:", value);
};

const handleRangeSliderChange = (value: [number, number]) => {
  console.log("Range slider value changed:", value);
};
</script>