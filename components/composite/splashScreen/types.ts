export type SplashScreenSize = 'sm' | 'base' | 'lg'
export type SplashScreenAnimation = 'fade' | 'scale' | 'slide'

export interface SplashScreenProps {
  modelValue: boolean
  timeout?: number
  overlayColor?: string
  overlayOpacity?: number
  animation?: SplashScreenAnimation
  size?: SplashScreenSize
  class?: string
}

export interface SplashScreenEmits {
  'update:modelValue': [value: boolean]
  'closed': []
}