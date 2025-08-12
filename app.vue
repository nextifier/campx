<template>
  <Body class="bg-background text-body">
    <div class="font-sans text-sm antialiased sm:text-base">
      <NuxtLoadingIndicator color="#4eb362" />
      <NuxtLayout>
        <NuxtPage :keepalive="{ include: 'index' }" />
      </NuxtLayout>
      <Toaster class="pointer-events-auto" />
    </div>
  </Body>
</template>

<script setup>
import "vue-sonner/style.css";

const store = useRootStore();

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${store.appName}`,
  url: `https://${store.website}`,
  alternateName: `${store.appName}`,
};

useHead({
  titleTemplate: "%s · %siteName",

  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
});

onMounted(() => {
  useNuxtApp().$updateMetaThemeColor();
});
</script>
