export type ChipSize = 'sm' | 'base' | 'lg'
export type ChipVariant = 'solid' | 'outline' | 'ghost'

export interface ChipProps {
  size?: ChipSize
  variant?: ChipVariant
  color?: string
  disabled?: boolean
  clickable?: boolean
}