import { cva } from "class-variance-authority";

export const ratingVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      base: "gap-4",
      lg: "gap-6",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "base",
    disabled: false,
  },
});

export const ratingItemVariants = cva("transition-all cursor-pointer outline-none", {
  variants: {
    size: {
      sm: "w-3 h-3",
      base: "w-5 h-5",
      lg: "w-7 h-7",
    },
  },
  defaultVariants: {
    size: "base",
  },
});