export type PriceInputSize = 'sm' | 'base' | 'lg'

export interface PriceData {
  price: number
  currency: string
}

export interface PriceInputProps {
  value?: number
  currencies?: string[]
  size?: PriceInputSize
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  color?: string
}