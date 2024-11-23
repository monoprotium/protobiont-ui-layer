export type InfiniteScrollSize = 'sm' | 'base' | 'lg'
export type InfiniteScrollLayout = 'grid' | 'list'

export interface InfiniteScrollItem {
  id: string | number
  content: string
  [key: string]: any
}

export interface InfiniteScrollProps {
  items: InfiniteScrollItem[]
  size?: InfiniteScrollSize
  layout?: InfiniteScrollLayout
  threshold?: number
  loading?: boolean
  cyclic?: boolean
  endReached?: boolean
}