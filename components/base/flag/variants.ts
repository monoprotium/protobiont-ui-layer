import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva(
    'inline-flex items-center justify-center overflow-hidden',
    {
      variants: {
        size: {
          sm: 'w-6 h-4',    // 3:2 ratio
          base: 'w-9 h-6',  // 3:2 ratio
          lg: 'w-12 h-8',   // 3:2 ratio
        },
      },
      defaultVariants: {
        size: 'base',
      },
    }
)

export type FlagVariants = VariantProps<typeof variants>
export { variants }