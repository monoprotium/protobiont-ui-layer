export type StickyPosition = 'top' | 'bottom'
export type StickyOffset = '0' | '2' | '4'

export interface StickyProps {
  position?: StickyPosition
  offset?: StickyOffset
  zIndex?: number
  class?: string
}