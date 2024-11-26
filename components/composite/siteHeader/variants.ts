import { cva } from 'class-variance-authority'

export const headerVariants = cva('w-full transition-colors duration-200', {
  variants: {
    variant: {
      default: [
        'bg-neutral-900',
        'border-b',
        'border-neutral-800'
      ],
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})