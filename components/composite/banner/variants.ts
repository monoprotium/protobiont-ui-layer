import { cva } from 'class-variance-authority'

export const bannerVariants = cva(
    [
        'relative',
        'flex',
        'overflow-hidden',
        'bg-neutral-800',
        'text-white'
    ],
    {
        variants: {
            variant: {
                left: 'flex-row',
                right: 'flex-row-reverse',
                full: 'flex-col items-center justify-center'
            },
            height: {
                sm: 'h-48',
                base: 'h-64',
                lg: 'h-96'
            }
        },
        defaultVariants: {
            variant: 'left',
            height: 'base'
        }
    }
)