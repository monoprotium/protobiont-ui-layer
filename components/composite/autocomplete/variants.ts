import { cva } from 'class-variance-authority'
import type { AutocompleteSize, AutocompleteEdges } from './types'

export const containerVariants = cva('relative w-full')

export const dropdownVariants = cva(
    'absolute w-full z-50 mt-1 border border-neutral-800 bg-neutral-900 shadow-xl shadow-neutral-950/20 overflow-auto',
    {
        variants: {
            size: {
                sm: 'max-h-48',
                base: 'max-h-64',
                lg: 'max-h-72'
            },
            edges: {
                square: 'rounded-none',
                rounded: 'rounded-md',
                circle: 'rounded-2xl'
            } satisfies Record<AutocompleteEdges, string>
        },
        defaultVariants: {
            size: 'base',
            edges: 'square'
        }
    }
)

export const itemVariants = cva(
    'flex items-center px-3 py-2 cursor-pointer transition-colors duration-150',
    {
        variants: {
            active: {
                true: 'bg-neutral-800 text-neutral-100',
                false: 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
            },
            disabled: {
                true: 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-neutral-400',
                false: ''
            }
        },
        defaultVariants: {
            active: false,
            disabled: false
        }
    }
)