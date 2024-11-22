export type SkeletonSize = "sm" | "base" | "lg";
export type SkeletonVariant = "default" | "card" | "avatar";
export type SkeletonWidth = "sm" | "base" | "lg";

export interface SkeletonProps {
  loading?: boolean;
  title?: boolean;
  card?: boolean;
  avatar?: boolean;
  rows?: number;
  size?: SkeletonSize;
  class?: string;
}