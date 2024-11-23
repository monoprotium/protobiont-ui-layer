export type IndexBarSize = 'sm' | 'base' | 'lg'
export type IndexBarOrientation = 'horizontal' | 'vertical'

export interface IndexBarItem {
  [key: string]: any
  name?: string
  url?: string
}

// string or an IndexBarItem object
export type IndexBarItemType = string | IndexBarItem

export interface IndexBarProps {
  items: IndexBarItemType[]
  displayEmptyLetters?: boolean
  orientation?: IndexBarOrientation
  size?: IndexBarSize
  color?: string
  itemKey?: string
}