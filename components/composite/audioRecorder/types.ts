export type AudioRecorderVariant = 'default' | 'minimal' | 'elevated'
export type AudioRecorderSize = 'sm' | 'base' | 'lg'

export interface AudioRecorderProps {
  maxDuration?: number
  variant?: AudioRecorderVariant
  size?: AudioRecorderSize
  class?: string
}

export interface AudioRecorderState {
  isRecording: boolean
  isPaused: boolean
  duration: number
  blob: Blob | null
  error: string | null
  isPlaying: boolean
}