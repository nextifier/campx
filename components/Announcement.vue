<template>
  <nuxt-link
    v-if="
      announcement?.show &&
      Date.now() > announcement.starts_in &&
      Date.now() < announcement.ends_in
    "
    :to="announcement.link"
    :target="announcement.openInNewTab ? '_blank' : ''"
    class="border-border hover:bg-muted flex items-center gap-x-1 rounded-full border px-2.5 py-1 text-black transition active:scale-95"
  >
    <span class="relative flex size-2">
      <span
        class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
      ></span>
      <span
        class="relative inline-flex size-2 rounded-full bg-green-500"
      ></span>
    </span>

    <span
      class="text-primary ml-1 line-clamp-1 text-left text-sm tracking-tight"
    >
      {{ announcement.label }}
    </span>

    <Icon name="lucide:arrow-right" class="text-primary h-4" />
  </nuxt-link>
</template>

<script setup>
const announcement = ref({
  label: "Tickets Available",
  link: "/ticket",
  openInNewTab: false,
  show: false,
  starts_in: new Date("Mar 16, 2025 00:00:00").getTime(),
  ends_in: new Date("May 18, 2025 20:00:00").getTime(),
});
</script>
