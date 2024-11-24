export type LightboxSize = 'sm' | 'base' | 'lg'

export interface LightboxProps {
  modelValue: boolean
  size?: LightboxSize
  closeOnEsc?: boolean
}