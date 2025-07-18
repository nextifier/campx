<template>
  <Carousel
    @init-api="setApi"
    v-slot="{ scrollPrev, scrollNext, canScrollPrev, canScrollNext }"
    class="focusable relative overflow-hidden"
    :opts="{
      loop: true,
      align: 'start',
      dragFree: false,
    }"
    :plugins="[
      Autoplay({
        delay: 4000,
        // stopOnInteraction: false,
        // stopOnMouseEnter: true,
      }),
      $wheelGesturesPlugin(),
    ]"
  >
    <CarouselContent class="-ml-2 *:select-none">
      <CarouselItem
        v-for="(item, index) in items"
        :key="index"
        class="basis-full pl-2"
      >
        <div
          class="text-primary border-primary/10 flex h-full items-center rounded-2xl border bg-white/3 backdrop-blur-lg"
        >
          <div
            v-if="item.img"
            class="flex h-full w-24 shrink-0 items-center justify-center overflow-hidden rounded-l-2xl bg-white/6"
          >
            <NuxtImg
              :src="item.img.src"
              sizes="200px"
              :width="item.img.w"
              :height="item.img.h"
              loading="lazy"
              format="webp"
              class="size-full object-cover"
            />
          </div>

          <div
            class="flex flex-col items-start py-2.5 text-[13px] xl:text-sm"
            :class="item.img ? 'px-2.5' : 'px-4'"
          >
            <span
              v-if="item.subHeadline"
              class="line-clamp-1 font-bold tracking-tighter"
              >{{ item.subHeadline }}</span
            >
            <div
              v-if="item.content"
              v-html="item.content"
              class="text-primary/80 mt-1 line-clamp-4 !leading-[1.4] font-medium tracking-tight"
            />

            <nuxt-link
              v-if="item.cta"
              :to="item.cta.link"
              :target="item.cta.openInNewTab ? '_blank' : ''"
              class="text-primary mt-1 flex items-center gap-1 rounded-md font-semibold tracking-tighter transition hover:underline"
            >
              <span>{{ item.cta.label }}</span>
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </nuxt-link>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>

    <div class="mt-2.5 flex items-center justify-end gap-1.5">
      <button
        @click="scrollPrev"
        :disabled="!canScrollPrev"
        class="dark:bg-primary/5 border-primary/8 hover:bg-background/40 dark:hover:bg-primary/10 text-primary flex size-8 items-center justify-center rounded-md border backdrop-blur-md transition active:scale-95"
        aria-label="previous"
      >
        <Icon name="lucide:arrow-left" class="size-4" />
      </button>

      <button
        @click="scrollNext"
        :disabled="!canScrollNext"
        class="dark:bg-primary/5 border-primary/8 hover:bg-background/40 dark:hover:bg-primary/10 text-primary flex size-8 items-center justify-center rounded-md border backdrop-blur-md transition active:scale-95"
        aria-label="next"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>

      <button
        @click="toggleAutoplay"
        class="dark:bg-primary/5 border-primary/8 hover:bg-background/40 dark:hover:bg-primary/10 text-primary flex size-8 items-center justify-center rounded-md border backdrop-blur-md transition active:scale-95"
        aria-label="Toggle autoplay"
      >
        <Icon
          :name="isPlaying ? 'lucide:pause' : 'lucide:play'"
          class="size-4"
        />
      </button>
    </div>
  </Carousel>
</template>

<script setup>
import Autoplay from "embla-carousel-autoplay";

const store = useRootStore();

const emblaApi = ref(null);
const isPlaying = ref(false);

const setApi = (api) => {
  emblaApi.value = api;

  const autoplay = emblaApi.value.plugins().autoplay;
  if (!autoplay) return;

  isPlaying.value = autoplay.isPlaying();

  emblaApi.value.on("autoplay:play", () => {
    isPlaying.value = true;
  });
  emblaApi.value.on("autoplay:stop", () => {
    isPlaying.value = false;
  });
  emblaApi.value.on("reInit", () => {
    isPlaying.value = autoplay.isPlaying();
  });
};

const toggleAutoplay = () => {
  const autoplay = emblaApi.value?.plugins()?.autoplay;
  if (!autoplay) return;

  if (autoplay.isPlaying()) {
    autoplay.stop();
  } else {
    autoplay.play();
  }
};

onUnmounted(() => {
  if (emblaApi.value) {
    emblaApi.value.off("autoplay:play");
    emblaApi.value.off("autoplay:stop");
    emblaApi.value.off("reInit");
  }
});

const items = [
  {
    subHeadline: "Exhibitor Registration Is Open!",
    content: `
      <p>Showcase your brand to over 30,000+ buyers, distributors, and F&B professionals. This is your chance to shine in one of Southeast Asia's biggest food markets.</p>
    `,
    img: {
      src: "/img/banners/cover-1.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Book Your Space Now",
      link: "/book-space",
      openInNewTab: false,
    },
  },
  {
    subHeadline: "Three Expos, One Ticket!",
    content: `
      <p>Your pass also gets you into the <strong>Franchise & License Expo (FLEI)</strong>. Discover even more business models and opportunities, all in one place.</p>
    `,
    img: {
      src: "/img/banners/flei-poster.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Discover FLEI",
      link: "https://franchise-expo.co.id",
      openInNewTab: true,
    },
  },
  {
    subHeadline: "For the Love of Coffee",
    content: `
      <p>Your ticket includes full access to the <strong>Cafe & Brasserie Expo</strong>. Explore the latest in coffee, pastry, and cutting-edge cafe tech. A must-visit for cafe owners!</p>
    `,
    img: {
      src: "/img/banners/cafe-poster.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Explore Cafe & Brasserie Expo",
      link: "https://cafebrasserieexpo.com/",
      openInNewTab: true,
    },
  },
  {
    subHeadline: "Put Your Brand in the Spotlight",
    content: `
      <p>Become a sponsor and connect with key decision-makers. Maximize your visibility at the industry's most anticipated event. Let's discuss a partnership.</p>
    `,
    img: {
      src: "/img/banners/cover-2.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Become a Sponsor",
      link: `https://api.whatsapp.com/send?phone=${store.whatsapp}&text=Hello, ${store.appName}! I'm interested in sponsoring More Food Expo.`,
      openInNewTab: true,
    },
  },

  {
    subHeadline: "Did You Know?",
    content: `
      <p>Indonesia is the world's largest Halal food consumption market! It's a multi-billion dollar opportunity waiting for the right products. Are you ready?</p>
    `,
    img: {
      src: "/img/banners/cover-3.jpg",
      w: 400,
      h: 500,
    },
    cta: null,
  },
  {
    subHeadline: "Pro Tip for Visitors",
    content: `
      <p>Wear your most comfortable shoes! With over 20,000m² of space and 1,200+ exhibitors to explore, you'll be doing a lot of walking (and even more tasting!).</p>
    `,
    img: {
      src: "/img/banners/cover-4.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "See Who's Exhibiting",
      link: "/brands",
      openInNewTab: false,
    },
  },
  {
    subHeadline: "Early Bird Tickets Are Coming!",
    content: `
      <p>Want to get the best price for your ticket? Follow us on social media to be the first to know when our Early Bird promo launches. Don't miss out!</p>
    `,
    img: {
      src: "/img/banners/cover-5.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Follow Us on Instagram",
      link: "https://www.instagram.com/morefoodexpo.id",
      openInNewTab: true,
    },
  },
];
</script>
