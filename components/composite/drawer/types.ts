export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  modelValue: boolean;
  placement?: DrawerPlacement;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  width?: string;
  height?: string;
  closeOnNavigation?: boolean;
  showCloseButton?: boolean;
  customClass?: string;
}