import { cva } from 'class-variance-authority'
import type { StickyPosition, StickyOffset } from './types'

export const stickyVariants = cva(
    'transition-all duration-200',
    {
      variants: {
        position: {
          top: 'sticky top-0',
          bottom: 'sticky bottom-0'
        } satisfies Record<StickyPosition, string>,
        offset: {
          '0': 'top-0',
          '2': 'top-2',
          '4': 'top-4'
        } satisfies Record<StickyOffset, string>,
        isStuck: {
          true: 'z-10',
          false: ''
        }
      },
      defaultVariants: {
        position: 'top',
        offset: '0',
        isStuck: false
      }
    }
)