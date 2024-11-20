import type { ExcerptType } from './types'

export const truncateText = (
    text: string,
    length: number,
    type: ExcerptType,
    suffix: string = "..."
): string => {
  if (!text) return "";
  if (type === "char") return text.length <= length ? text : `${text.slice(0, length).trim()}${suffix}`;
  if (type === "word") return text.split(/\s+/).length <= length ? text : `${text.split(/\s+/).slice(0, length).join(" ").trim()}${suffix}`;
  return text;
};
