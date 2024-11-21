import { cva } from "class-variance-authority";

export const variants = cva("relative flex items-center justify-center", {
  variants: {
    size: {
      sm: "w-4 h-4",
      base: "w-6 h-6",
      lg: "w-12 h-12",
    },
    variant: {
      spinner: "",
      dots: "",
      rectangles: "",
    },
    color: {
      primary: "text-el-7",
      success: "text-el-3",
      warning: "text-el-8",
      gray: "text-gray-400",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "spinner",
    color: "gray",
  },
});

export type LoaderVariants = VariantProps<typeof variants>;
