import { cva } from 'class-variance-authority'
import type { CardVariant, CardEdges } from './types'

export const cardVariants = cva(
    [
        'relative',
        'flex',
        'flex-col',
        'overflow-hidden',
        'bg-neutral-800',
        'transition-all',
        'duration-200'
    ],
    {
        variants: {
            variant: {
                default: '',
                elevated: [
                    'shadow-lg',
                    'shadow-black/20',
                    'hover:shadow-xl',
                    'hover:shadow-black/30',
                    'hover:-translate-y-0.5'
                ],
                outline: 'border border-neutral-700'
            },
            edges: {
                square: 'rounded-none',
                rounded: 'rounded-lg'
            }
        },
        defaultVariants: {
            variant: 'default',
            edges: 'square'
        }
    }
)