import { cva } from 'class-variance-authority'

export const variants = cva(
  'flex flex-wrap items-center gap-1.5 break-words', 
  {
    variants: {
      size: {
        sm: 'text-xs gap-1',
        base: 'text-sm gap-1.5',
        lg: 'text-base gap-2',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  }
)