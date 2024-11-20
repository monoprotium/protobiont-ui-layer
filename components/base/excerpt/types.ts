export type ExcerptType = 'char' | 'word'

export interface ExcerptProps {
  text: string
  type?: ExcerptType
  length?: number
  suffix?: string
  class?: string
}