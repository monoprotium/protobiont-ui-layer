import { cva } from 'class-variance-authority'

export const tabListVariants = cva('flex', {
  variants: {
    placement: {
      top: 'flex-row mb-2',
      bottom: 'flex-row mt-2',
      left: 'flex-col mr-2',
      right: 'flex-col ml-2'
    }
  },
  defaultVariants: {
    placement: 'top'
  }
})

export const tabTriggerVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200',
    {
      variants: {
        bgStyle: {
          line: 'border-b-2 border-transparent',
          full: ''
        },
        state: {
          active: '',
          inactive: 'text-neutral-500 hover:text-neutral-300',
          disabled: 'opacity-50 cursor-not-allowed'
        },
        size: {
          sm: 'px-3 py-1.5 text-sm',
          base: 'px-4 py-2 text-base',
          lg: 'px-6 py-3 text-lg'
        }
      },
      compoundVariants: [
        {
          bgStyle: 'line',
          state: 'active',
          class: 'text-white !border-el-7'
        },
        {
          bgStyle: 'line',
          state: 'inactive',
          class: 'hover:border-neutral-700'
        },
        {
          bgStyle: 'full',
          state: 'active',
          class: 'bg-el-7 text-white'
        },
        {
          bgStyle: 'full',
          state: 'inactive',
          class: 'hover:bg-neutral-800'
        }
      ],
      defaultVariants: {
        bgStyle: 'line',
        state: 'inactive',
        size: 'base'
      }
    }
)

export const tabContentVariants = cva('transition-all duration-200')