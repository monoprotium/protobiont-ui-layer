import { cva } from 'class-variance-authority'
import type { PopupSize } from './types'

export const popupVariants = cva(
    'bg-neutral-800 rounded-lg shadow-xl max-w-md w-full',
    {
      variants: {
        size: {
          sm: 'text-sm',
          base: 'text-base',
          lg: 'text-lg'
        } satisfies Record<PopupSize, string>
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const headerVariants = cva(
    'flex items-center justify-between p-4 border-b border-neutral-700'
)

export const contentVariants = cva('p-4')

export const actionsVariants = cva(
    'flex justify-end gap-2 p-4 border-t border-neutral-700'
)