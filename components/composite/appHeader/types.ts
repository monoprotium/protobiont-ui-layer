export type HeaderVariant = 'default' | 'minimal' | 'custom'
export type HeaderSize = 'sm' | 'base' | 'lg'

export interface NavigationItem {
  label: string
  href?: string
  icon?: string
  onClick?: () => void
}

export interface HeaderProps {
  variant?: HeaderVariant
  size?: HeaderSize
  navigation?: NavigationItem[]
  bgColor?: string
  textColor?: string
  showSearch?: boolean
  showSettings?: boolean
  class?: string
}