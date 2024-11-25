import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    'inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200',
    {
        variants: {
            mode: {
                light: 'bg-neutral-800 text-neutral-400',
                dark: 'bg-neutral-900 text-neutral-300'
            },
            size: {
                sm: 'text-sm gap-2',
                base: 'text-base gap-3',
                lg: 'text-lg gap-4'
            }
        },
        defaultVariants: {
            mode: 'light',
            size: 'base'
        }
    }
)