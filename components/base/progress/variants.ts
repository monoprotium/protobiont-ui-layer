// components/base/progress/variants.ts
import { cva } from "class-variance-authority";

export const variants = cva("progress", {
  variants: {
    type: {
      circle: "",
      line: "",
    },
    size: {
      sm: "progress--sm",
      base: "progress--base",
      lg: "progress--lg",
    },

  },
  defaultVariants: {
    type: "line",
    size: "base",
  },
});