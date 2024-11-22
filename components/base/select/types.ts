import type { Component } from "vue";

export type SelectSize = "sm" | "base" | "lg";
export type SelectVariant = "solid" | "outline" | "ghost";
export type SelectEdges = "square" | "rounded" | "pill";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: Component;
}

export interface SelectProps {
  modelValue: string | number;
  options: SelectOption[];
  placeholder?: string;
  size?: SelectSize;
  variant?: SelectVariant;
  edges?: SelectEdges;
  color?: string;
  error?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
}