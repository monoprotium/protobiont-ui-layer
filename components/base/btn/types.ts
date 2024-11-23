import type { ConcreteComponent } from 'vue'

export type PrtBtnVariant = 'solid' | 'outline' | 'ghost'
export type PrtBtnSize = 'sm' | 'base' | 'lg'
export type PrtBtnEdges = 'square' | 'rounded' | 'circle'

export interface ButtonProps {
    variant?: PrtBtnVariant
    size?: PrtBtnSize
    edges?: PrtBtnEdges
    disabled?: boolean
    square?: boolean
    tag?: string | ConcreteComponent
    loading?: boolean
    fullWidth?: boolean
    color?: string
    disableFocusRing?: boolean
}