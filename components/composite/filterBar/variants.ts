import { cva } from 'class-variance-authority'

export const filterBarVariants = cva('prt-filter-bar', {
  variants: {
    direction: {
      horizontal: 'flex flex-row flex-wrap gap-4',
      vertical: 'flex flex-col gap-2'
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg'
    },
    disabled: {
      true: 'opacity-50 pointer-events-none'
    }
  },
  defaultVariants: {
    direction: 'vertical',
    size: 'base'
  }
})

export const filterItemVariants = cva('transition-colors duration-200', {
  variants: {
    size: {
      sm: 'gap-1.5',
      base: 'gap-2',
      lg: 'gap-2.5'
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer'
    }
  },
  defaultVariants: {
    size: 'base'
  }
})