export interface Language {
  name: string
  code: string
  flag: string
}

export type LangSelectSize = 'sm' | 'base' | 'lg'
export type LangSelectVariant = 'inline' | 'dropdown'

export interface LangSelectEmits {
  'update:modelValue': [value: string]
}