export type FlexGap = 'sm' | 'md' | 'lg' | 'xl'

export interface LayoutFlexProps {
  itemsPerRow: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}