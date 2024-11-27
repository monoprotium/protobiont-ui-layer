export type AudioPlayerVariant = 'default' | 'minimal' | 'elevated'
export type AudioPlayerSize = 'sm' | 'base' | 'lg'

export interface AudioPlayerProps {
  src?: string
  variant?: AudioPlayerVariant
  size?: AudioPlayerSize
  class?: string
}

export interface AudioPlayerState {
  isPlaying: boolean
  duration: number
  currentTime: number
  volume: number
  isMuted: boolean
  error: string | null
}