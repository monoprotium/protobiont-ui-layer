export type UploaderVariant = "default" | "outline" | "dashed";
export type UploaderSize = "sm" | "base" | "lg";

export interface UploaderFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
  preview?: string;
}

export interface UploaderProps {
  modelValue?: UploaderFile[];
  variant?: UploaderVariant;
  size?: UploaderSize;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  removable?: boolean;
  maxFiles?: number;
  maxSize?: number;
  showPreviews?: boolean;
  customClass?: string;
}