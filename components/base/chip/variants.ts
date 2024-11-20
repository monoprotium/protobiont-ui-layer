import { cva, type VariantProps } from "class-variance-authority"
import type { ChipVariant } from "./types"

const baseStyles = "inline-flex items-center justify-center rounded font-medium transition-colors duration-150 cursor-default"

export const chipVariants = cva(baseStyles, {
  variants: {
    variant: {
      solid: undefined,
      outline: "bg-transparent border",
      ghost: "bg-transparent",
    },
    size: {
      sm: "text-xs py-0.5 px-2",
      base: "text-sm py-1 px-3",
      lg: "text-base py-1.5 px-4",
    },
    clickable: {
      true: "cursor-pointer hover:opacity-90",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "base",
    clickable: false,
    disabled: false,
  },
})

export type ChipVariants = VariantProps<typeof chipVariants>

export const getChipColors = (
    variant: ChipVariant,
    color: string,
    disabled: boolean,
): string[] => {
  if (disabled) {
    return ["text-gray-400", "bg-gray-500"]
  }

  const baseColor = color.replace("bg-", "")

  const variantStyles = {
    solid: [color, "text-white"],
    outline: [
      `border-${baseColor}`,
      `text-${baseColor}`,
      `hover:bg-${baseColor}`,
      "hover:text-white",
    ],
    ghost: [
      `text-${baseColor}`,
      `hover:bg-${baseColor}`,
      "hover:bg-opacity-10",
    ],
  }

  return variantStyles[variant]
}