<template>
  <!-- <ComingSoon
    title="FAQ"
    description="We are gathering commonly asked questions. Please come back later 😉"
  /> -->
  <div id="faq-page" class="min-h-screen-offset pt-6 pb-16">
    <FAQ />
  </div>
</template>

<script setup>
const store = new useRootStore();
const route = useRoute();
const config = useRuntimeConfig();

const title = `FAQ`;
const description =
  "Got questions about More Food Expo? Find answers about the venue, event hours, tickets, and how to get here. Everything you need to know before you go.";

useSeoMeta({
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
</script>
