<template>
  <section
    id="hero"
    class="from-background to-background via-accent/10 dark:via-accent/15 relative isolate bg-linear-to-b lg:bg-radial-[at_25%_25%]"
  >
    <div
      class="from-background to-background/0 absolute inset-x-0 top-0 z-0 h-[20%] bg-linear-to-b"
    ></div>
    <div
      class="from-background to-background/0 absolute inset-x-0 bottom-0 z-0 h-[20%] bg-linear-to-t"
    ></div>

    <div class="container-wider min-h-screen-offset relative z-20">
      <div
        class="min-h-screen-offset grid grid-cols-1 gap-x-6 gap-y-6 pt-6 md:grid-cols-2 md:items-center md:pt-0 xl:grid-cols-3"
      >
        <div class="3xl:gap-y-24 order-first h-full">
          <div
            class="xl:min-h-screen-offset flex flex-col items-start md:py-10 xl:justify-end"
          >
            <span class="section-subtitle"
              >Pengalaman Camping & Outing Kekinian di Tepi Danau.</span
            >

            <h1
              class="text-primary 0 mt-2 text-[clamp(3rem,3.5vw,6rem)] !leading-[1.2] font-semibold tracking-[-0.06em] text-balance"
            >
              <SplitText
                class="pb-1"
                text="Lepasin Penatnya Kota, Hirup Lagi Segarnya Alam."
              />
            </h1>

            <p class="section-description mt-0">
              Di sini, alarm pagimu adalah suara alam, bukan lagi dering hape.
              Tempatmu buat istirahat, main, dan nemuin lagi energimu yang
              hilang.
            </p>

            <div class="mt-6 flex w-full flex-wrap gap-2 md:gap-3">
              <nuxt-link
                to="/#experiences"
                class="bg-primary text-primary-foreground hover:bg-primary/80 flex items-center justify-center rounded-xl px-4 py-3 font-semibold tracking-tight transition active:scale-95"
                v-ripple
                v-scroll-to="{
                  el: '#experiences',
                  offset: -56,
                }"
                >Mulai Petualanganmu</nuxt-link
              >

              <button
                @click="dialogs.updateDialog('inquiry', true)"
                to="/contact"
                class="hover:bg-primary/5 dark:hover:bg-primary/8 text-primary border-primary/8 flex items-center justify-center rounded-xl px-4 py-3 font-semibold tracking-tight transition active:scale-95"
                v-ripple
              >
                Buat Outing
              </button>
            </div>

            <div
              v-if="store.socialProof?.length"
              class="xs:w-auto mt-6 grid w-full grid-cols-2 gap-x-3"
            >
              <NuxtLink
                v-for="(item, index) in store.socialProof"
                :key="index"
                :to="item.link"
                target="_blank"
                class="hover:bg-primary/5 flex flex-col gap-y-1 rounded-xl px-2 py-2 transition active:scale-95 sm:px-4"
              >
                <div class="flex items-center gap-x-2">
                  <Icon
                    :name="item.iconName"
                    class="text-primary size-4 shrink-0"
                  />
                  <IconStar class="text-primary size-4 shrink-0" />

                  <span
                    class="text-muted-foreground items-center text-xs tracking-tight"
                    ><span class="text-primary text-xl font-semibold">{{
                      item.rating
                    }}</span
                    >/5</span
                  >
                </div>

                <div class="inline-flex items-center gap-x-1">
                  <span class="text-muted-foreground text-sm tracking-tight"
                    >{{ item.totalReviews }} reviews on {{ item.name }}</span
                  >
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="relative order-2 h-full md:order-last md:col-span-2 md:max-w-md xl:order-2 xl:col-span-1 xl:max-w-none"
        >
          <div
            @click="togglePlayPause"
            class="bg-primary/5 group relative aspect-9/16 size-full cursor-pointer overflow-hidden rounded-xl"
          >
            <video
              ref="videoRef"
              autoplay
              loop
              muted
              playsinline
              poster="/video/hero-video-poster.jpg"
              class="size-full object-cover"
            >
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>

            <div
              class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity pointer-fine:group-hover:opacity-100"
              :class="{ '!opacity-100': !isPlaying }"
            >
              <div
                class="flex size-16 items-center justify-center rounded-full bg-white/30 text-white outline -outline-offset-6 outline-white transition hover:bg-white/60 active:scale-95"
              >
                <Icon
                  :name="
                    isPlaying
                      ? 'material-symbols:pause-rounded'
                      : 'material-symbols:play-arrow-rounded'
                  "
                  class="size-8"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="order-3 h-full md:order-2 md:pt-10 xl:order-last">
          <div class="relative ml-auto flex size-full flex-col gap-y-6">
            <BannerHero class="relative z-20 w-full shrink-0" />

            <div
              class="bg-muted relative isolate size-full grow overflow-hidden rounded-2xl"
            >
              <NuxtImg
                src="/img/hero-img.jpeg"
                alt=""
                class="relative z-10 size-full object-cover"
                width="400"
                height="600"
                sizes="100vw lg:600px"
                format="webp"
              />

              <div
                class="absolute inset-x-0 bottom-0 z-20 flex h-1/2 flex-col justify-end bg-linear-to-t from-black/60 to-transparent px-6 pb-10"
              >
                <span
                  class="text-4xl !leading-[1.2] font-semibold tracking-tighter text-white text-shadow-md sm:text-5xl"
                  >Lupain To-Do List, Ingat Lagi Caranya Bengong.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const store = useRootStore();
const dialogs = useDialogStore();

const videoRef = ref(null);
const isPlaying = ref(true);
const isManuallyPaused = ref(false);

let observer = null;

const togglePlayPause = () => {
  const video = videoRef.value;
  if (!video) return;

  if (video.paused) {
    video.play();
    isPlaying.value = true;
    isManuallyPaused.value = false;
  } else {
    video.pause();
    isPlaying.value = false;
    isManuallyPaused.value = true;
  }
};

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = videoRef.value;
      if (!video) return;

      if (entry.isIntersecting) {
        if (!isManuallyPaused.value) {
          video.play().catch((e) => console.error("Video play failed:", e));
          isPlaying.value = true;
        }
      } else {
        video.pause();
        isPlaying.value = false;
      }
    });
  }, options);

  if (videoRef.value) {
    observer.observe(videoRef.value);
  }
});

onUnmounted(() => {
  if (observer && videoRef.value) {
    observer.unobserve(videoRef.value);
  }
});
</script>
