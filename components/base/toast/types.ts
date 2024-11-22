export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
export type ToastVariant = "default" | "info" | "success" | "warning" | "error";
export type ToastEdges = "square" | "rounded" | "circle";

export interface ToastProps {
  modelValue: boolean;
  position?: ToastPosition;
  type?: ToastVariant;
  edges?: ToastEdges;
  duration?: number;
  bounce?: boolean;
  icon?: boolean;
  dismissible?: boolean;
  bgColor?: string;
  buttonColor?: string;
}