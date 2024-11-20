export interface BreadcrumbItem {
  name: string
  url?: string
  isClickable?: boolean
  isCurrent?: boolean
}

export type BreadcrumbSize = 'sm' | 'base' | 'lg'
export type BreadcrumbColor = 'default' | 'contrast'