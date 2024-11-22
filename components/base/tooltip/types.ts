export type TooltipVariant = "default" | "primary" | "success" | "warning" | "danger";
export type TooltipPlacement = "top" | "bottom" | "left" | "right";
export type TooltipTrigger = "click" | "hover";

export interface TooltipProps {
  content?: string;
  variant?: TooltipVariant;
  placement?: TooltipPlacement;
  disabled?: boolean;
  trigger?: TooltipTrigger;
  customClass?: string;
  bgColor?: string;
  textColor?: string;
}

export type VariantColors = {
  [K in TooltipVariant]: string;
};