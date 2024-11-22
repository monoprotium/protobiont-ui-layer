export type RadioSize = "sm" | "base" | "lg";
export type RadioShape = "square" | "rounded" | "circle";

export interface RadioProps {
  modelValue: string | number;
  value: string | number;
  size?: RadioSize;
  shape?: RadioShape;
  color?: string;
  disabled?: boolean;
  name?: string;
}