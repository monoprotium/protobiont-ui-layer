export type ToggleSize = "sm" | "base" | "lg";

export interface ToggleProps {
  modelValue: boolean;
  disabled?: boolean;
  bgColor?: string;
  size?: ToggleSize;
}

export type TranslateClasses = {
  checked: Record<ToggleSize, string>;
  unchecked: Record<ToggleSize, string>;
};