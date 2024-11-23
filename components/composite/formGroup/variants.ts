import { cva } from 'class-variance-authority';

export const formGroupVariants = cva('flex flex-col', {
  variants: {
    size: {
      sm: 'gap-1',
      base: 'gap-1.5',
      lg: 'gap-2',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export const labelVariants = cva('block font-medium text-white', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    required: {
      true: 'after:content-["*"] after:ml-1 after:text-el-8',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export const helpTextVariants = cva('text-neutral-400', {
  variants: {
    size: {
      sm: 'text-xs',
      base: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export const errorVariants = cva('text-el-8', {
  variants: {
    size: {
      sm: 'text-xs',
      base: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});