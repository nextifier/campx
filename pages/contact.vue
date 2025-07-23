<template>
  <div class="min-h-screen-offset pt-6 pb-16">
    <div class="container lg:max-w-(--breakpoint-xs)">
      <ContactForm
        title="Contact us"
        description="Ada rencana outing atau butuh info lebih lanjut? Hubungi tim CampX di sini! Dapatkan penawaran untuk acara grup, gathering, atau sekadar tanya-tanya."
        :showBrandField="false"
      />
    </div>
  </div>
</template>

<script setup>
const store = new useRootStore();
const route = useRoute();
const config = useRuntimeConfig();

const title = `Contact`;
const description =
  "Ada rencana outing atau butuh info lebih lanjut? Hubungi tim CampX di sini! Dapatkan penawaran untuk acara grup, gathering, atau sekadar tanya-tanya.";

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
