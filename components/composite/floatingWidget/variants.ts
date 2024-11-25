import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
    'relative z-10 flex items-center justify-center rounded-full transition-transform duration-200',
    {
      variants: {
        size: {
          sm: 'w-10 h-10',
          base: 'w-12 h-12',
          lg: 'w-14 h-14'
        },
        active: {
          true: 'rotate-45',
          false: 'rotate-0'
        }
      },
      defaultVariants: {
        size: 'base',
        active: false
      }
    }
)

export const menuVariants = cva(
    'absolute flex transition-all duration-200 ease-out whitespace-nowrap',
    {
      variants: {
        position: {
          top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
          bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
          left: 'right-full top-1/2 -translate-y-1/2 mr-2',
          right: 'left-full top-1/2 -translate-y-1/2 ml-2'
        },
        direction: {
          horizontal: 'flex-row items-center gap-2',
          vertical: 'flex-col items-center gap-2'
        },
        open: {
          true: 'opacity-100 scale-100 pointer-events-auto',
          false: 'opacity-0 scale-95 pointer-events-none'
        }
      },
      defaultVariants: {
        position: 'bottom',
        direction: 'horizontal',
        open: false
      }
    }
)