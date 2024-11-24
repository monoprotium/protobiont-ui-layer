export type NewsletterBarSize = 'sm' | 'base' | 'lg'
export type NewsletterBarVariant = 'minimal' | 'filled' | 'outline'

export interface NewsletterBarProps {
  size?: NewsletterBarSize
  variant?: NewsletterBarVariant
  id?: string
  buttonText?: string
  buttonColor?: string
  placeholder?: string
  textAlign?: 'left' | 'center'
  layout?: 'inline' | 'stacked'
}