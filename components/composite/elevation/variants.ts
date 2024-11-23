import { cva } from 'class-variance-authority'
import type { ElevationProps } from './types'

const generateElevationVariants = () => {

  const variants = Object.fromEntries(
      Array.from({ length: 25 }, (_, i) => [i, `elevation-${i}`])
  ) as Record<ElevationProps['level'], string>

  return variants
}

export const elevationVariants = cva(

    'prt-elevation transition-shadow duration-300',
    {
      variants: {
        level: generateElevationVariants()
      },
      defaultVariants: {
        level: 0
      }
    }
)


export type ElevationVariants = typeof elevationVariants