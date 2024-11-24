export type TagChipsSize = 'sm' | 'base' | 'lg'

export interface InputTextInstance {
  focusInput: () => void
}

export interface TagChipsProps {
  tags: string[]
  size?: TagChipsSize
  color?: string
  closeBg?: string
  placeholder?: string
  disabled?: boolean
  allowDuplicates?: boolean
}

export interface TagChipsEmits {
  'update:tags': [tags: string[]]
  'tag:add': [tag: string]
  'tag:remove': [tag: string]
  'error': [message: string]
}