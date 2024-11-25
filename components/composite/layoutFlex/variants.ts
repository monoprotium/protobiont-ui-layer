import { cva } from 'class-variance-authority'

export const layoutFlexVariants = cva(
    'flex flex-wrap',
    {
      variants: {
        gap: {
          sm: 'gap-2',
          md: 'gap-4',
          lg: 'gap-6',
          xl: 'gap-8'
        }
      },
      defaultVariants: {
        gap: 'md'
      }
    }
)

