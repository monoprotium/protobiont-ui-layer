import { cva } from 'class-variance-authority'

export const containerVariants = cva('w-full', {
  variants: {
    size: {
      sm: 'h-64',
      base: 'h-96',
      lg: 'h-[32rem]'
    }
  },
  defaultVariants: {
    size: 'base'
  }
})

export const contentVariants = cva('w-full p-4', {
  variants: {
    layout: {
      grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
      list: 'flex flex-col space-y-4'
    }
  },
  defaultVariants: {
    layout: 'grid'
  }
})

export const itemVariants = cva(
    'bg-neutral-700 rounded-lg transition-colors duration-200 hover:bg-neutral-600',
    {
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
    }
)