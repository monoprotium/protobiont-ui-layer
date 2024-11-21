import { cva } from "class-variance-authority";

export const containerVariants = cva("flex items-center overflow-hidden", {
  variants: {
    variant: {
      filled: "bg-neutral-900",
      outline: "border-2 border-neutral-800",
      minimal: "bg-transparent",
    },
    size: {
      sm: "h-8",
      base: "h-10",
      lg: "h-12",
    },
    width: {
      auto: "w-auto",
      full: "w-full",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
    error: {
      true: "border-red-500",
      false: "",
    },
    edges: {
      square: "rounded-none",
      rounded: "rounded",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "base",
    width: "auto",
    disabled: false,
    error: false,
    edges: "square",
  },
});

export const buttonVariants = cva(
  "flex items-center justify-center transition-colors duration-200",
  {
    variants: {
      variant: {
        filled: "bg-el-7 hover:bg-el-7/90 text-white",
        outline: "bg-neutral-800 hover:bg-neutral-700 text-white",
        minimal: "bg-neutral-800 hover:bg-neutral-700 text-white",
      },
      size: {
        sm: "w-8 h-8 text-sm",
        base: "w-10 h-10",
        lg: "w-12 h-12 text-lg",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50 hover:bg-neutral-800",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "base",
      disabled: false,
    },
  },
);

export const inputVariants = cva(
  "bg-transparent text-center focus:outline-none text-white w-full",
  {
    variants: {
      size: {
        sm: "text-sm px-1",
        base: "text-base px-2",
        lg: "text-lg px-3",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "base",
      disabled: false,
    },
  },
);
