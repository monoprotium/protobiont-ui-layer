import { cva } from 'class-variance-authority'
import type { ComboBoxSize } from './types'

export const wrapperVariants = cva('relative w-full', {
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: ''
    }
  },
  defaultVariants: {
    disabled: false
  }
})

export const dropdownVariants = cva(
    'absolute z-50 w-full mt-1 overflow-auto rounded-md border border-neutral-800 bg-neutral-900 shadow-lg',
    {
      variants: {
        size: {
          sm: 'max-h-48 text-sm',
          base: 'max-h-64 text-base',
          lg: 'max-h-72 text-lg'
        } satisfies Record<ComboBoxSize, string>
      },
      defaultVariants: {
        size: 'base'
      }
    }
)

export const optionVariants = cva(
    'px-3 py-2 cursor-pointer text-neutral-200 transition-colors',
    {
      variants: {
        active: {
          true: 'bg-neutral-800 text-neutral-100',
          false: 'hover:bg-neutral-800/50'
        }
      },
      defaultVariants: {
        active: false
      }
    }
)