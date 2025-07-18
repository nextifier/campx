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
    default: "More Food Expo Indonesia",
  },
  website: {
    type: String,
    default: "morefoodexpo.com",
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
          class="flex size-24 items-center justify-center rounded-full border border-gray-300 bg-white p-2"
        >
          <svg
            class="size-full object-contain"
            viewBox="0 0 1080 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1080" height="1080" fill="white" />
            <path
              d="M374.365 340.707C466.707 321.135 551.345 353.096 592.051 443.46C632.756 533.824 676.48 739.329 676.48 739.329C676.173 739.432 493.095 800.53 427.771 536.635C427.698 536.989 376.722 783.126 180 739.329L254.748 473.963C254.748 473.963 282.023 360.279 374.365 340.707ZM549.579 343.723C671.799 314.261 779.237 352.468 815.57 448.661C851.894 544.83 899.975 739.224 900 739.325C708.237 762.333 683.564 582.542 650.146 470.316C618.914 365.273 549.579 343.723 549.579 343.723Z"
              fill="url(#paint0_linear_1_1940)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1940"
                x1="648.686"
                y1="321.965"
                x2="844.921"
                y2="748.067"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#E6214D" />
                <stop offset="1" stop-color="#E60013" />
              </linearGradient>
            </defs>
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
