export type AutocompleteSize = 'sm' | 'base' | 'lg'
export type AutocompleteVariant = 'filled' | 'outline' | 'minimal'
export type AutocompleteEdges = 'square' | 'rounded' | 'circle'

export interface AutocompleteProps {
  modelValue?: string
  items: string[]
  size?: AutocompleteSize
  variant?: AutocompleteVariant
  edges?: AutocompleteEdges
  placeholder?: string
  disabled?: boolean
  error?: boolean
}