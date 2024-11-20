import { cva } from 'class-variance-authority'
import type { Variant } from './types'

const baseStyles = 'fixed bottom-4 right-4 rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out'

export const variants = cva(baseStyles, {
  variants: {
    size: {
      sm: 'w-8 h-8',
      base: 'w-12 h-12',
      lg: 'w-16 h-16'
    },
    variant: {
      solid: 'shadow-md',
      outline: 'bg-transparent border-2'
    }
  },
  defaultVariants: {
    size: 'base',
    variant: 'solid'
  }
})

export const getColorClasses = (variant: Variant, color: string): string[] => {
  const baseColor = color.replace('bg-', '')
  return variant === 'solid'
      ? [color, 'text-white', 'hover:opacity-90']
      : [`border-${baseColor}`, `text-${baseColor}`, `hover:${color}`, 'hover:text-white']
}