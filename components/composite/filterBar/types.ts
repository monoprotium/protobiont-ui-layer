export type FilterBarDirection = 'horizontal' | 'vertical'
export type FilterBarSize = 'sm' | 'base' | 'lg'

export interface FilterItem {
  value: string
  label: string
  disabled?: boolean
}

export interface FilterBarProps {
  modelValue: string[]
  items: FilterItem[]
  direction?: FilterBarDirection
  size?: FilterBarSize
  disabled?: boolean
  customClass?: string
}