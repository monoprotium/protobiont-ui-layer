export type LoaderSize = 'sm' | 'base' | 'lg'
export type LoaderType = 'spinner' | 'dots' | 'rectangles'
export type LoaderColor = 'primary' | 'success' | 'warning' | 'gray'

export interface LoaderProps {
  isLoading?: boolean
  type?: LoaderType
  size?: LoaderSize
  color?: LoaderColor
}