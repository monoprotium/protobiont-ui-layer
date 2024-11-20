import { cva, type VariantProps } from 'class-variance-authority'
import type { PrtBtnVariant } from './types'

const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded text-center'

export const buttonVariants = cva(baseStyles, {
    variants: {
        variant: {
            solid: undefined,
            outline: 'bg-transparent border-2',
            ghost: 'bg-transparent',
        },
        size: {
            sm: 'text-sm py-1.5 px-3',
            base: 'text-base py-2 px-4',
            lg: 'text-base py-3 px-6',
        },
        square: { true: undefined },
        fullWidth: { true: 'w-full' },
        disabled: { true: 'opacity-50 cursor-not-allowed' },
        loading: { true: 'cursor-wait' },
    },
    compoundVariants: [
        {
            square: true,
            size: 'sm',
            class: 'p-1.5 min-w-8.5',
        },
        {
            square: true,
            size: 'base',
            class: 'p-2 min-w-10.5',
        },
        {
            square: true,
            size: 'lg',
            class: 'p-4 min-w-14.5',
        },
    ],
    defaultVariants: {
        variant: 'solid',
        size: 'base',
    }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

export const getButtonColors = (
    variant: PrtBtnVariant,
    color: string,
    disabled: boolean,
    disableFocusRing = false,
): string[] => {
    if (disabled) return ['text-gray-400', 'bg-gray-500']

    const baseColor = color.replace('bg-', '')
    const focusStyles = disableFocusRing ? [] : [
        'focus:ring-2',
        'focus:ring-offset-2',
        `focus:ring-${baseColor}`,
        'focus:ring-opacity-50'
    ]

    const variantStyles = {
        solid: [color, 'text-white', 'hover:bg-opacity-90'],
        outline: [`border-${baseColor}`, `text-${baseColor}`, `hover:bg-${baseColor}`, 'hover:text-white'],
        ghost: [`text-${baseColor}`, `hover:bg-${baseColor}`, 'hover:text-white']
    }

    return [...variantStyles[variant], ...focusStyles]
}