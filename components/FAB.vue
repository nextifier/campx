<template>
  <div
    class="xs:right-4 fixed right-3 bottom-8 z-50 sm:right-6 sm:bottom-5 lg:bottom-12 xl:right-12"
  >
    <NuxtLink
      :to="`https://api.whatsapp.com/send?phone=${store.whatsapp}&text=${store.whatsappText}`"
      aria-label="Contact us"
      target="_blank"
      class="transition-transform duration-300 hover:scale-110"
      v-tippy="'Chat us 👋'"
    >
      <NuxtImg
        src="/img/etc/3d-wa-logo.webp"
        class="pointer-events-none size-10 select-none"
        width="40"
        height="40"
        sizes="40px"
        alt="WhatsApp"
        format="webp"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const store = useRootStore();
</script>
