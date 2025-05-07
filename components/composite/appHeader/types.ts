export type HeaderVariant = 'default' | 'minimal' | 'custom'
export type HeaderSize = 'sm' | 'base' | 'lg'

export interface NavigationItem {
  label: string
  href?: string
  icon?: string 
  active?: boolean
  onClick?: () => void
}

export interface HeaderProps {
  variant?: HeaderVariant
  size?: HeaderSize
  pages?: string[] // For simple string-based navigation
  navigation?: NavigationItem[] 
  bgColor?: string
  textColor?: string
  showSearch?: boolean
  showSettings?: boolean
  class?: string
}

