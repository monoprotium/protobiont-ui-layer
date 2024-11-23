export type TabSize = 'sm' | 'base' | 'lg'
export type TabStyle = 'line' | 'full'
export type TabPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TabItem {
  id: string
  label: string
  content: string | (() => any)
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  modelValue?: string
  size?: TabSize
  style?: TabStyle
  placement?: TabPlacement
  color?: string
  bgStyle?: string
}