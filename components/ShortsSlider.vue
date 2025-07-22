<template>
  <Carousel
    v-if="shorts?.length"
    v-slot="{ scrollPrev, scrollNext, canScrollPrev, canScrollNext }"
    class="focusable relative overflow-hidden"
    :opts="{
      loop: false,
      align: 'center',
      dragFree: false,
      skipSnaps: true,
    }"
    :plugins="[$wheelGesturesPlugin()]"
  >
    <CarouselContent class="carousel-mx -ml-2 *:select-none">
      <CarouselItem
        v-for="(short, index) in shorts"
        :key="index"
        class="carousel-item basis-[160px] pl-2 lg:basis-[240px]"
      >
        <button
          class="group flex w-full flex-col gap-y-2 text-left transition active:scale-95"
          @click="
            dialogs.updateDialog('embed-media', true, {
              src: `https://www.youtube.com/embed/${short.video_id}`,
              width: 1080,
              height: 1920,
              caption: short.caption,
            })
          "
        >
          <div
            class="relative isolate aspect-[9/16] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900"
          >
            <NuxtImg
              v-if="short.thumb"
              :src="short.thumb"
              :alt="short.caption ?? ''"
              class="relative z-10 h-full w-full object-cover"
              sizes="240px lg:360px"
              format="webp"
              loading="lazy"
            />

            <div
              class="absolute inset-0 z-20 hidden items-center justify-center bg-black/60 group-hover:flex"
            >
              <Icon
                name="material-symbols:play-arrow-rounded"
                class="size-12 text-white"
              />
            </div>
          </div>

          <p
            v-if="short.caption"
            class="text-sm font-medium tracking-tight text-black sm:text-base dark:text-white"
          >
            {{ short.caption }}
          </p>
        </button>
      </CarouselItem>
    </CarouselContent>

    <div
      v-if="canScrollPrev || canScrollNext"
      class="container mt-6 flex justify-end gap-2"
    >
      <button
        @click="scrollPrev"
        :disabled="!canScrollPrev"
        class="bg-muted hover:bg-border text-primary flex size-8 items-center justify-center rounded-md transition active:scale-95"
        aria-label="previous"
      >
        <Icon name="lucide:arrow-left" class="size-4" />
      </button>

      <button
        @click="scrollNext"
        :disabled="!canScrollNext"
        class="bg-muted hover:bg-border text-primary flex size-8 items-center justify-center rounded-md transition active:scale-95"
        aria-label="next"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>

      <!-- <nuxt-link
        to="/experiences"
        class="text-primary hover:bg-primary hover:text-primary-foreground flex h-8 items-center justify-center rounded-md border px-4 text-sm font-semibold tracking-tight transition active:scale-95"
      >
        <span>View all</span>
      </nuxt-link> -->
    </div>
  </Carousel>
</template>

<script setup>
const dialogs = useDialogStore();
const shorts = useShortStore().list;
</script>
