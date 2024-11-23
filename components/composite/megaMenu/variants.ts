import { cva } from 'class-variance-authority'

export const containerVariants = cva('relative text-white', {
    variants: {
        variant: {
            primary: '',
            secondary: '',
            minimal: ''
        },
        size: {
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg'
        },
        fullWidth: {
            true: 'w-full',
            false: 'max-w-7xl mx-auto'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'base',
        fullWidth: false
    }
})

export const navigationVariants = cva('flex items-center gap-4', {
    variants: {
        align: {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end'
        }
    },
    defaultVariants: {
        align: 'left'
    }
})

export const menuItemVariants = cva(
    'px-4 py-3 text-neutral-400 transition-colors duration-200 hover:text-white',
    {
        variants: {
            active: {
                true: 'bg-neutral-800 text-white',
                false: ''
            }
        },
        defaultVariants: {
            active: false
        }
    }
)

export const dropdownVariants = cva('w-full bg-neutral-800 mt-4', {
    variants: {
        variant: {
            primary: '',
            secondary: '',
            minimal: ''
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})