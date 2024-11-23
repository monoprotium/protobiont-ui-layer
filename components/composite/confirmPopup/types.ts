export type PopupPosition = 'top' | 'bottom' | 'center'
export type PopupSize = 'sm' | 'base' | 'lg'
export type PopupOverlayVariant = 'default' | 'dark' | 'light' | 'blur'

export interface ConfirmPopupProps {
  show: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  confirmColor?: string
  size?: PopupSize
  position?: PopupPosition
  overlayVariant?: PopupOverlayVariant
  showConfirmButton?: boolean
  showCancelButton?: boolean
  showCloseButton?: boolean
  closeOnOutsideClick?: boolean
}