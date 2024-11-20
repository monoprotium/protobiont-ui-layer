export const avatarSizes = {
  sm: 'sm',
  base: 'base',
  lg: 'lg',
} as const

export const avatarEdges = {
  square: 'square',
  rounded: 'rounded',
  circle: 'circle',
} as const

export type AvatarSize = keyof typeof avatarSizes
export type AvatarEdges = keyof typeof avatarEdges

export interface AvatarProps {
  size?: AvatarSize
  edges?: AvatarEdges
  imgSrc: string
  alt?: string
  class?: string
}

