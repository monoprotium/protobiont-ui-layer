import type { InputTextProps } from '../../base/inputText'
import type { TextareaProps } from '../../base/inputTextArea'

export type FormFieldSize = 'sm' | 'base' | 'lg'
export type FormFieldVariant = 'filled' | 'outline' | 'minimal'
export type FormFieldType = 'text' | 'textarea'

export interface FormFieldProps {
  modelValue?: string
  type?: FormFieldType
  id: string
  name?: string
  label?: string
  labelColor?: string
  size?: FormFieldSize
  variant?: FormFieldVariant
  error?: string | string[]
  disabled?: boolean
  required?: boolean
  placeholder?: string
  maxLength?: number
  showButton?: boolean
  buttonText?: string
  buttonColor?: string
  buttonSize?: FormFieldSize
  wrapperClass?: string
  inputProps?: Partial<InputTextProps>
  textareaProps?: Partial<TextareaProps>
}

export interface FormFieldEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'buttonClick'): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}