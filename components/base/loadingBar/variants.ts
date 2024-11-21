import { cva } from 'class-variance-authority'
import type { LoadingBarSize, LoadingBarVariant } from './types'

export const variants = cva('fixed top-0 left-0 w-full z-50', {
  variants: {
    size: {
      sm: 'h-1',
      base: 'h-2',
      lg: 'h-4'
    } as Record<LoadingBarSize, string>
  },
  defaultVariants: {
    size: 'base'
  }
})

export const progressVariants = cva('h-full transition-all duration-200 ease-in', {
  variants: {
    variant: {
      default: 'bg-el-7',
      success: 'bg-el-3',
      error: 'bg-el-8'
    } as Record<LoadingBarVariant, string>
  },
  defaultVariants: {
    variant: 'default'
  }
})