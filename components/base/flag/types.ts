export type FlagSize = 'sm' | 'base' | 'lg'

export interface FlagProps {
  country: string
  size?: FlagSize
}