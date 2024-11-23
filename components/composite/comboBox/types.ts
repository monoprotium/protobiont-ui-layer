export type ComboBoxSize = 'sm' | 'base' | 'lg'

export interface ComboBoxProps {
  modelValue: string
  options: string[]
  size?: ComboBoxSize
  placeholder?: string
  disabled?: boolean
  error?: boolean
}