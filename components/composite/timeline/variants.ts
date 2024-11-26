// variants.ts
import { cva } from 'class-variance-authority'

export const timelineContainerVariants = cva('relative', {
  variants: {
    minHeight: {
      default: 'min-h-[300px]',
      tall: 'min-h-[400px]'
    }
  },
  defaultVariants: {
    minHeight: 'default'
  }
})

export const timelineDotVariants = cva(
    ['rounded-full', 'border-2', 'z-10', 'transition-all', 'duration-200'],
    {
      variants: {
        size: {
          sm: 'w-6 h-6',
          base: 'w-8 h-8',
          lg: 'w-10 h-10'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const timelineLineVariants = cva(
    ['absolute', 'transition-all', 'duration-200'],
    {
      variants: {
        width: {
          thin: 'w-px',
          base: 'w-0.5',
          thick: 'w-1'
        }
      },
      defaultVariants: {
        width: 'base'
      }
    }
)

export const timelineContentVariants = cva(
    ['bg-neutral-900', 'p-4', 'rounded-lg', 'shadow-lg', 'transition-all', 'duration-200'],
    {
      variants: {
        orientation: {
          vertical: 'w-[calc(50%-2rem)]',
          horizontal: 'w-64'
        }
      },
      defaultVariants: {
        orientation: 'vertical'
      }
    }
)
