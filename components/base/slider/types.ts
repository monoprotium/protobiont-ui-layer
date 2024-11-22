export type SliderOrientation = "horizontal" | "vertical";
export type SliderEdges = "square" | "rounded" | "circle";

export interface SliderProps {
  modelValue: number | number[];
  orientation?: SliderOrientation;
  range?: boolean;
  max?: number;
  min?: number;
  bgColor?: string;
  rangeColor?: string;
  handleColor?: string;
  handleEdges?: SliderEdges;
  disabled?: boolean;
}