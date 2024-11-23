export type MegaMenuSize = 'sm' | 'base' | 'lg'
export type MegaMenuVariant = 'primary' | 'secondary' | 'minimal'
export type MegaMenuAlign = 'left' | 'right' | 'center'

export interface MenuItem {
  id: string
  name: string
  link: string
  items?: MenuItem[]
}

export interface MegaMenuProps {
  categories: MenuItem[]
  size?: MegaMenuSize
  variant?: MegaMenuVariant
  align?: MegaMenuAlign
  fullWidth?: boolean
}