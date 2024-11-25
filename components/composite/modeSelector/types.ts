type ThemeMode = 'light' | 'dark'

export interface ModeSelectorProps {
  modelValue: ThemeMode
  size?: 'sm' | 'base' | 'lg'
}