<template>
  <NuxtLink :to="`/experiences/${item.slug}`" class="grid gap-y-2">
    <div class="bg-muted aspect-4/5 overflow-hidden rounded-xl">
      <NuxtImg
        v-if="item.coverImage"
        :src="item.coverImage"
        :alt="item.title ?? ''"
        class="pointer-events-none size-full object-cover select-none"
        width="1080"
        height="1350"
        sizes="280px lg:320px"
        loading="lazy"
        format="webp"
      />
    </div>

    <div class="grid gap-y-1.5">
      <div class="text-primary text-base font-semibold tracking-tight">
        {{ item.title }}
      </div>

      <div
        v-if="item.categories?.length"
        class="no-scrollbar line-clamp-1 overflow-x-auto text-sm tracking-tight"
      >
        {{ item.categories.join(", ") }}
      </div>

      <div v-if="item.shortDescription" class="text-sm tracking-tight">
        <span>{{ item.shortDescription }}</span>
      </div>

      <div v-if="item.pricing?.length">
        <span class="text-sm tracking-tight">
          <span v-if="item.pricing.length > 1">Mulai dari&nbsp;</span>
          <span class="text-primary text-base font-semibold">
            {{ format(item.pricing[0].value) }}
          </span>
          <span v-if="item.pricing[0].unit">
            / {{ item.pricing[0].unit }}
          </span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  item: Object,
});

const { format } = useCurrencyFormat();
</script>
