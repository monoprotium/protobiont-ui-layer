export const badgePositions = {
  'top-right': 'top-right',
  'top-left': 'top-left',
  'bottom-right': 'bottom-right',
  'bottom-left': 'bottom-left',
} as const

export type BadgePosition = keyof typeof badgePositions