import { cva } from 'class-variance-authority'

export const headerVariants = cva(
    'relative w-full flex items-center justify-between transition-all',
    {
        variants: {
            variant: {
                default: 'shadow-lg',
                minimal: 'border-b border-neutral-800',
                custom: '',
            },
            size: {
                sm: 'px-4 py-2',
                base: 'px-6 py-4',
                lg: 'px-8 py-6',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'base',
        },
    }
)

export const navItemVariants = cva(
    'relative px-3 py-2 rounded-md text-sm font-medium transition-colors',
    {
        variants: {
            active: {
                true: 'text-white bg-neutral-800/50',
                false: 'text-neutral-300 hover:text-white hover:bg-neutral-800/30',
            },
        },
        defaultVariants: {
            active: false,
        },
    }
)

export const mobileMenuVariants = cva(
    'absolute top-full left-0 right-0 transition-all duration-200 ease-in-out transform',
    {
        variants: {
            isOpen: {
                true: 'translate-y-0 opacity-100',
                false: '-translate-y-2 opacity-0 pointer-events-none',
            },
        },
        defaultVariants: {
            isOpen: false,
        },
    }
)