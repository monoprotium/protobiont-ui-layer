import { cva } from 'class-variance-authority'

export const stepsContainerVariants = cva(
    'p-6 rounded-lg w-full',
    {
      variants: {
        size: {
          sm: 'space-y-4',
          base: 'space-y-6',
          lg: 'space-y-8'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const stepIndicatorVariants = cva(
    [
      'rounded-full',
      'flex items-center justify-center',
      'transition-all duration-200',
      'cursor-pointer'
    ].join(' '),
    {
      variants: {
        size: {
          sm: 'w-6 h-6 text-sm',
          base: 'w-8 h-8 text-base',
          lg: 'w-10 h-10 text-lg'
        },
        state: {
          complete: 'bg-neutral-600 hover:bg-neutral-500 text-white',
          current: 'bg-el-7 text-white',
          upcoming: 'bg-neutral-800 text-neutral-400'
        },
        disabled: {
          true: 'cursor-not-allowed opacity-50',
          false: ''
        }
      },
      defaultVariants: {
        size: 'base',
        state: 'upcoming',
        disabled: false
      }
    }
)