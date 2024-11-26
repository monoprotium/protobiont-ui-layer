import { cva } from 'class-variance-authority'

export const checkoutFormVariants = cva(
    'grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-200',
    {
      variants: {
        loading: {
          true: 'opacity-50 pointer-events-none',
          false: 'opacity-100'
        }
      },
      defaultVariants: {
        loading: false
      }
    }
)

export const sectionTitleVariants = cva(
    'font-semibold text-white mb-6',
    {
      variants: {
        size: {
          sm: 'text-lg',
          base: 'text-xl',
          lg: 'text-2xl'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)