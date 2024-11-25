export interface GalleryImage {
  id: string | number;
  src: string;
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

export type GalleryLayout = 'grid' | 'masonry' | 'carousel';
export type GalleryGap = 'none' | 'sm' | 'base' | 'lg';
export type GalleryAspectRatio = 'square' | 'video' | 'portrait' | 'landscape';

export interface GalleryProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
  gap?: GalleryGap;
  selectable?: boolean;
  loading?: boolean;
  aspectRatio?: GalleryAspectRatio;
}