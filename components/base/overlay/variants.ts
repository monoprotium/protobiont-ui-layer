import { cva } from "class-variance-authority";

export const variants = cva(
    "prt-overlay fixed inset-0 flex items-center justify-center transition-all",
    {
      variants: {
        color: {
          default: "bg-black/50",
          dark: "bg-black/75",
          light: "bg-white/25",
          blur: "backdrop-blur-sm bg-black/30",
        },
        position: {
          center: "items-center justify-center",
          top: "items-start justify-center",
          bottom: "items-end justify-center",
        },
      },
      defaultVariants: {
        color: "default",
        position: "center",
      },
    }
);

export const contentVariants = cva("relative w-full transition-all", {
  variants: {
    size: {
      sm: "max-w-sm",
      base: "max-w-md",
      lg: "max-w-lg",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "base",
  },
});
