<template>
  <div
    v-if="morePosts?.length"
    class="grid grid-cols-1 items-start gap-y-3 self-start"
  >
    <h5 class="text-primary font-semibold tracking-tighter">Editor's Picks</h5>
    <div class="grid grid-cols-1 gap-y-4">
      <nuxt-link
        v-for="(post, index) in morePosts"
        :key="post.slug"
        :to="`/news/${post.slug}`"
        @click.native="active = post.slug"
        class="flex items-center gap-x-2"
      >
        <div
          class="bg-muted border-border size-16 shrink-0 overflow-hidden rounded-lg border"
        >
          <NuxtImg
            v-if="post.feature_image"
            :src="post.feature_image"
            :alt="post.feature_image_alt ?? post.title"
            class="size-full object-cover [&.active]:[view-transition-name:post-feature-img]"
            :class="{
              active: active === post.slug,
            }"
            loading="lazy"
            sizes="64px"
            format="webp"
          />
        </div>

        <div class="flex flex-col items-start text-left">
          <h6
            class="text-primary line-clamp-2 text-sm font-semibold tracking-tight"
            v-tippy="{
              content: post.title,
              delay: [600, 100],
            }"
          >
            {{ post.title }}
          </h6>

          <div
            class="text-muted-foreground mt-1 flex items-center gap-x-3 text-xs tracking-tight"
          >
            <span
              v-if="post.published_at"
              v-tippy="
                $dayjs(post.published_at).format('MMMM D, YYYY [at] h:mm A')
              "
            >
              {{ $dayjs(post.published_at).fromNow() }}
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
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

const active = useState();

const { $dayjs } = useNuxtApp();
</script>
