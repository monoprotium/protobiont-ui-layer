import { cva } from 'class-variance-authority'

export const gridVariants = cva('grid w-full auto-rows-auto items-start', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    },
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    responsive: {
      true: 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      false: '',
    },
  },
  defaultVariants: {
    cols: 3,
    gap: 'md',
    responsive: false,
  },
})