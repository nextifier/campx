<template>
  <Carousel
    v-if="items?.length"
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
        delay: 6000,
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
    subHeadline: "BARU! Glamping di Cabin X",
    content: `
      <p>Nikmatin nyamannya staycation dengan vibe alam yang maksimal. Kabin baru kami udah siap kamu booking. Kapan lagi coba?</p>
    `,
    img: {
      src: "/img/banners/banner-cabin.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Cek Detail Kabin",
      link: "/experiences/cabin",
      openInNewTab: false,
    },
  },
  {
    subHeadline: "Outing Kantor Anti Mainstream",
    content: `
      <p>Bosen sama outing yang gitu-gitu aja? Ajak tim kamu ke CampX! Fasilitas lengkap, aktivitas seru, dijamin bikin tim makin solid.</p>
    `,
    img: {
      src: "/img/banners/banner-outing.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Tanya Paket Grup",
      link: "/contact",
      openInNewTab: false,
    },
  },
  {
    subHeadline: "Udah Tau Belum?",
    content: `
      <p>CampX berada di tepi Waduk Jatiluhur, lho! Yang ternyata adalah waduk terbesar se-Indonesia. Pemandangannya? Juara!</p>
    `,
    img: {
      src: "/img/banners/banner-waduk.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Lihat Lokasi di Peta",
      link: "https://maps.app.goo.gl/1uhAWnpqFdcH6Au66",
      openInNewTab: true,
    },
  },
  {
    subHeadline: "Taklukkan Danau dengan SUP!",
    content: `
      <p>Udah pernah coba Stand-Up Paddle Board? Tamu yang nginap di CampX bisa main gratis, lho. Uji keseimbanganmu sambil nikmatin view terbaik!</p>
    `,
    img: {
      src: "/img/banners/banner-sup.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Cobain Stand-Up Paddle",
      link: "/experiences/stand-up-paddle",
      openInNewTab: false,
    },
  },
  {
    subHeadline: "Share Momen Kerenmu!",
    content: `
      <p>Jangan lupa tag @campx.id di Instagram & TikTok saat kamu posting keseruanmu! Pasti di-repost sama mimin. 😉</p>
    `,
    img: {
      src: "/img/banners/banner-socmed.jpg",
      w: 400,
      h: 500,
    },
    cta: {
      label: "Follow Instagram CampX",
      link: "https://instagram.com/campx.id",
      openInNewTab: true,
    },
  },
];
</script>
