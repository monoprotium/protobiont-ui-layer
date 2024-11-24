import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    [
        'flex',
        'items-center',
        'gap-2'
    ].join(' '),
    {
        variants: {
            size: {
                sm: 'text-sm',
                base: 'text-base',
                lg: 'text-lg'
            },
            disabled: {
                true: 'opacity-50 pointer-events-none',
                false: ''
            }
        },
        defaultVariants: {
            size: 'base',
            disabled: false
        }
    }
)

export const inputGroupVariants = cva(
    'flex items-center',
    {
        variants: {
            size: {
                sm: 'gap-1',
                base: 'gap-2',
                lg: 'gap-3'
            }
        },
        defaultVariants: {
            size: 'base'
        }
    }
)