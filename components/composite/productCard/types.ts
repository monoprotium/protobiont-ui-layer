export type ProductCardSize = 'sm' | 'base' | 'lg' | 'xl'
export type ProductCardVariant = 'solid' | 'outline' | 'ghost'
export type QuantityLayout = 'inline' | 'stacked'

export interface Product {
  id?: string | number
  title: string
  description: string
  price: number
  rating?: number
  image?: string
}

export interface ProductCardProps {
  product: Product
  size?: ProductCardSize
  variant?: ProductCardVariant
  showImage?: boolean
  showFavorites?: boolean
  showTitle?: boolean
  showStars?: boolean
  showDescription?: boolean
  showPrice?: boolean
  showCartButton?: boolean
  showBudgetOptions?: boolean
  color?: string
  quantityLayout?: QuantityLayout
}