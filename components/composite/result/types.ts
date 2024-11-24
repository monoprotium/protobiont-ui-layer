export type ResultSize = 'sm' | 'base' | 'lg'
export type ResultVariant = 'default' | 'bordered' | 'filled'
export type ResultStatus = 'success' | 'error' | 'warning' | 'info'

export interface ResultProps {
  status: ResultStatus
  message?: string
  size?: ResultSize
  variant?: ResultVariant
  dismissible?: boolean
}

export interface ResultEmits {
  dismiss: []
}