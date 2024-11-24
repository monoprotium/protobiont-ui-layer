import { cva } from 'class-variance-authority'

export const tagChipsInputVariants = cva(
    'flex flex-wrap gap-2 min-h-[40px] focus-within:outline-none',
    {
        variants: {
            disabled: {
                true: 'opacity-50 cursor-not-allowed',
                false: ''
            }
        },
        defaultVariants: {
            disabled: false
        }
    }
)