import { cva } from 'class-variance-authority'

export const formFieldVariants = cva('flex flex-col gap-1.5', {
  variants: {
    variant: {
      filled: '',
      outline: '',
      minimal: ''
    },
    size: {
      sm: 'gap-1',
      base: 'gap-1.5',
      lg: 'gap-2'
    },
    disabled: {
      true: 'opacity-50'
    },
    error: {
      true: ''
    }
  },
  defaultVariants: {
    variant: 'filled',
    size: 'base'
  }
})

export const labelVariants = cva('block font-medium text-white', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg'
    },
    disabled: {
      true: 'text-neutral-400'
    },
    error: {
      true: 'text-el-8'
    }
  },
  defaultVariants: {
    size: 'base'
  }
})

export const errorVariants = cva('text-el-8', {
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
})

export const inputVariants = cva(
    'w-full text-white outline-none placeholder:text-neutral-500 transition-all duration-200',
    {
      variants: {
        variant: {
          filled: [
            'bg-neutral-800',
            'hover:bg-neutral-700',
            'focus:bg-neutral-700',
            'px-3 py-2'
          ],
          outline: [
            'bg-transparent',
            'border-2',
            'border-neutral-700',
            'hover:border-neutral-600',
            'focus:border-el-7',
            'px-3 py-2'
          ],
          minimal: [
            'bg-transparent',
            'border-b-2',
            'border-neutral-700',
            'hover:border-neutral-600',
            'focus:border-el-7',
            'px-1 py-2'
          ]
        },
        size: {
          sm: 'text-sm',
          base: 'text-base',
          lg: 'text-lg'
        },
        disabled: {
          true: 'cursor-not-allowed bg-neutral-800/50'
        },
        error: {
          true: 'border-el-8 focus:border-el-8'
        }
      },
      defaultVariants: {
        variant: 'filled',
        size: 'base'
      }
    }
)