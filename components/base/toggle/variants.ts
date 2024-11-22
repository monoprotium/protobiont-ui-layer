import { cva } from "class-variance-authority";

export const toggleVariants = cva(
    [
      "relative",
      "inline-flex",
      "shrink-0",
      "rounded-full",
      "border-2",
      "border-transparent",
      "transition-colors",
      "duration-200",
      "ease-in-out",
      "p-0.5",
    ].join(" "),
    {
      variants: {
        size: {
          sm: "min-h-5 w-10",
          base: "min-h-6 w-12",
          lg: "min-h-8 w-15",
        },
        disabled: {
          true: "opacity-60 cursor-not-allowed",
          false: "cursor-pointer hover:opacity-90",
        },
      },
      defaultVariants: {
        size: "base",
        disabled: false,
      },
    }
);

export const thumbVariants = cva(
    [
      "pointer-events-none",
      "inline-block",
      "rounded-full",
      "bg-white",
      "shadow-lg",
      "ring-0",
      "transition-transform",
      "duration-200",
    ].join(" "),
    {
      variants: {
        size: {
          sm: "h-4 w-4",
          base: "h-5 w-5",
          lg: "h-7 w-7",
        },
      },
      defaultVariants: {
        size: "base",
      },
    }
);