import { cva } from "class-variance-authority";

export const selectVariants = cva(
    "relative w-full flex items-center justify-between transition-colors duration-200 text-white",
    {
      variants: {
        variant: {
          solid: "bg-neutral-800 hover:bg-neutral-900",
          outline: "border-2 border-neutral-700 bg-neutral-800 hover:bg-neutral-900",
          ghost: "hover:bg-neutral-800",
        },
        size: {
          sm: "h-8 text-sm px-2 gap-1",
          base: "h-10 text-base px-3 gap-2",
          lg: "h-12 text-lg px-4 gap-2",
        },
        edges: {
          square: "rounded-none",
          rounded: "rounded-md",
          pill: "rounded-full",
        },
        error: {
          true: "border-red-500",
          false: "",
        },
        disabled: {
          true: "opacity-50 cursor-not-allowed",
          false: "cursor-pointer",
        },
      },
      defaultVariants: {
        variant: "solid",
        size: "base",
        edges: "rounded",
        error: false,
        disabled: false,
      },
    }
);

export const dropdownVariants = cva(
    "absolute left-0 right-0 overflow-auto py-1 mt-1 bg-neutral-800 text-white border border-neutral-700 shadow-lg",
    {
      variants: {
        edges: {
          square: "rounded-none",
          rounded: "rounded-md",
          pill: "rounded-xl",
        },
        position: {
          top: "bottom-full mb-1",
          bottom: "top-full mt-1",
        },
      },
      defaultVariants: {
        edges: "rounded",
        position: "bottom",
      },
    }
);

export const containerVariants = cva("relative isolate", {
  variants: {
    open: {
      true: "z-50",
      false: "z-10",
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const optionVariants = cva(
    "flex items-center px-3 py-2 transition-colors duration-150",
    {
      variants: {
        selected: {
          true: "bg-blue-600 text-white",
          false: "text-white hover:bg-neutral-700",
        },
        disabled: {
          true: "opacity-50 cursor-not-allowed bg-transparent",
          false: "cursor-pointer",
        },
        withIcon: {
          true: "gap-2",
          false: "",
        },
      },
      defaultVariants: {
        selected: false,
        disabled: false,
        withIcon: false,
      },
    }
);

export const iconButtonVariants = cva(
    "inline-flex items-center justify-center transition-colors rounded-sm text-white/70 hover:text-white",
    {
      variants: {
        size: {
          sm: "w-4 h-4",
          base: "w-5 h-5",
          lg: "w-6 h-6",
        },
      },
      defaultVariants: {
        size: "base",
      },
    }
);