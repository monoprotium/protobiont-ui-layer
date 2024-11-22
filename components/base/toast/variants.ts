import { cva } from "class-variance-authority";

export const toastVariants = cva("fixed z-50 pointer-events-none", {
  variants: {
    position: {
      "top-right": "top-4 right-4",
      "top-left": "top-4 left-4",
      "bottom-right": "bottom-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "top-center": "top-4 left-1/2 -translate-x-1/2",
      "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    },
    variant: {
      default: "",
      info: "",
      success: "",
      warning: "",
      error: "",
    },
    edges: {
      square: "",
      rounded: "",
      circle: "",
    },
  },
  defaultVariants: {
    position: "top-right",
    variant: "default",
    edges: "rounded",
  },
});

export const contentVariants = cva("p-3 shadow-lg overflow-hidden", {
  variants: {
    variant: {
      default: "bg-neutral-800 text-white",
      info: "bg-blue-600 text-white",
      success: "bg-green-600 text-white",
      warning: "bg-amber-600 text-white",
      error: "bg-red-600 text-white",
    },
    edges: {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    edges: "rounded",
  },
});