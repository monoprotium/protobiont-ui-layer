import { cva } from 'class-variance-authority'
import type { SplashScreenSize, SplashScreenAnimation } from './types'

export const splashScreenVariants = cva(
    'flex items-center justify-center min-h-[200px]',
    {
        variants: {
            size: {
                sm: 'max-w-sm',
                base: 'max-w-md',
                lg: 'max-w-lg'
            },
            animation: {
                fade: 'transition-opacity duration-300',
                scale: 'transition-transform duration-300',
                slide: 'transition-all duration-300'
            }
        },
        defaultVariants: {
            size: 'base',
            animation: 'fade'
        }
    }
)

export const defaultSpinnerVariants = cva(
    'animate-spin rounded-full border-2',
    {
        variants: {
            size: {
                sm: 'w-8 h-8',
                base: 'w-12 h-12',
                lg: 'w-16 h-16'
            }
        },
        defaultVariants: {
            size: 'base'
        }
    }
)