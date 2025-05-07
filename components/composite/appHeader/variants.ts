import { cva } from 'class-variance-authority'
import type { HeaderVariant, HeaderSize } from './types'

export const headerVariants = cva(
    'relative w-full flex items-center justify-between transition-all duration-200',
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

//  for default navigation items when using the 'navigation' prop
export const navItemVariants = cva(
    'relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150',
    {
        variants: {
            active: {
                true: 'text-white bg-neutral-700',
                false: 'text-neutral-300 hover:text-white hover:bg-neutral-800/50',
            },
        },
        defaultVariants: {
            active: false,
        },
    }
)

// for default action buttons (search, settings) and mobile toggle
export const actionButtonVariants = cva(
    '!p-0 flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:text-white',
    {
        variants: {
            bgColor: {
              default: 'bg-neutral-700 hover:bg-neutral-600',
              transparent: 'bg-transparent hover:bg-neutral-800/50'
            }
        },
        defaultVariants: {
          bgColor: 'default'
        }
    }
)

//  for the mobile menu panel animation
export const mobileMenuVariants = cva(
    'absolute top-full left-0 right-0 transition-all duration-200 ease-out transform z-40',
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
