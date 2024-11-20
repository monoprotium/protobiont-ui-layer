import { cva } from 'class-variance-authority'
import type { CheckboxSize, CheckboxEdges, CheckboxState } from './types'

const checkboxVariants = cva(
    'relative border border-solid flex justify-center items-center box-border transition-all duration-200 cursor-pointer',
    {
      variants: {
        size: {
          sm: 'w-3 h-3',
          base: 'w-4 h-4',
          lg: 'w-6 h-6',
        },
        edges: {
          square: 'rounded-none',
          rounded: 'rounded-md',
          circle: 'rounded-full',
        },
        state: {
          unchecked: 'bg-transparent',
          checked: undefined,
          disabled: 'cursor-not-allowed'
        }
      },
      defaultVariants: {
        size: 'base',
        edges: 'square',
        state: 'unchecked'
      }
    }
)

const innerCheckboxVariants = cva(
    'absolute transition-transform duration-200 ease-in-out',
    {
      variants: {
        size: {
          sm: 'w-[calc(50%-1px)] h-[calc(50%-1px)]',
          base: 'w-[calc(50%-1px)] h-[calc(50%-1px)]',
          lg: 'w-[calc(50%-1px)] h-[calc(50%-1px)]',
        },
        edges: {
          square: 'rounded-none',
          rounded: 'rounded-md',
          circle: 'rounded-full',
        },
        state: {
          unchecked: 'scale-0',
          checked: 'scale-100',
          disabled: undefined
        }
      },
      defaultVariants: {
        size: 'base',
        edges: 'square',
        state: 'unchecked'
      }
    }
)

export { checkboxVariants, innerCheckboxVariants }