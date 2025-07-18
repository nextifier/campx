<template>
  <div v-if="news?.length">
    <div class="flex items-center justify-between gap-2">
      <h3
        class="flex items-center gap-x-2 py-4 text-sm font-medium tracking-tight text-black sm:text-base dark:text-white"
      >
        <IconRepost class="h-4 shrink-0" />
        <span>Media Coverages</span>
      </h3>

      <button
        type="button"
        aria-label="Close media coverages sidebar"
        class="bg-muted hover:bg-border flex size-9 shrink-0 items-center justify-center rounded-full transition active:scale-95"
        @click="emit('hide')"
      >
        <IconClose class="size-4" />
      </button>
    </div>

    <div
      class="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-800 dark:border-gray-800"
    >
      <NuxtLink
        v-for="(item, index) in news.slice().reverse()"
        :key="index"
        :to="item.link"
        target="_blank"
        class="flex flex-col items-start gap-y-2 py-4 transition active:scale-95"
      >
        <h6
          class="3xl:text-base text-sm font-medium tracking-tight text-black dark:text-white"
        >
          {{ item.title }}
        </h6>

        <div class="flex w-full items-center justify-between gap-x-2">
          <div
            class="line-clamp-1 text-xs tracking-tight text-gray-500 dark:text-gray-400"
          >
            {{ item.link.replace(/^https?:\/\/(www\.)?/, "").split("/")[0] }}
          </div>

          <div
            class="line-clamp-1 flex shrink-0 items-center gap-x-1 text-xs tracking-tight text-gray-500 dark:text-gray-400"
            v-tippy="$dayjs(item.created_at).format('MMMM D, YYYY [at] h:mm A')"
          >
            <span>{{ $dayjs(item.created_at).fromNow() }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  news: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["hide"]);

const { $dayjs } = useNuxtApp();
</script>
