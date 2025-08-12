<template>
  <div
    class="border-primary/25 text-primary dark:text-accent dark:border-accent/25 dark:bg-accent/8 dark:hover:bg-accent/16 hover:bg-primary/5 relative inline-flex h-8 items-center justify-start overflow-hidden rounded-full border px-3 py-1 font-semibold tracking-tighter transition active:scale-95"
  >
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-500 ease-out absolute"
      enter-from-class="opacity-0 translate-y-full"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <nuxt-link
        :key="currentItem.text"
        :to="currentItem.link"
        :target="currentItem.link.startsWith('http') ? '_blank' : ''"
        class="flex items-center justify-start gap-x-1 text-left whitespace-nowrap"
      >
        <span class="line-clamp-1">
          {{ currentItem.text }}
        </span>
        <Icon name="lucide:arrow-right" class="size-4 shrink-0" />
      </nuxt-link>
    </Transition>
  </div>
</template>

<script setup>
const items = useBannerStore().announcements;

const currentIndex = ref(0);
let intervalId = null;

const currentItem = computed(() => items[currentIndex.value]);

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.length;
  }, 6000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
