<template>
  <SidebarProvider>
    <SidebarInset>
      <Header />
      <main class="flex-auto">
        <slot />
      </main>

      <Footer v-if="![].includes(route.name)" />

      <DialogInquiry />
      <DialogShorts />
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup>
const route = useRoute();
</script>
