export type ProgressType = "circle" | "line";
export type ProgressSize = "sm" | "base" | "lg";

export interface ProgressProps {
  type?: ProgressType;
  size?: ProgressSize;
  color?: string;
  percent?: number;
  showLabel?: boolean;
}