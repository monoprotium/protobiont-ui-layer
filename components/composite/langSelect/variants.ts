import { cva } from 'class-variance-authority'
import type { LangSelectVariant } from './types'

export const containerVariants = cva(
    'flex',
    {
      variants: {
        variant: {
          inline: 'items-center gap-2 flex-wrap',
          dropdown: 'w-full'
        } satisfies Record<LangSelectVariant, string>
      },
      defaultVariants: {
        variant: 'inline'
      }
    }
)