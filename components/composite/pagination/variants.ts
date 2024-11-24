import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    'flex items-center gap-1',
    {
      variants: {
        size: {
          sm: 'scale-90',
          base: 'scale-100',
          lg: 'scale-110',
        },
      },
      defaultVariants: {
        size: 'base',
      },
    }
)

export const itemVariants = cva(
    'relative inline-flex items-center justify-center transition-colors duration-200',
    {
      variants: {
        variant: {
          default: 'min-w-[36px] h-9',
          bordered: 'min-w-[40px] h-10 border',
        },
        state: {
          default: [
            'text-neutral-400 hover:text-white',
            'hover:bg-neutral-700',
            'bg-neutral-800',
          ],
          active: [
            'text-white',
            'bg-blue-600',
            'hover:bg-blue-600',
          ],
          disabled: [
            'text-neutral-600',
            'pointer-events-none',
            'opacity-50',
            'bg-neutral-800',
          ],
        },
      },
      defaultVariants: {
        variant: 'default',
        state: 'default',
      },
    }
)