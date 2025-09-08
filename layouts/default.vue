<template>
  <SidebarProvider>
    <SidebarInset>
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
      <DialogShorts />
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup>
const route = useRoute();
</script>
