<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div v-for="(item, index) in items" :key="index" class="embla__slide" :style="slideStyle">
        <div class="p-4 rounded bg-neutral-950 w-full h-full flex flex-col ">
          <div class="carousel-img overflow-hidden flex-grow">
            <img :src="item.imageUrl" alt="Product Image" class="object-cover w-full h-full" />
          </div>
          <div class="my-2">
            <h3 class="text-md">{{ item.title }}</h3>
            <p class="text-xs">{{ item.description }}</p>
            <p class="text-sm font-semibold">{{ item.footer }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="embla__controls">
      <div class="embla__buttons p-4">
        <PrtBtn @click="scrollToPrev" class="embla__prev"><</PrtBtn>
        <PrtBtn @click="scrollToNext" class="embla__next">></PrtBtn>
      </div>
      <div class="embla__dots">
        <button
            v-for="(_, index) in scrollSnaps"
            :key="index"
            :class="['embla__dot', { 'embla__dot--selected': index === selectedIndex }]"
            type="button"
            @click="onDotButtonClick(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { PrtBtn } from "../../base/btn"
import { type CarouselProps } from './types';
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';

const props = withDefaults(defineProps<CarouselProps>(), {
  loop: true,
  autoplay: false,
  itemsPerSlide: 4,
});

const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);

const [emblaRef, emblaApi] = emblaCarouselVue(
    {
      loop: props.loop,
      align: 'start',
      slidesToScroll: props.itemsPerSlide,
    },
    props.autoplay ? [Autoplay()] : []
);


const slideStyle = computed(() => ({
  flex: `0 0 ${100 / props.itemsPerSlide}%`,
}));


const scrollToPrev = () => {
  if (emblaApi.value) {
    emblaApi.value.scrollPrev();
  }
};

const scrollToNext = () => {
  if (emblaApi.value) {
    emblaApi.value.scrollNext();
  }
};

const onDotButtonClick = (index: number) => {
  if (!emblaApi.value) return;
  emblaApi.value.scrollTo(index);
};

watch(emblaApi, (api) => {
  if (!api) return;

  scrollSnaps.value = api.scrollSnapList();

  const onSelect = () => {
    selectedIndex.value = api.selectedScrollSnap();
  };

  api.on('select', onSelect);
  api.on('reInit', () => {
    scrollSnaps.value = api.scrollSnapList();
    onSelect();
  });

  onSelect();
});

onMounted(() => {
  if (emblaApi.value) {
    scrollSnaps.value = emblaApi.value.scrollSnapList();
  }
});
</script>

<style scoped>
.embla {
  overflow: hidden;
  max-width: 48rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 25%;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}

.embla__controls {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
}
.embla__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
}

.embla__dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
}

.embla__dot {
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 0.75rem;
  height: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
}

.embla__dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

.embla__dot--selected {
  background: white;
}
</style>