import { cva } from 'class-variance-authority'
import type { PrtBtnVariant } from './types'

const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-150 text-center'

export const buttonVariants = cva(baseStyles, {
    variants: {
        variant: {
            solid: '',
            outline: 'bg-transparent border-2',
            ghost: 'bg-transparent',
        },
        size: {
            sm: 'text-sm py-1.5 px-3',
            base: 'text-base py-2 px-4',
            lg: 'text-base py-3 px-6',
        },
        edges: {
            square: '',
            rounded: 'rounded',
            circle: 'rounded-full',
        },
        square: { true: '' },
        fullWidth: { true: 'w-full' },
        disabled: { true: 'opacity-50 cursor-not-allowed' },
        loading: { true: 'cursor-wait' },
    },
    defaultVariants: {
        variant: 'solid',
        size: 'base',
        edges: 'rounded'
    }
})

type ButtonStyleMap = {
    [K in PrtBtnVariant]: string[]
}

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

    const variantStyles: ButtonStyleMap = {
        solid: [color, 'text-white', 'hover:bg-opacity-90'],
        outline: [`border-${baseColor}`, `text-${baseColor}`, `hover:bg-${baseColor}`, 'hover:text-white'],
        ghost: [`text-${baseColor}`, `hover:bg-${baseColor}`, 'hover:text-white']
    }

    return [...variantStyles[variant], ...focusStyles]
}