export interface CarouselItem {
  title: string;
  description: string;
  imageUrl: string;
  footer: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  loop?: boolean;
  autoplay?: boolean;
  itemsPerSlide: number;
}