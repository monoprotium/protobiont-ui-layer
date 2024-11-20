import { cva } from "class-variance-authority";

export const iconVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "w-1 h-1", // 4px
      sm: "w-2 h-2", // 8px
      base: "w-4 h-4", // 16px
      lg: "w-6 h-6", // 24px
      xl: "w-8 h-8", // 32px
      "2xl": "w-12 h-12", // 48px
      "3xl": "w-16 h-16", // 64px
      "4xl": "w-24 h-24", // 96px
    },
  },
  defaultVariants: {
    size: "base",
  },
});
