// types.ts
export type CardVariant = 'default' | 'elevated' | 'outline'
export type CardEdges = 'square' | 'rounded'

export interface CardProps {
    variant?: CardVariant
    edges?: CardEdges
    loading?: boolean
    class?: string
    imageSrc?: string
    imageAspectRatio?: string
}