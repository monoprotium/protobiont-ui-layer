export type ListingParamsSize = 'sm' | 'base' | 'lg'
export type ListingParamsVariant = 'default' | 'bordered' | 'striped'

export interface ListingParam {
  name: string
  value: string | number
}

export interface ListingParamsProps {
  params: ListingParam[]
  size?: ListingParamsSize
  variant?: ListingParamsVariant
  color?: string
  textColor?: string
}