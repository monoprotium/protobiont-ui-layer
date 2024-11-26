import { cva } from 'class-variance-authority'

export const footerVariants = cva(
    [
      'fixed',
      'bottom-0',
      'left-0',
      'right-0',
      'w-full',
      'bg-neutral-900',
      'py-2',
      'transition-all',
      'duration-200',
      'z-50'
    ],
    {
      variants: {
        size: {
          sm: 'min-h-14',
          base: 'min-h-16',
          lg: 'min-h-20'
        },
        variant: {
          default: 'border-t border-neutral-800',
          floating: 'm-4 rounded-full shadow-lg max-w-screen-sm mx-auto',
          bordered: 'border border-neutral-800 m-4 rounded-xl max-w-screen-sm mx-auto'
        }
      },
      defaultVariants: {
        size: 'base',
        variant: 'default'
      }
    }
)

export const itemVariants = cva(
    'transition-colors duration-200',
    {
      variants: {
        active: {
          true: 'text-blue-500',
          false: 'text-neutral-400 hover:text-neutral-300'
        }
      },
      defaultVariants: {
        active: false
      }
    }
)

export const iconVariants = cva(
    'flex items-center justify-center',
    {
      variants: {
        size: {
          sm: 'w-5 h-5',
          base: 'w-6 h-6',
          lg: 'w-7 h-7'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const iconColorVariants = cva(
    'transition-colors duration-200',
    {
      variants: {
        active: {
          true: 'text-blue-500',
          false: 'text-neutral-400 group-hover:text-neutral-300'
        }
      },
      defaultVariants: {
        active: false
      }
    }
)

export const labelVariants = cva(
    'text-xs font-medium',
    {
      variants: {
        active: {
          true: 'text-blue-500',
          false: 'text-neutral-400 group-hover:text-neutral-300'
        }
      },
      defaultVariants: {
        active: false
      }
    }
)