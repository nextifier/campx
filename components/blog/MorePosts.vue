<template>
  <div v-if="morePosts?.length">
    <div class="container">
      <h5
        class="text-primary text-3xl font-semibold tracking-tighter sm:text-4xl"
      >
        You might also like
      </h5>
    </div>

    <LazyBlogPostSlider :posts="morePosts" class="mt-4 lg:mt-6" />
  </div>
</template>

<script setup>
const route = useRoute();
const store = useRootStore();
const config = useRuntimeConfig();

const { data } = await useLazyFetch(`${config.public.blogApiUrl}/posts`, {
  query: {
    key: config.public.blogApiKey,
    include: "authors,tags",
    filter: `authors.slug:[${config.public.blogUsername}]+visibility:public`,
    order: "published_at desc",
    limit: 9,
  },
});

const morePosts = computed(() => {
  return data.value?.posts?.filter((post) => post.slug !== route.params.slug);
});
</script>
