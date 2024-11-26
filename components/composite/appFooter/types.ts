import type { Component } from 'vue'

export type FooterSize = 'sm' | 'base' | 'lg'
export type FooterVariant = 'default' | 'floating' | 'bordered'

export interface FooterItem {
  id: string
  label: string
  path: string
  icon: Component
}

export interface FooterProps {
  items: FooterItem[]
  size?: FooterSize
  variant?: FooterVariant
  ariaLabel?: string
}