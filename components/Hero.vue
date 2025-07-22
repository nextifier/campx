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
            <span class="section-subtitle">Camping. Glamping. Outing</span>

            <h1
              class="text-primary mt-2 text-[clamp(3rem,3.5vw,6rem)] !leading-[1.2] font-semibold tracking-[-0.06em] text-balance"
            >
              <SplitText
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
                >Mulai Petualanganmu</nuxt-link
              >

              <nuxt-link
                to="/contact"
                class="hover:bg-primary/5 dark:hover:bg-primary/8 text-primary border-primary/8 flex items-center justify-center rounded-xl px-4 py-3 font-semibold tracking-tight transition active:scale-95"
                v-ripple
                >Buat Outing</nuxt-link
              >
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
          class="relative order-2 h-full md:order-last md:col-span-2 xl:order-2 xl:col-span-1"
        >
          <div class="bg-primary/5 relative aspect-9/16 size-full rounded-xl">
            <button
              class="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 outline -outline-offset-6 outline-white transition hover:bg-white/60 active:scale-95"
            >
              <IconPlay class="size-5 text-white" />
            </button>
          </div>
        </div>

        <div class="order-3 h-full md:order-2 md:pt-10 xl:order-last">
          <div class="relative ml-auto flex size-full flex-col gap-y-6">
            <!-- <BannerHero class="relative z-20 w-full" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const store = useRootStore();
</script>
