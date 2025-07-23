<script setup>
const props = defineProps({
  headline: {
    type: String,
    default: "headline",
  },
  title: {
    type: String,
    default: "title",
  },
  description: {
    type: String,
    default: "description",
  },
  brandName: {
    type: String,
    default: "CampX",
  },
  website: {
    type: String,
    default: "campx.id",
  },
});
</script>

<template>
  <div class="relative flex h-full w-full flex-col bg-white text-black">
    <div
      class="mx-auto flex h-full w-[1080px] flex-col items-start justify-center pt-6 text-left"
    >
      <div class="flex flex-row items-center gap-x-3">
        <div
          class="flex size-24 items-center justify-center rounded-full border border-gray-300 bg-white"
        >
          <svg
            class="size-full object-contain"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="512" height="512" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M377.732 435.65C341.795 459.991 299.395 473 256 473C212.605 473 170.205 459.991 134.268 435.65L256 279.348L377.732 435.65ZM256 39C297.431 38.9726 338.003 50.8215 372.915 73.1446C407.827 95.4677 435.617 127.331 452.997 164.963C470.377 202.595 476.619 244.422 470.986 285.493C465.352 326.564 448.078 365.161 421.207 396.716L256 184.731L90.7927 396.716C63.9222 365.161 46.648 326.564 41.0143 285.493C35.3806 244.422 41.6231 202.595 59.0032 164.963C76.3833 127.331 104.173 95.4677 139.085 73.1446C173.997 50.8215 214.569 38.9726 256 39Z"
              fill="#2E9849"
            />
          </svg>
        </div>

        <div class="flex flex-col items-start gap-y-1">
          <span
            v-if="props.brandName"
            class="text-3xl font-semibold tracking-tighter"
            >{{ props.brandName }}</span
          >
          <span v-if="props.website" class="text-2xl tracking-tight">{{
            props.website
          }}</span>
        </div>
      </div>

      <h1
        v-if="title"
        class="mt-8 flex items-center text-7xl font-semibold tracking-tighter"
      >
        <span>{{ title }}</span>
      </h1>
      <p v-if="description" class="mt-2 text-3xl tracking-tight">
        {{ description }}
      </p>
    </div>
  </div>
</template>
