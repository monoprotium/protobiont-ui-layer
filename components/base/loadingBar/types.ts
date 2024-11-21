export type LoadingBarSize = 'sm' | 'base' | 'lg'
export type LoadingBarVariant = 'default' | 'success' | 'error'

export interface LoadingBarProps {
  value?: number
  size?: LoadingBarSize
  variant?: LoadingBarVariant
}

export interface LoadingBarMethods {
  startLoading: () => void
  finishLoading: () => void
  errorLoading: () => void
}

