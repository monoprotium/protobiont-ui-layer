import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    [
        'relative',
        'overflow-hidden',
        'transition-all',
        'duration-200'
    ].join(' '),
    {
        variants: {
            size: {
                sm: 'max-w-[280px]',
                base: 'max-w-[320px]',
                lg: 'max-w-[360px]',
                xl: 'max-w-[400px]',
            },
            variant: {
                solid: [
                    'bg-neutral-800',
                    'shadow-lg hover:shadow-xl'
                ].join(' '),
                outline: [
                    'bg-neutral-800/50',
                    'border border-neutral-700',
                    'hover:border-neutral-600'
                ].join(' '),
                ghost: [
                    'bg-transparent',
                    'hover:bg-neutral-800/30'
                ].join(' '),
            }
        },
        defaultVariants: {
            size: 'base',
            variant: 'solid'
        }
    }
)

export const quantityGroupVariants = cva(
    'space-y-3',
    {
        variants: {
            layout: {
                inline: 'flex items-center justify-between gap-4',
                stacked: 'block',
            }
        },
        defaultVariants: {
            layout: 'inline'
        }
    }
)

export const imageContainerVariants = cva(
    'relative w-full aspect-[4/3] overflow-hidden group',
    {
        variants: {
            variant: {
                solid: 'bg-neutral-700',
                outline: 'bg-neutral-800',
                ghost: 'bg-neutral-900/50',
            }
        },
        defaultVariants: {
            variant: 'solid'
        }
    }
)