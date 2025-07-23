<template>
  <section id="cta">
    <div class="sm:container">
      <div
        class="flex flex-col gap-x-6 gap-y-16 lg:flex-row lg:justify-between xl:gap-x-10"
      >
        <div
          class="flex flex-col items-center gap-y-4 px-4 sm:px-0 lg:items-start"
        >
          <div class="relative isolate w-full">
            <NuxtImg
              src="/img/review-img.png"
              alt=""
              class="pointer-events-none relative z-10 size-full origin-bottom-right scale-110 rounded-4xl object-contain select-none"
              sizes="100vw lg:1600px"
              width="1600"
              height="1600"
              loading="lazy"
              format="webp"
            />
            <div
              class="bg-muted absolute inset-x-0 bottom-0 z-0 h-[90%] rounded-4xl"
            ></div>
          </div>

          <div
            class="flex flex-col items-center px-4 text-center sm:px-0 lg:items-start lg:text-left"
          >
            <h2
              class="relative isolate text-[clamp(3rem,12vw,10rem)] !leading-[1] font-extrabold tracking-tighter text-balance lg:text-[clamp(4rem,16vw,9rem)]"
            >
              <SplitText
                splitType="words"
                ease="power4.out"
                :delay="150"
                :duration="2"
                :text="`
                <span class='text-outline'>Stop Scrolling.</span>
                <span class='text-accent'>Start Tasting.</span>
              `"
                class="pb-2 sm:pb-5"
              />
            </h2>
            <p
              class="text-primary/70 mt-1 max-w-2xl text-base font-medium tracking-tight text-balance sm:text-lg"
            >
              Your screen can't capture the taste of opportunity. Secure your
              ticket and get ready to experience the future of the F&B industry.
            </p>

            <nuxt-link
              to="/"
              class="bg-primary text-primary-foreground hover:bg-primary/80 mt-6 flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold tracking-tight transition active:scale-95"
              v-ripple
              >Get my ticket</nuxt-link
            >
          </div>
        </div>

        <div
          class="no-scrollbar flex justify-center-safe gap-x-4 gap-y-12 overflow-auto px-4 pb-4 lg:max-w-[240px] lg:translate-y-[7%] lg:flex-col lg:justify-start lg:overflow-visible lg:p-0"
        >
          <div
            v-for="(banner, index) in banners"
            :key="index"
            class="flex w-[240px] shrink-0 flex-col items-start gap-2 lg:w-full"
          >
            <nuxt-link
              :to="banner.cta.link"
              :target="banner.cta.openInNewTab ? '_blank' : ''"
              class="lg:shadow-wrapper aspect-4/5 w-full rounded-xl transition duration-500 sm:rounded-2xl lg:hover:rotate-6"
            >
              <NuxtImg
                v-if="banner.image"
                :src="banner.image"
                :alt="banner.title"
                class="bg-muted border-border size-full rounded-lg border object-cover select-none sm:rounded-xl lg:shadow-md"
                sizes="240px"
                width="1080"
                height="1350"
                loading="lazy"
                format="webp"
              />
            </nuxt-link>

            <span
              v-if="banner.subtitle"
              class="mt-2 text-sm font-semibold tracking-tighter text-[var(--accent-color-light)] dark:text-[var(--accent-color-dark)]"
              :style="{
                '--accent-color-light': banner.accentColor.light,
                '--accent-color-dark': banner.accentColor.dark,
              }"
            >
              {{ banner.subtitle }}
            </span>

            <h6
              v-if="banner.title"
              class="text-primary text-base !leading-[1.3] font-semibold tracking-tighter sm:text-lg"
            >
              {{ banner.title }}
            </h6>

            <p
              v-if="banner.description"
              class="text-primary/70 text-sm tracking-tight"
            >
              {{ banner.description }}
            </p>

            <nuxt-link
              v-if="banner.cta"
              :to="banner.cta.link"
              :target="banner.cta.openInNewTab ? '_blank' : ''"
              class="bg-border/60 hover:bg-border/80 mt-1 flex items-center justify-center gap-x-1 rounded-lg py-2 pr-2 pl-3 text-sm font-semibold tracking-tight transition active:scale-95"
              v-ripple
            >
              <span>{{ banner.cta.label }}</span>
              <Icon name="lucide:arrow-up-right" class="size-4" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dialogs = useDialogStore();

const banners = [
  {
    image: "/img/banners/flei-poster.jpg",
    subtitle: "Franchise & License Expo Indonesia",
    title: "Ready to Grow Your Brand?",
    description:
      "Your ticket also unlocks access to Indonesia's premier franchise event. Discover proven business models and find your path to expansion.",
    accentColor: {
      light: "#0891b2",
      dark: "#06b6d4",
    },
    cta: {
      label: "Explore FLEI",
      link: "https://franchise-expo.co.id",
      openInNewTab: true,
    },
  },
  {
    image: "/img/banners/cafe-poster.jpg",
    subtitle: "Cafe & Brasserie Expo Indonesia",
    title: "For the Coffee Obsessed.",
    description:
      "Step into the world of coffee, pastries, and cafe culture. Your pass includes full entry to this specialized expo, happening right alongside More Food Expo.",
    accentColor: {
      light: "#795548",
      dark: "#a1887f",
    },
    cta: {
      label: "Explore Cafe & Brasserie Expo",
      link: "https://cafebrasserieexpo.com/", // Corrected link based on previous context
      openInNewTab: true,
    },
  },
];
</script>
