<template>
  <div class="relative space-y-16 overflow-hidden pb-10 lg:space-y-24 lg:pb-16">
    <Hero />
    <Experiences class="py-6 lg:py-10" />
    <!-- <TextFit
      tag="span"
      text="Meet. Greet. Eat."
      :animated="true"
      text-classes="text-accent text-center font-extrabold tracking-tighter italic text-accent text-center font-extrabold tracking-tighter italic"
    /> -->
  </div>
</template>

<script setup>
const store = new useRootStore();
const route = useRoute();
const config = useRuntimeConfig();
const title = `CampX Holiday Park Jatiluhur`;
const description = "";

defineOptions({
  name: "index",
});

useSeoMeta({
  titleTemplate: "%s",
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: config.public.siteUrl + route.fullPath,
  twitterCard: "summary_large_image",
});

defineOgImageComponent("Page", {
  headline: store.appName,
  title: title,
  description: description,
});

// defineOgImage({
//   url: "/og/og-home.jpg",
// });
</script>
