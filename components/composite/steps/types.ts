export type StepsSize = 'sm' | 'base' | 'lg'
export type StepState = 'complete' | 'current' | 'upcoming'

export interface StepsProps {
  steps: number
  size?: StepsSize
  allowSkip?: boolean
  class?: string
}