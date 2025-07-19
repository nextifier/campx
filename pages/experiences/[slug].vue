<template>
  <div v-if="experience" class="pb-14 lg:pt-4 lg:pb-20">
    <div class="sm:container">
      <div class="grid grid-cols-1 gap-y-4 lg:gap-y-8">
        <div class="relative">
          <GallerySlider :item="experience" class="lg:hidden" />
          <GalleryBentoGrid :item="experience" class="hidden lg:grid" />

          <DialogResponsive
            v-if="experience.photos?.length"
            dialogName="experience-gallery"
            :isResponsive="false"
            :overflowContent="true"
            :drawerCloseButton="false"
          >
            <template #trigger="{ openDialog }">
              <button
                type="button"
                @click="openDialog"
                class="absolute right-4 bottom-4 z-20 flex items-center gap-x-1 rounded-xl bg-white px-3 py-2 text-sm font-semibold tracking-tight text-black transition hover:bg-gray-200 active:scale-95"
              >
                <Icon
                  name="mingcute:dot-grid-fill"
                  class="sizes-5 flex-shrink-0"
                />
                <span>Show all</span>
              </button>
            </template>

            <template #default="{ data }">
              <div class="mx-auto w-full max-w-[1920px] px-1 pb-8">
                <div
                  class="columns-1 gap-1 space-y-1 sm:columns-2 xl:columns-3"
                >
                  <div
                    v-for="(item, index) in experience.photos"
                    :key="index"
                    class="bg-muted break-inside-avoid"
                  >
                    <img
                      :src="`${item.src}`"
                      :alt="item.alt"
                      :width="item.w"
                      :height="item.h"
                      class="pointer-events-none h-full w-full rounded-none object-cover select-none"
                      sizes="400px"
                      loading="lazy"
                      format="webp"
                    />
                  </div>
                </div>
              </div>
            </template>
          </DialogResponsive>
        </div>

        <div
          class="flex items-center justify-between px-4 sm:px-0 lg:order-first"
        >
          <BackButton />
          <DialogShare :pageTitle="title" />
        </div>
      </div>

      <div class="mt-6 flex flex-col px-4 sm:px-0 lg:mt-10">
        <div
          class="grid grid-cols-1 items-start gap-x-8 gap-y-12 lg:grid-cols-12"
        >
          <div class="flex flex-col items-start lg:col-span-8">
            <h1 class="section-title">{{ experience.title }}</h1>

            <div
              v-if="experience.categories?.length"
              class="text-primary/70 mt-4"
            >
              {{ experience.categories.join(", ") }}
            </div>

            <div
              v-if="experience.description"
              class="format-html"
              v-html="experience.description"
            ></div>

            <div v-if="experience.checkInOut" class="mt-4 flex gap-x-8">
              <div
                v-if="experience.checkInOut.in"
                class="flex flex-col gap-y-1.5"
              >
                <span class="text-muted-foreground text-sm tracking-tight"
                  >Check-in</span
                >
                <span class="text-base font-semibold tracking-tight">{{
                  experience.checkInOut.in
                }}</span>
              </div>

              <div
                v-if="experience.checkInOut.out"
                class="flex flex-col gap-y-1.5"
              >
                <span class="text-muted-foreground text-sm tracking-tight"
                  >Check-out</span
                >
                <span class="text-base font-semibold tracking-tight">{{
                  experience.checkInOut.out
                }}</span>
              </div>
            </div>

            <div
              v-if="experience.included?.length"
              class="mt-8 flex flex-col gap-y-2 tracking-tight"
            >
              <span class="font-semibold">Sudah termasuk:</span>

              <div class="flex flex-col gap-y-2">
                <div
                  v-for="(item, index) in experience.included"
                  :key="index"
                  class="flex gap-x-1.5"
                >
                  <Icon
                    name="lucide:check"
                    class="size-[1lh] shrink-0 scale-80 text-green-500"
                  />
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>

            <div
              v-if="experience.excluded?.length"
              class="mt-8 flex flex-col gap-y-2 tracking-tight"
            >
              <span class="font-semibold">Belum termasuk:</span>

              <div class="flex flex-col gap-y-2">
                <div
                  v-for="(item, index) in experience.excluded"
                  :key="index"
                  class="flex gap-x-1.5"
                >
                  <Icon
                    name="lucide:x"
                    class="size-[1lh] shrink-0 scale-80 text-red-500"
                  />
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:col-span-4">
            <div
              v-if="experience.pricing?.length"
              class="shadow-wrapper rounded-2xl"
            >
              <div class="grid gap-y-5 px-4 py-8">
                <div
                  v-for="(pricing, index) in experience.pricing"
                  :key="index"
                  class="flex flex-col items-start gap-y-1.5 tracking-tight"
                >
                  <span v-if="pricing.label" class="text-sm">{{
                    pricing.label
                  }}</span>
                  <div class="">
                    <span
                      v-if="pricing.value"
                      class="text-xl font-bold tracking-tighter"
                      >{{ format(pricing.value) }}</span
                    >
                    <span
                      v-if="pricing.unit"
                      class="text-muted-foreground text-sm"
                    >
                      / {{ pricing.unit }}</span
                    >
                  </div>
                </div>

                <ul v-if="experience.pricingNotes?.length" class="space-y-2">
                  <li
                    v-for="(item, index) in experience.pricingNotes"
                    :key="index"
                    class="text-muted-foreground text-sm tracking-tight"
                  >
                    {{ item }}
                  </li>
                </ul>

                <div class="mt-2 flex flex-col items-start">
                  <nuxt-link
                    :to="`https://api.whatsapp.com/send?phone=${store.whatsapp}&text=Hai, CampX! Saya mau reservasi untuk paket ${experience.title}`"
                    target="_blank"
                    class="bg-primary text-primary-foreground items-cente hover:bg-accent hover:text-accent-foreground flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold tracking-tight transition active:scale-95"
                  >
                    <span>Pesan sekarang</span>
                    <NuxtImg
                      src="/img/etc/3d-wa-logo.webp"
                      class="pointer-events-none size-6 select-none"
                      width="44"
                      height="44"
                      sizes="40px"
                      alt="WhatsApp"
                      format="webp"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-16 lg:mt-24">
      <h2 class="section-title">Experience lainnya dari CampX</h2>
    </div>

    <ExperienceSlider :items="otherExperiences" class="mt-6" />
  </div>
</template>

<script setup>
const route = useRoute();
const store = useRootStore();
const config = useRuntimeConfig();
const { $dayjs } = useNuxtApp();
const { format } = useCurrencyFormat();

const experiences = useExperienceStore();
const experience = experiences.getItemBySlug(route.params.slug);

const otherExperiences = computed(() => {
  return experiences.list.filter((item) => item.slug !== route.params.slug);
});

if (!experience) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

const title = experience?.title ?? "";
const description = experience?.description ?? "";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: config.public.siteUrl + route.fullPath,
  twitterCard: "summary_large_image",
  ogType: "website",
});

defineOgImageComponent("Page", {
  headline: store.appName,
  title: title,
  description: description,
});

const router = useRouter();
defineShortcuts({
  escape: {
    handler: async () => {
      router.back();
    },
  },
});

const hideScrollbar = () => {
  document.querySelector("html").classList.add("no-scrollbar");
};

const showScrollbar = () => {
  document.querySelector("html").classList.remove("no-scrollbar");
};
</script>
