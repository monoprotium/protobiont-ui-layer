export type Size = 'sm' | 'base' | 'lg'
export type Variant = 'filled' | 'outline' | 'minimal'
export type Edges = 'square' | 'rounded' | 'circle'
export type Width = 'auto' | 'full'

export interface InputNumberProps {
  modelValue: number
  min?: number
  max?: number
  step?: number
  size?: Size
  variant?: Variant
  edges?: Edges
  width?: Width
  disabled?: boolean
  error?: boolean
  hideControls?: boolean
  class?: string
}