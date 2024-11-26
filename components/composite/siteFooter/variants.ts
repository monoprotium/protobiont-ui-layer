import { cva } from 'class-variance-authority'

export const footerVariants = cva('w-full text-neutral-400 flex flex-col', {
  variants: {
    variant: {
      default: 'bg-neutral-800',
      minimal: 'bg-neutral-900 border-t border-neutral-800',
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})