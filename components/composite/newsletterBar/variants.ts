import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    [
        'w-full',
        'transition-colors',
        'duration-200'
    ].join(' '),
    {
        variants: {
            variant: {
                minimal: '',
                filled: 'bg-neutral-950',
                outline: 'border border-neutral-700 bg-neutral-950/50'
            },
            size: {
                sm: 'p-4 gap-4',
                base: 'p-6 gap-6',
                lg: 'p-8 gap-8'
            },
            textAlign: {
                left: 'text-left',
                center: 'text-center'
            },
            layout: {
                inline: 'flex items-center justify-between gap-6',
                stacked: 'flex flex-col gap-4'
            }
        },
        defaultVariants: {
            variant: 'minimal',
            size: 'base',
            textAlign: 'left',
            layout: 'inline'
        }
    }
)

export const formVariants = cva(
    'flex gap-3',
    {
        variants: {
            layout: {
                inline: 'flex-row items-center flex-wrap',
                stacked: 'flex-col w-full'
            }
        },
        defaultVariants: {
            layout: 'inline'
        }
    }
)