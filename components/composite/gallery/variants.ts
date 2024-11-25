import { cva } from 'class-variance-authority'

export const galleryVariants = cva('w-full', {
  variants: {
    layout: {
      grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
      masonry: 'columns-1 sm:columns-2 md:columns-3 [&>*]:break-inside-avoid-column [&>*]:mb-4',
      carousel: 'flex overflow-x-auto snap-x scrollbar-hide',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      base: 'gap-4',
      lg: 'gap-6',
    },
  },
  defaultVariants: {
    layout: 'grid',
    gap: 'base',
  },
})

export const galleryItemVariants = cva('', {
  variants: {
    layout: {
      grid: 'relative',
      masonry: 'relative w-full block',
      carousel: 'flex-none snap-center w-80',
    },
    aspectRatio: {
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-[3/4]',
      landscape: 'aspect-[4/3]',
    },
    selectable: {
      true: 'cursor-pointer',
      false: '',
    },
  },
  defaultVariants: {
    layout: 'grid',
    aspectRatio: 'landscape',
    selectable: false,
  },
})