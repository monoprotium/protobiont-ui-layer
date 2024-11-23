import { cva } from 'class-variance-authority'
import type { CollapsibleSize } from './types'

export const collapsibleVariants = cva(
    'divide-y divide-neutral-800 rounded-lg overflow-hidden',
    {
      variants: {
        size: {
          sm: 'text-sm',
          base: 'text-base',
          lg: 'text-lg'
        } satisfies Record<CollapsibleSize, string>
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const headerVariants = cva(
    'flex items-center w-full px-4 py-3 transition-colors duration-200 text-neutral-100',
    {
      variants: {
        active: {
          true: 'bg-opacity-90',
          false: ''
        }
      },
      defaultVariants: {
        active: false
      }
    }
)

export const contentVariants = cva('overflow-hidden bg-neutral-800/50', {
  variants: {
    size: {
      sm: 'p-3',
      base: 'p-4',
      lg: 'p-6'
    }
  },
  defaultVariants: {
    size: 'base'
  }
})