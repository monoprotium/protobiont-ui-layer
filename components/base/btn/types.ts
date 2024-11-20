import type { ConcreteComponent } from 'vue'

export const PrtBtnVariant = {
    solid: 'solid',
    outline: 'outline',
    ghost: 'ghost',
} as const

export const PrtBtnSize = {
    sm: 'sm',
    base: 'base',
    lg: 'lg',
} as const

export type PrtBtnVariant = (typeof PrtBtnVariant)[keyof typeof PrtBtnVariant]
export type PrtBtnSize = (typeof PrtBtnSize)[keyof typeof PrtBtnSize]


export interface ButtonProps {
    variant?: PrtBtnVariant
    size?: PrtBtnSize
    disabled?: boolean
    square?: boolean
    tag?: string | ConcreteComponent
    loading?: boolean
    fullWidth?: boolean
    color?: string
    disableFocusRing?: boolean
}