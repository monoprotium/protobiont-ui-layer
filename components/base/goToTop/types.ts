export type Size = 'sm' | 'base' | 'lg'
export type Variant = 'solid' | 'outline'

export interface GoToTopProps {
  size?: Size
  variant?: Variant
  color?: string
  threshold?: number
}