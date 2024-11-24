export type ScrollbarSize = 'sm' | 'base' | 'lg'
export type ScrollbarVariant = 'default' | 'minimal' | 'hidden'

export interface ScrollbarProps {
  size?: ScrollbarSize
  variant?: ScrollbarVariant
  autoHide?: boolean
  class?: string
}