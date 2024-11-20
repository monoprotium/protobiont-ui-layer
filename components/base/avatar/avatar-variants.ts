import { cva } from 'class-variance-authority'

export const avatarVariants = cva(
  'inline-flex items-center justify-center overflow-hidden bg-gray-100 relative', // Added relative positioning
  {
    variants: {
      size: {
        sm: 'w-12 h-12 text-xs',
        base: 'w-24 h-24 text-base',
        lg: 'w-36 h-36 text-lg',
      },
      edges: {
        square: 'rounded-none',
        rounded: 'rounded-lg',
        circle: 'rounded-full',
      },
      hasError: {
        true: 'border-2 border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'base',
      edges: 'circle',
      hasError: false,
    },
  }
)