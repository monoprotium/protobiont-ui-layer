import { cva } from 'class-variance-authority';

export const containerVariants = cva('relative overflow-hidden', {
  variants: {
    size: {
      sm: 'h-48',
      base: 'h-64',
      lg: 'h-96'
    }
  },
  defaultVariants: {
    size: 'base'
  }
});

export const imageVariants = cva('', {
  variants: {
    state: {
      loading: 'opacity-0',
      loaded: 'opacity-100',
      error: 'opacity-0'
    }
  },
  defaultVariants: {
    state: 'loading'
  }
});