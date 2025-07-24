<template>
  <div v-if="experience" class="pb-14 lg:pt-4 lg:pb-20">
    <div class="sm:container">
      <div class="grid grid-cols-1 gap-y-4 lg:gap-y-8">
        <!-- <div class="relative">
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
        </div> -->

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
          <div class="lg:col-span-4">
            <div class="bg-muted aspect-4/5 overflow-hidden rounded-xl">
              <NuxtImg
                :src="experience.coverImage"
                :alt="experience.title"
                class="size-full object-cover select-none"
                width="1080"
                height="1350"
                sizes="100vw lg:600px"
                loading="lazy"
                format="webp"
              />
            </div>
          </div>

          <div class="flex flex-col items-start lg:col-span-5 lg:pt-2">
            <StatusIndicator :status="experience.status" />

            <h1 class="section-title mt-2">{{ experience.title }}</h1>

            <div
              v-if="experience.categories?.length"
              class="mt-4 flex flex-wrap gap-2"
            >
              <span
                v-for="(item, index) in experience.categories"
                :key="index"
                class="text-primary bg-muted rounded-lg px-3 py-1.5 text-sm tracking-tight"
                >{{ item }}</span
              >
            </div>

            <div
              v-if="experience.description"
              class="format-html"
              v-html="experience.description"
            ></div>

            <div
              v-if="experience.checkInOut"
              class="mt-4 grid w-full max-w-sm grid-cols-2 gap-x-4"
            >
              <div
                v-if="experience.checkInOut.in"
                class="flex items-start gap-x-2"
              >
                <Icon
                  name="hugeicons:calendar-check-in-01"
                  class="size-5 shrink-0"
                />
                <div class="flex flex-col gap-y-1.5">
                  <span class="text-sm tracking-tight">Check-in</span>
                  <span
                    class="text-primary text-base font-semibold tracking-tight"
                    >{{ experience.checkInOut.in }}</span
                  >
                </div>
              </div>

              <div
                v-if="experience.checkInOut.out"
                class="flex items-start gap-x-2"
              >
                <Icon
                  name="hugeicons:calendar-check-out-01"
                  class="size-5 shrink-0"
                />
                <div class="flex flex-col gap-y-1.5">
                  <span class="text-sm tracking-tight">Check-out</span>
                  <span
                    class="text-primary text-base font-semibold tracking-tight"
                    >{{ experience.checkInOut.out }}</span
                  >
                </div>
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

            <div
              v-if="experience.rundown?.length"
              class="mt-8 flex flex-col gap-y-4"
            >
              <h6 class="font-semibold tracking-tight">Rundown</h6>

              <div class="grid gap-y-8">
                <div
                  v-for="(rundown, index) in experience.rundown"
                  :key="index"
                  class="flex flex-col gap-y-2"
                >
                  <span class="font-semibold tracking-tight uppercase"
                    >Day {{ rundown.day }}:</span
                  >

                  <ul
                    class="list-outside list-disc space-y-2 pl-5 tracking-tight"
                  >
                    <li v-for="(item, index) in rundown.list" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <NuxtLink
              to="https://maps.app.goo.gl/1uhAWnpqFdcH6Au66"
              target="_blank"
              class="mt-8 flex w-full flex-col"
            >
              <span class="font-semibold tracking-tight">Lokasi</span>

              <p class="mt-2 tracking-tight">
                Jl. Waduk Jatiluhur, Jatimekar, Kec. Jatiluhur, Kabupaten
                Purwakarta, Jawa Barat 41152
              </p>

              <div
                class="bg-muted mt-4 aspect-4/5 w-full max-w-xl overflow-hidden rounded-xl lg:aspect-16/9"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.950156367725!2d107.39153497499031!3d-6.52797976381809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690f120bf9c52f%3A0x5c35615e66748e40!2sCampX%20Jatiluhur!5e0!3m2!1sen!2sid!4v1753072109648!5m2!1sen!2sid"
                  class="size-full border-0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </NuxtLink>
          </div>

          <div class="flex flex-col lg:col-span-3">
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
                  <div>
                    <span
                      v-if="pricing.value"
                      class="text-primary text-xl font-bold tracking-tighter"
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
                    class="text-sm tracking-tight"
                  >
                    {{ item }}
                  </li>
                </ul>

                <div class="mt-2 flex flex-col items-start">
                  <nuxt-link
                    v-if="experience.status.toLocaleLowerCase() === 'available'"
                    :to="`https://api.whatsapp.com/send?phone=${store.whatsapp}&text=Hai, CampX! Saya mau reservasi untuk paket ${experience.title}`"
                    target="_blank"
                    class="bg-primary text-primary-foreground items-cente hover:bg-primary/80 flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold tracking-tight transition active:scale-95"
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

                  <span v-else class="tracking-tight"
                    >Hai, Traveler! Maaf, paket ini sekarang lagi belum bisa
                    diorder. Kunjungi lagi halaman ini kapan-kapan ya!</span
                  >
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col items-start">
              <a
                href="/files/campx-sitemap.pdf"
                target="_blank"
                class="bg-muted hover:bg-border text-primary flex items-center justify-center gap-x-2 rounded-xl px-5 py-3 tracking-tight"
              >
                <Icon name="hugeicons:maps" class="size-5 shrink-0" />
                <span>Denah CampX</span>
              </a>
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
const description =
  experience?.shortDescription ?? experience?.description ?? "";

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
