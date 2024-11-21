export type ListType = "default" | "decimal" | "disc";
export type ListSize = "sm" | "base" | "lg";

export interface ListItem {
  id: string;
  content: string;
  active?: boolean;
  disabled?: boolean;
}

export interface ListProps {
  items: ListItem[];
  type?: ListType;
  size?: ListSize;
  hover?: boolean;
  dense?: boolean;
  class?: string;
}
