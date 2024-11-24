import { cva } from 'class-variance-authority'

export const containerVariants = cva(
    'relative w-full h-full overflow-hidden',
    {
        variants: {
            variant: {
                default: '',
                minimal: '',
                hidden: '',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export const scrollAreaVariants = cva(
    'h-full w-full overflow-y-auto scrollbar-none',
    {
        variants: {
            variant: {
                default: 'pr-2',
                minimal: 'pr-2',
                hidden: '',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export const trackVariants = cva(
    [
        'absolute',
        'top-0 bottom-0 right-0',
        'w-2',
        'transition-opacity duration-200'
    ].join(' '),
    {
        variants: {
            variant: {
                default: 'bg-neutral-800/50',
                minimal: 'bg-transparent',
                hidden: 'hidden',
            },
            autoHide: {
                true: 'opacity-0 group-hover:opacity-100',
                false: 'opacity-100',
            },
        },
        defaultVariants: {
            variant: 'default',
            autoHide: true,
        },
    }
)

export const thumbVariants = cva(
    [
        'w-full',
        'select-none',
        'touch-none',
        'transition-colors duration-200'
    ].join(' '),
    {
        variants: {
            variant: {
                default: [
                    'bg-neutral-600',
                    'hover:bg-neutral-500',
                    'active:bg-neutral-400'
                ].join(' '),
                minimal: [
                    'bg-neutral-500/40',
                    'hover:bg-neutral-400/40',
                    'active:bg-neutral-300/40'
                ].join(' '),
                hidden: '',
            },
            size: {
                sm: 'min-h-[20px]',
                base: 'min-h-[30px]',
                lg: 'min-h-[40px]',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'base',
        },
    }
)