import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    'bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-hidden',
    {
      variants: {
        size: {
          sm: 'w-[400px]',
          base: 'w-[600px]',
          lg: 'w-[800px]',
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const contentVariants = cva('', {
  variants: {
    size: {
      sm: 'p-4',
      base: 'p-6',
      lg: 'p-8'
    }
  },
  defaultVariants: {
    size: 'base'
  }
})