
export const collapsibleSizes = {
  sm: 'sm',
  base: 'base',
  lg: 'lg',
} as const

export type CollapsibleSize = keyof typeof collapsibleSizes

export interface CollapsibleItem {
  title: string
  content: string
}


export interface Props {
  items: CollapsibleItem[]
  size?: CollapsibleSize
  color?: string
  initialOpenIndex?: number
  allowMultiple?: boolean
}