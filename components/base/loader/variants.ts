import { cva } from 'class-variance-authority'
import type { LoaderType, LoaderSize, LoaderColor } from './types'

export const variants = cva('relative flex items-center justify-center', {
  variants: {
    variant: {
      spinner: '',
      dots: '',
      rectangles: ''
    } as Record<LoaderType, string>,
    size: {
      sm: 'w-4 h-4',
      base: 'w-6 h-6',
      lg: 'w-12 h-12'
    } as Record<LoaderSize, string>,
    color: {
      primary: 'text-el-7',
      success: 'text-el-3',
      warning: 'text-el-8',
      gray: 'text-gray-400'
    } as Record<LoaderColor, string>
  },
  defaultVariants: {
    variant: 'spinner',
    size: 'base',
    color: 'gray'
  }
})