import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, ref } from "vue";
import type { EmblaCarouselType as CarouselApi } from "embla-carousel";
import type { CarouselEmits, CarouselProps } from "./interface";

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }: CarouselProps, emits: CarouselEmits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );

    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    function scrollTo(index: number) {
      emblaApi.value?.scrollTo(index);
    }

    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);

    function onSelect(api: CarouselApi) {
      canScrollNext.value = api.canScrollNext();
      canScrollPrev.value = api.canScrollPrev();
      selectedIndex.value = api.selectedScrollSnap();
      scrollSnaps.value = api.scrollSnapList();
    }

    onMounted(() => {
      if (!emblaApi.value) return;

      emblaApi.value?.on("init", onSelect);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);

      emits("init-api", emblaApi.value);
    });

    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
      scrollSnaps,
      selectedIndex,
      orientation,
    };
  },
);

function useCarousel() {
  const carouselState = useInjectCarousel();

  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");

  return carouselState;
}

export { useCarousel, useProvideCarousel };
