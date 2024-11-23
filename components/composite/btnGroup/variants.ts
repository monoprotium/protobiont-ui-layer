import { cva } from 'class-variance-authority'
import type { ButtonGroupSize } from './types'

export const buttonGroupVariants = cva(
    'inline-flex items-center',
    {
        variants: {
            size: {
                sm: 'gap-px',
                base: 'gap-px',
                lg: 'gap-px'
            } satisfies Record<ButtonGroupSize, string>
        },
        defaultVariants: {
            size: 'base'
        }
    }
)