export type SidebarSize = 'base' | 'wide' | 'full'

export interface SidebarProps {
  size?: SidebarSize
  background?: string
  class?: string
}

export interface NavItem {
  label: string
  icon?: string
  active?: boolean
  subtitle?: string
  badge?: string | number
  onClick?: () => void
}

export interface SidebarSection {
  title?: string
  items: NavItem[]
}