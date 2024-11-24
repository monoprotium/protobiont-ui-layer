export type PaginationSize = 'sm' | 'base' | 'lg'
export type PaginationVariant = 'default' | 'bordered'

export interface PaginationProps {
  totalPages: number
  page: number
  size?: PaginationSize
  variant?: PaginationVariant
  showArrows?: boolean
  showFirstLast?: boolean
  disabled?: boolean
  color?: string
}