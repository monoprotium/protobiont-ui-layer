export type GridCols = 1 | 2 | 3 | 4 | 5 | 6
export type GridGap = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export interface LayoutGridProps {
  cols?: GridCols
  gap?: GridGap
  responsive?: boolean
  class?: string
}