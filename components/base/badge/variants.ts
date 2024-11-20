import { cva } from 'class-variance-authority'

export const variants = cva(
  'absolute inline-flex items-center justify-center min-w-[20px] z-10',
  {
    variants: {
      position: {
        'top-right': '-top-2 -right-2',
        'top-left': '-top-2 -left-2',
        'bottom-right': '-bottom-2 -right-2',
        'bottom-left': '-bottom-2 -left-2',
      },
      size: {
        sm: 'h-5 px-1.5 text-xs rounded',
        base: 'h-6 px-2 text-sm rounded-md',
        lg: 'h-7 px-2.5 text-base rounded-md',
      },
    },
    defaultVariants: {
      position: 'top-right',
      size: 'base',
    },
  }
)