import { cva } from 'class-variance-authority'

export const listVariants = cva('w-full', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg'
    },
    type: {
      default: '',
      decimal: '[counter-reset:item]',
      disc: ''
    },
    dense: {
      true: 'space-y-0.5',
      false: 'space-y-1'
    }
  },
  defaultVariants: {
    size: 'base',
    type: 'default',
    dense: false
  }
})

export const listItemVariants = cva(
    'flex items-center gap-2 relative text-neutral-300 transition-colors duration-200',
    {
      variants: {
        size: {
          sm: 'py-1.5 px-3',
          base: 'py-2 px-4',
          lg: 'py-3 px-5'
        },
        type: {
          default: '',
          decimal: 'pl-8 [counter-increment:item] [&::before:content:counter(item)] [&::before]:absolute [&::before]:left-4 [&::before]:text-neutral-400',
          disc: 'pl-8 [&::before:content:"•"] [&::before]:absolute [&::before]:left-4 [&::before]:text-neutral-400'
        },
        hover: {
          true: 'hover:bg-neutral-800 hover:text-neutral-200',
          false: ''
        },
        active: {
          true: 'text-el-7',
          false: ''
        },
        disabled: {
          true: 'opacity-50 cursor-not-allowed',
          false: ''
        }
      },
      defaultVariants: {
        size: 'base',
        type: 'default',
        hover: true,
        active: false,
        disabled: false
      }
    }
)