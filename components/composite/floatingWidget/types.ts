export type MenuPosition = 'top' | 'bottom' | 'left' | 'right'
export type MenuDirection = 'horizontal' | 'vertical'
export type ButtonSize = 'sm' | 'base' | 'lg'

export interface FloatingWidgetProps {
  modelValue: boolean
  position?: MenuPosition
  direction?: MenuDirection
  fixed?: boolean
  disabled?: boolean
  color?: string
  size?: ButtonSize
  gap?: number
}