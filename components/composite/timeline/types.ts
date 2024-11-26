export type Orientation = "Vertical" | "Horizontal"
export type DotAlignment = "Left" | "Right" | "Middle" | "Top" | "Bottom"
export type ItemPosition = "Left" | "Right" | "Top" | "Bottom" | "BothSides"
export type Alternation = "None" | "StartLeft" | "StartRight" | "StartTop" | "StartBottom"

export type TimelineDotSize = "sm" | "base" | "lg"
export type TimelineLineWidth = "thin" | "base" | "thick"

export interface TimelineItem {
  title: string
  description: string
  dotColor?: string
  lineColor?: string
}

export interface TimelineProps {
  orientation: Orientation
  dotAlignment: DotAlignment
  itemPosition: ItemPosition
  alternation: Alternation
  items: TimelineItem[]
  dotSize?: TimelineDotSize
  lineWidth?: TimelineLineWidth
  showLine?: boolean
  dotClass?: string
  lineColor?: string
  contentClass?: string
}


export type LayoutConfig = `${Orientation}-${DotAlignment}-${ItemPosition}-${Alternation}`