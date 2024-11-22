export type OverlayColor = "default" | "dark" | "light" | "blur";
export type OverlayPosition = "center" | "top" | "bottom";
export type OverlaySize = "sm" | "base" | "lg" | "full";

export interface OverlayProps {
  visible?: boolean;
  color?: OverlayColor;
  position?: OverlayPosition;
  size?: OverlaySize;
  closeOnClick?: boolean;
}