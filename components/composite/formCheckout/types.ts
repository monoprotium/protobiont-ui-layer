export type FormSectionType = 'customer' | 'shipping' | 'payment'
export type FormSectionSize = 'sm' | 'base' | 'lg'

export interface CheckoutFormData {
  name: string
  email: string
  street: string
  city: string
  state: string
  zip: string
  cardNumber: string
  expirationDate: string
  cvv: string
  notes?: string
}

export type CheckoutFormErrors = Partial<Record<keyof CheckoutFormData, string>>

export interface CheckoutFormProps {
  modelValue: CheckoutFormData
  loading?: boolean
  errors?: CheckoutFormErrors
  submitLabel?: string
}