<template>
  <div id="front-layout" class="relative flex min-h-screen flex-col">
    <Header />
    <main class="flex-auto">
      <slot />
    </main>

    <FAB
      v-if="
        !['experiences', 'experiences-slug', 'promo', 'promo-slug'].includes(
          route.name,
        )
      "
    />

    <Footer v-if="![].includes(route.name)" />

    <DialogInquiry />
    <DialogShorts dialogName="shorts" />
  </div>
</template>

<script setup>
const route = useRoute();
</script>
