export type FormGroupSize = 'sm' | 'base' | 'lg';

export interface FormGroupProps {
  label?: string;
  forId?: string;
  helpText?: string;
  errorMessage?: string | string[];
  size?: FormGroupSize;
  required?: boolean;
  wrapperClass?: string;
}