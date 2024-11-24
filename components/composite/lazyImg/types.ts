export type LazyImgSize = 'sm' | 'base' | 'lg';

export type LoadingState = 'loading' | 'loaded' | 'error';

export interface LazyImgProps {
  src: string;
  alt?: string;
  size?: LazyImgSize;
  placeholder?: string;
}