<template>
  <ConfigProvider :use-id="useIdFunction">
    <div class="font-sans text-sm antialiased sm:text-base">
      <NuxtLoadingIndicator color="#4eb362" />
      <NuxtLayout>
        <NuxtPage :keepalive="{ include: '' }" />
      </NuxtLayout>
      <Toaster class="pointer-events-auto" />
    </div>
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from "reka-ui";
const useIdFunction = () => useId();

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
