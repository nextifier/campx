<template>
  <ContactForm
    title="Contact us"
    description="Have questions or need assistance? Contact us for information on tickets, partnerships, and event details. We're here to help!"
    :showBrandField="false"
  />
</template>

<script setup>
const store = new useRootStore();
const route = useRoute();
const config = useRuntimeConfig();

const title = `Contact`;
const description =
  "Need to get in touch? Here are the contact details for the More Food Expo team. We're ready to help with your questions about the event.";

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

// defineOgImage({
//   url: "/og/og-contact.jpg",
// });
</script>
