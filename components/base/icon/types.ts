export type IconSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export interface IconProps {
  iconComponent: string;
  size?: IconSize;
  color?: string;
  class?: string;
}
