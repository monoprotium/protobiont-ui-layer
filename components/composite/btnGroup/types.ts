export type ButtonGroupSize = 'sm' | 'base' | 'lg'
export type ButtonGroupVariant = 'solid' | 'outline' | 'ghost'

export interface ButtonGroupProps {
  buttons: string[]
  modelValue?: string
  size?: ButtonGroupSize
  variant?: ButtonGroupVariant
  color?: string
  bgActive?: string
  defaultBg?: string
  disabled?: boolean
  class?: string
}