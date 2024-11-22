export type RatingSize = "sm" | "base" | "lg";

export interface RatingProps {
  modelValue: number;
  max?: number;
  size?: RatingSize;
  color?: string;
  disabled?: boolean;
}