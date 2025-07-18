<template>
  <div
    class="fixed bottom-8 right-3 z-50 xs:right-4 sm:bottom-5 sm:right-6 lg:bottom-12 xl:right-12"
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
        class="pointer-events-none aspect-square h-[40px] w-auto select-none"
        width="44"
        height="44"
        alt="WhatsApp"
        format="webp"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const store = useRootStore();
</script>
