import { cva } from 'class-variance-authority'

export const sidebarVariants = cva([
    'h-screen',
    'flex',
    'flex-col',
    'border-r',
    'border-neutral-700',
    'transition-[width]',
    'duration-300',
    'ease-in-out'
], {
    variants: {
        size: {
            base: 'w-[320px]',
            wide: 'w-[380px]',
            full: 'w-full'
        }
    },
    defaultVariants: {
        size: 'base'
    }
})

export const navigationItemVariants = cva([
    'flex',
    'items-center',
    'gap-3',
    'px-5',
    'py-3.5',
    'transition-all',
    'duration-200',
    'group',
    'relative'
], {
    variants: {
        active: {
            true: ['bg-neutral-600/20', 'text-white', 'font-medium'],
            false: ['text-neutral-300', 'hover:text-white', 'hover:bg-neutral-600/10']
        },
        rounded: {
            true: 'rounded-lg',
            false: ''
        }
    },
    defaultVariants: {
        active: false,
        rounded: false
    }
})

export const iconContainerVariants = cva([
    'flex',
    'items-center',
    'justify-center',
    'transition-colors'
], {
    variants: {
        rounded: {
            true: 'rounded-lg',
            false: ''
        },
        active: {
            true: 'bg-neutral-600/20',
            false: ['bg-neutral-600/10', 'group-hover:bg-neutral-600/20']
        },
        size: {
            sm: 'w-8 h-8',
            base: 'w-10 h-10',
            lg: 'w-12 h-12'
        }
    },
    defaultVariants: {
        rounded: false,
        active: false,
        size: 'base'
    }
})