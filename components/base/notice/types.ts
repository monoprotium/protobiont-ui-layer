export type NoticeVariant = 'solid' | 'outline'
export type NoticeIntent = 'default' | 'info' | 'success' | 'warning' | 'error'

export interface NoticeProps {
  variant?: NoticeVariant
  intent?: NoticeIntent
  closable?: boolean
  title?: string
  description?: string
}