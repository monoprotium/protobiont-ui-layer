export type TextareaVariant = 'filled' | 'outline' | 'minimal'
export type TextareaSize = 'sm' | 'base' | 'lg'
export type TextareaEdges = 'square' | 'rounded' | 'circle'

export interface TextareaProps {
  modelValue: string
  id?: string
  label?: string
  placeholder?: string
  size?: TextareaSize
  variant?: TextareaVariant
  edges?: TextareaEdges
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  rows?: number
  class?: string
}