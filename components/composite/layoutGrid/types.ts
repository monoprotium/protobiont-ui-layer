export type GridCols = 1 | 2 | 3 | 4 | 5 | 6
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg'

export interface LayoutGridProps {
  cols?: GridCols
  gap?: GridGap
  responsive?: boolean
  class?: string
}