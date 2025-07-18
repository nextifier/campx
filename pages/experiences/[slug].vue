<template>
  <div v-if="experience" class="pb-14 lg:pt-4 lg:pb-20">
    <div class="sm:container">
      <div class="grid grid-cols-1 gap-y-4 lg:gap-y-8">
        <div class="relative">
          <GallerySlider
            v-if="experience.photos?.length"
            :item="experience"
            class="lg:hidden"
          />
          <GalleryBentoGrid
            v-if="experience.photos?.length"
            :item="experience"
            class="hidden lg:grid"
          />

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
          class="grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:grid-cols-12"
        >
          <div class="flex flex-col items-start gap-y-4 lg:col-span-8">
            <h1 class="section-title">{{ experience.title }}</h1>

            <div
              v-if="experience.categories?.length"
              class="no-scrollbar text-primary/70 line-clamp-1 overflow-x-auto text-xs"
            >
              {{ experience.categories.join(", ") }}
            </div>
          </div>

          <pre
            class="max-w-xl overflow-scroll rounded-xl bg-gray-950 p-4 text-sm text-gray-300 sm:p-6"
            >{{ experiences }}</pre
          >

          <!-- <div class="grid grid-cols-2 gap-2 lg:col-span-4">
            <template
              v-for="(item, index) in [
                { label: 'Date', value: event.date },
                { label: 'Venue', value: event.venue },
                { label: 'Total Participants', value: event.totalParticipants },
                { label: 'Client', value: event.client.name },
              ]"
              :key="index"
            >
              <div
                v-if="item.value"
                class="bg-muted flex flex-col items-start gap-y-1 rounded-xl p-6"
              >
                <span class="text-primary/70 text-sm tracking-tight">{{
                  item.label
                }}</span>
                <span
                  class="text-primary text-base font-semibold tracking-tighter sm:text-lg"
                  >{{ item.value }}</span
                >
              </div>
            </template>
          </div> -->
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

const title = experience.title ?? "";
const description = experience.description ?? "";

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
