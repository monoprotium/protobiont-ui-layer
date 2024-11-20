import { cva } from 'class-variance-authority'

export const wrapperVariants = cva(
    'w-full flex',
    {
        variants: {
            position: {
                left: 'justify-start',
                right: 'justify-end',
            },
        },
        defaultVariants: {
            position: 'left',
        },
    }
)

export const bubbleVariants = cva(
    'prt-bubble inline-flex',
    {
        variants: {
            edges: {
                square: '',
                rounded: 'rounded-lg',
                circle: 'rounded-full',
            },
            fullWidth: {
                true: 'w-full',
                false: 'max-w-[300px]',
            },
        },
        defaultVariants: {
            edges: 'rounded',
            fullWidth: false,
        },
    }
)