import { cva } from 'class-variance-authority'

export const containerVariants = cva('w-full', {
  variants: {
    orientation: {
      horizontal: 'flex flex-row flex-wrap gap-6',
      vertical: 'flex flex-col gap-4'
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg'
    }
  },
  defaultVariants: {
    orientation: 'vertical',
    size: 'base'
  }
})

export const groupVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'min-w-[200px]',
      vertical: 'w-full'
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
})


export const headerVariants = cva(
    'font-semibold transition-colors duration-200',
    {
      variants: {
        orientation: {
          horizontal: 'mb-2',
          vertical: 'mb-2 border-b border-neutral-700 pb-2'
        }
      },
      defaultVariants: {
        orientation: 'vertical'
      }
    }
)

export const listVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'space-y-2',
      vertical: 'space-y-2'
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
})


export const itemVariants = cva(
    'transition-colors duration-200 px-2 py-1 rounded text-neutral-300',
    {
      variants: {
        orientation: {
          horizontal: '',
          vertical: ''
        },
        isLink: {
          true: [
            '',
            'hover:underline block'
          ],
          false: [
            ''
          ]
        }
      },
      defaultVariants: {
        orientation: 'vertical',
        isLink: false
      }
    }
)