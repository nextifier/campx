<template>
  <div class="relative isolate overflow-hidden">
    <div
      class="min-h-screen-offset relative z-10 container flex flex-col items-center justify-center gap-y-4 text-center"
    >
      <Logo class="text-accent w-full max-w-[240px]" />

      <h1 v-if="props.title" class="tracking-wide uppercase">
        {{ props.title }}
      </h1>

      <span
        class="3xl:text-8xl text-5xl font-semibold tracking-tighter text-black sm:text-6xl xl:text-7xl dark:text-white"
        >Coming soon</span
      >

      <p
        v-if="props.description"
        class="mt-3 max-w-2xl text-base tracking-tight text-balance sm:text-lg"
      >
        {{ props.description }}
      </p>

      <p
        class="text-muted-foreground mt-2 max-w-2xl text-base tracking-tight text-balance sm:text-lg"
      >
        Be the first to know when we go public by following us on Instagram
      </p>

      <nuxt-link
        :to="`https://www.instagram.com/${store.instagram}`"
        target="_blank"
        class="bg-accent text-accent-foreground hover:bg-accent/80 mt-3 flex shrink-0 items-center justify-center gap-x-1.5 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight transition active:scale-95"
        v-ripple
      >
        <Icon name="hugeicons:instagram" class="size-5" />
        <span>Follow us on Instagram</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
});

const store = useRootStore();
</script>
