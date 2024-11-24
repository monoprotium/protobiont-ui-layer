export type BannerVariant = 'left' | 'right' | 'full'
export type BannerHeight = 'sm' | 'base' | 'lg'

export interface BannerProps {
  variant?: BannerVariant
  imageSrc?: string
  class?: string
  height?: BannerHeight
}