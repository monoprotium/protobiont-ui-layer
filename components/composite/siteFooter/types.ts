export interface IconConfig {
  name: string
  usePrtIcon?: boolean
}

export interface SubCategory {
  subcategoryLabel: string
  link: string
}

export interface Category {
  label: string
  subcategories: SubCategory[]
}

export interface SocialMedia {
  label: string
  link: string
  icon: IconConfig
}

export interface ContactOption {
  label: string
  link: string
  icon: IconConfig
}

export interface BottomLink {
  label: string
  link: string
}