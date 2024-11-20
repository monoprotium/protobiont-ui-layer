// variants.ts
import { cva } from "class-variance-authority";

const variants = {
  input: cva(
    "w-full transition-colors duration-200 outline-none text-white placeholder:text-neutral-500",
    {
      variants: {
        variant: {
          filled: [
            "bg-neutral-800",
            "hover:bg-neutral-700/80",
            "focus:bg-neutral-700",
            "focus:ring-1",
            "focus:ring-el-7",
          ],
          outline: [
            "bg-neutral-900",
            "border-2",
            "border-neutral-700",
            "hover:border-neutral-600",
            "focus:border-el-7",
            "focus:ring-1",
            "focus:ring-el-7",
          ],
          minimal: [
            "bg-neutral-900",
            "hover:bg-neutral-800",
            "focus:bg-neutral-800",
            "focus:ring-1",
            "focus:ring-el-7",
          ],
        },
        size: {
          sm: "h-8 text-sm px-3",
          base: "h-10 text-base px-4",
          lg: "h-12 text-lg px-5",
        },
        edges: {
          square: "rounded-none",
          rounded: "rounded-md",
          circle: "rounded-full",
        },
        disabled: {
          true: "opacity-50 cursor-not-allowed bg-neutral-800/50 hover:bg-neutral-800/50",
          false: "",
        },
        error: {
          true: "border-2 border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500",
          false: "",
        },
      },
      defaultVariants: {
        variant: "filled",
        size: "base",
        edges: "square",
        disabled: false,
        error: false,
      },
    },
  ),

  wrapper: cva("flex flex-col gap-1.5", {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }),

  label: cva("text-sm font-medium text-neutral-200", {
    variants: {
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
      error: {
        true: "text-red-500",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      error: false,
    },
  }),
};

export { variants as inputTextVariants };
