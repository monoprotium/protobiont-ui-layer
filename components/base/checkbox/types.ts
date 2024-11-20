export type CheckboxSize = 'sm' | 'base' | 'lg'
export type CheckboxEdges = 'square' | 'rounded' | 'circle'
export type CheckboxState = 'unchecked' | 'checked' | 'disabled'

export interface CheckboxProps {
  modelValue: boolean
  size?: CheckboxSize
  edges?: CheckboxEdges
  color?: string
  disabled?: boolean
}