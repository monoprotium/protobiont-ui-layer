import { cva } from 'class-variance-authority'

export const recorderVariants = cva(
    [
        'overflow-hidden',
        'transition-all',
        'duration-200'
    ],
    {
        variants: {
            variant: {
                default: ['bg-neutral-800/90', 'border', 'border-neutral-700/50'],
                minimal: ['bg-neutral-800/20'],
                elevated: [
                    'bg-neutral-800/80',
                    'backdrop-blur-lg',
                    'shadow-md',
                    'shadow-neutral-950'
                ]
            },
            size: {
                sm: ['w-80'],
                base: ['w-96'],
                lg: ['w-120']
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'base'
        }
    }
)