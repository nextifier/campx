<template>
  <div class="@container flex flex-col gap-y-2">
    <nuxt-link
      :to="`/news/${props.post.slug}`"
      class="border-border relative flex aspect-16/10 items-center justify-center overflow-hidden rounded-lg border"
      @click.native="active = props.post.slug"
    >
      <NuxtImg
        v-if="props.post.feature_image"
        :src="props.post.feature_image"
        :alt="props.post.feature_image_alt ?? props.post.title"
        class="h-full w-full object-cover [&.active]:[view-transition-name:post-feature-img]"
        :class="{
          active: active === props.post.slug,
        }"
        loading="lazy"
        sizes="100vw sm:600px"
        width="479"
        height="269"
        format="webp"
      />

      <Logo v-else class="text-primary w-[50%] opacity-50" />

      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 flex h-20 w-full items-end justify-between px-3 pb-2.5 text-xs font-semibold tracking-tight select-none"
        :class="{
          'bg-linear-to-t from-black/60 to-transparent text-white':
            props.post.feature_image,
          '': !props.post.feature_image,
        }"
      >
        <span v-if="props.post.primary_tag" class="capitalize">
          {{ props.post.primary_tag.name }}
        </span>
        <span v-else></span>

        <span v-if="props.post.reading_time">
          <span class="font-normal"
            >{{ props.post.reading_time }} min<span
              v-if="props.post.reading_time > 1"
              >s</span
            >
            read
          </span>
        </span>
        <span v-else></span>
      </div>
    </nuxt-link>

    <div class="flex w-full flex-col items-start px-1">
      <nuxt-link
        :to="`/news/${props.post.slug}`"
        class="text-primary text-lg !leading-snug font-semibold tracking-[-0.04em] transition duration-300 lg:line-clamp-4 @sm:text-xl @lg:text-2xl"
        v-tippy="props.post.title"
        @click.native="active = props.post.slug"
        >{{ props.post.title }}</nuxt-link
      >

      <!-- <p v-if="props.post.custom_excerpt" class="mt-2 text-sm tracking-tight">
        {{ props.post.custom_excerpt }}
      </p> -->

      <div
        class="mt-2 flex items-center gap-x-3 text-xs tracking-tight text-gray-600 dark:text-gray-400"
      >
        <span
          v-if="props.post.published_at"
          v-tippy="
            $dayjs(props.post.published_at).format('MMMM D, YYYY [at] h:mm A')
          "
        >
          {{ $dayjs(props.post.published_at).fromNow() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
});

const active = useState();

const { $dayjs } = useNuxtApp();
</script>
