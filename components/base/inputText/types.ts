export type InputTextVariant = 'filled' | 'outline' | 'minimal'
export type InputTextSize = 'sm' | 'base' | 'lg'
export type InputTextEdges = 'square' | 'rounded' | 'circle'
export type InputValue = string | number

export interface InputTextProps {
  modelValue: InputValue
  id?: string
  label?: string
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search'
  placeholder?: string
  size?: InputTextSize
  variant?: InputTextVariant
  edges?: InputTextEdges
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  class?: string
}