import { cva } from "class-variance-authority";

export const skeletonVariants = cva(
    "relative overflow-hidden bg-neutral-800 animate-pulse",
    {
      variants: {
        variant: {
          default: "",
          card: "p-4 rounded-lg",
          avatar: "rounded-full",
        },
        size: {
          sm: "h-4",
          base: "h-6",
          lg: "h-8",
        },
        width: {
          sm: "w-16",
          base: "w-full",
          lg: "w-32",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "base",
        width: "base",
      },
    }
);

export const avatarVariants = cva("", {
  variants: {
    size: {
      sm: "h-8 w-8",
      base: "h-12 w-12",
      lg: "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "base",
  },
});