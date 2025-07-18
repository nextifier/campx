<template>
  <div v-if="data?.posts?.length">
    <div class="container flex flex-col items-start">
      <span>
        <span
          class="bg-linear-to-r from-orange-500 to-rose-500 bg-clip-text tracking-wide text-transparent uppercase"
          >News</span
        >
        ✨
      </span>

      <h2
        class="mt-2.5 text-4xl leading-[1.2]! font-semibold tracking-tighter text-balance text-black sm:text-5xl xl:text-6xl dark:text-white"
      >
        Latest Updates
      </h2>
    </div>

    <LazyBlogPostSlider :posts="data.posts" class="mt-6" />
  </div>
</template>

<script setup>
const store = useRootStore();
const config = useRuntimeConfig();
const { data } = await useFetch(`${config.public.blogApiUrl}/posts`, {
  query: {
    key: config.public.blogApiKey,
    include: "authors,tags",
    filter: `authors.slug:[${config.public.blogUsername}]+visibility:public`,
    order: "published_at desc",
    limit: 9,
  },
  server: false,
  lazy: true,
});
</script>
