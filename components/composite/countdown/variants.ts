import { cva } from 'class-variance-authority'

export const numberVariants = cva(
    'flex items-center justify-center font-mono font-bold min-w-[3ch]',
    {
      variants: {
        size: {
          sm: 'text-xl px-2 py-1',
          base: 'text-3xl px-3 py-2',
          lg: 'text-4xl px-4 py-3'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const labelVariants = cva(
    'mt-1 capitalize text-neutral-300',
    {
      variants: {
        size: {
          sm: 'text-xs',
          base: 'text-sm',
          lg: 'text-base'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const separatorVariants = cva(
    'font-mono font-bold opacity-50 self-start',
    {
      variants: {
        size: {
          sm: 'text-xl mt-1',
          base: 'text-3xl mt-2',
          lg: 'text-4xl mt-3'
        }
      },
      defaultVariants: {
        size: 'base'
      }
    }
)