<template>
  <div class="grid max-w-[220px] grid-cols-2 gap-x-0.5 *:w-full lg:pl-4">
    <button
      v-for="mode in colorModeList"
      :key="mode.value"
      class="flex flex-col items-center gap-y-1 rounded-xl p-1 text-center transition sm:px-2 lg:rounded-2xl"
      :class="[mode.value === colorMode.value ? '' : '']"
      @click.prevent="setDarkMode(mode.value === 'light' ? false : true)"
    >
      <div
        class="border-border aspect-64/54 w-full overflow-hidden rounded-xl border transition active:scale-95 lg:rounded-2xl"
      >
        <component :is="mode.component" class="h-full w-full object-cover" />
      </div>
      <div
        class="relative !leading-none"
        :class="[
          mode.value === colorMode.value
            ? 'text-primary'
            : 'text-muted-foreground',
        ]"
      >
        <span class="text-xs tracking-tight transition sm:text-sm">{{
          mode.label
        }}</span>

        <div
          class="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 pt-0.5 pl-0.75"
        >
          <Transition
            enter-from-class="opacity-0 scale-90 translate-y-4"
            enter-active-class="transition-all duration-300 ease-out"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-to-class="opacity-0 scale-90 translate-y-4"
          >
            <Icon
              v-if="mode.value === colorMode.value"
              name="lucide:check"
              class="size-3.5 shrink-0 text-green-600 sm:size-4 dark:text-green-500"
            />
          </Transition>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ColorModeThumbnailLight, ColorModeThumbnailDark } from "#components";

const store = useRootStore();
const { darkModeEnabled: enabled } = toRefs(useRootStore());
const colorMode = useColorMode();

const colorModeList = [
  {
    component: ColorModeThumbnailLight,
    value: "light",
    label: "Light",
  },
  {
    component: ColorModeThumbnailDark,
    value: "dark",
    label: "Dark",
  },
];

const setDarkMode = async (darkModeState) => {
  if (darkModeState) {
    enabled.value = true;
    colorMode.preference = "dark";
  } else {
    enabled.value = false;
    colorMode.preference = "light";
  }
  await Promise.resolve();
  useNuxtApp().$updateMetaThemeColor();
};
</script>
