<template>
  <div :class="containerVariants({ open: isOpen })" v-bind="$attrs">
    <!-- Select Trigger -->
    <div
        :class="selectClasses"
        @click="toggleDropdown"
        role="combobox"
        :aria-expanded="isOpen"
        :aria-disabled="disabled"
    >
      <div class="flex-1 truncate">
        <!-- Search Input -->
        <input
            v-if="searchable && isOpen"
            v-model="searchQuery"
            type="text"
            class="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/50"
            placeholder="Search..."
            @click.stop
        />
        <!-- Selected Value or Placeholder -->
        <span
            v-else
            :class="[selectedValue ? 'text-white' : 'text-white/50']"
        >
          {{ selectedLabel }}
        </span>
      </div>

      <div class="flex items-center gap-1">
        <!-- Clear Button -->
        <button
            v-if="clearable && modelValue && !disabled"
            type="button"
            :class="iconButtonVariants({ size })"
            class="bg-el-7"
            @click.stop="clearSelection"
        >
          <X class="w-full h-full" />
        </button>

        <!-- Loading Indicator -->
        <div
            v-if="loading"
            :class="iconButtonVariants({ size })"
        >
          <Loader class="w-full h-full animate-spin" />
        </div>

        <!-- Dropdown Arrow -->
        <div :class="iconButtonVariants({ size })">
          <ChevronDown
              class="w-full h-full transition-transform"
              :class="{ 'rotate-180': isOpen }"
          />
        </div>
      </div>
    </div>

    <!-- Dropdown -->
    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" :class="[dropdownClasses, 'max-h-[280px]']">
        <!-- Empty State -->
        <div
            v-if="filteredOptions.length === 0"
            class="px-3 py-2 text-white/50"
        >
          No options available
        </div>

        <!-- Options List -->
        <template v-else>
          <div
              v-for="option in filteredOptions"
              :key="option.value"
              :class="[
              optionVariants({
                selected: option.value === modelValue,
                disabled: option.disabled,
                withIcon: option.icon,
              }),
              option.value === modelValue ? color || 'bg-el-7' : '',
            ]"
              @click="selectOption(option)"
          >
            <slot
                name="option-icon"
                v-if="option.icon"
                :option="option"
                :selected="option.value === modelValue"
            >
              <component
                  :is="option.icon"
                  :class="iconButtonVariants({ size })"
              />
            </slot>
            {{ option.label }}
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronDown, X, Loader } from "lucide-vue-next";
import { onClickOutside } from "@vueuse/core";
import {
  selectVariants,
  dropdownVariants,
  optionVariants,
  iconButtonVariants,
  containerVariants,
} from "./variants";
import type { SelectProps, SelectOption } from "./types";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: "Select an option",
  size: "base",
  variant: "solid",
  edges: "square",
  color: "",
  error: false,
  disabled: false,
  searchable: false,
  clearable: false,
  loading: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  change: [value: string | number];
}>();

const isOpen = ref(false);
const searchQuery = ref("");
const selectRef = ref<HTMLElement | null>(null);

const selectClasses = computed(() =>
    selectVariants({
      variant: props.variant,
      size: props.size,
      edges: props.edges,
      error: props.error,
      disabled: props.disabled,
    })
);

const dropdownClasses = computed(() =>
    dropdownVariants({
      edges: props.edges,
      position: "bottom",
    })
);

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options;
  }
  const query = searchQuery.value.toLowerCase();
  return props.options.filter(opt =>
      opt.label.toLowerCase().includes(query)
  );
});

const selectedLabel = computed(() =>
    props.options.find(opt => opt.value === props.modelValue)?.label || props.placeholder
);

const selectedValue = computed(() => props.modelValue);

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      searchQuery.value = "";
    }
  }
};

const selectOption = (option: SelectOption) => {
  if (!option.disabled) {
    emit("update:modelValue", option.value);
    emit("change", option.value);
    isOpen.value = false;
  }
};

const clearSelection = () => {
  emit("update:modelValue", "");
  emit("change", "");
};

onClickOutside(selectRef, () => {
  isOpen.value = false;
});

defineExpose({
  isOpen,
  selectedValue,
});
</script>