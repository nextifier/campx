<template>
  <SwitchRoot
    v-model:model-value="enabled"
    @update:model-value="toggleColorMode()"
    class="text-primary hover:bg-muted relative flex size-9 rounded-xl"
    aria-label="Enable Dark Mode"
  >
    <SwitchThumb class="absolute inset-0 flex items-center justify-center">
      <ClientOnly>
        <template v-slot:default>
          <!-- <IconSun v-if="colorMode.preference === 'light'" class="size-4" /> -->
          <!-- <IconMoon v-else class="size-4" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ease-out-swift size-4.5 transition duration-500"
            :class="{
              'rotate-180': colorMode.preference === 'dark',
            }"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 3l0 18"></path>
            <path d="M12 9l4.65 -4.65"></path>
            <path d="M12 14.3l7.37 -7.37"></path>
            <path d="M12 19.6l8.85 -8.85"></path>
          </svg>
        </template>
        <template v-slot:placeholder>
          <div
            class="size-4 animate-[spin_1s_linear_infinite] rounded-full border border-current border-r-transparent"
          ></div>
        </template>
      </ClientOnly>
    </SwitchThumb>
  </SwitchRoot>
</template>

<script setup>
import { SwitchRoot, SwitchThumb } from "reka-ui";

const store = useRootStore();
const colorMode = useColorMode();

const { darkModeEnabled: enabled } = toRefs(useRootStore());

onMounted(() => {
  enabled.value = colorMode.preference === "dark" ? true : false;
});

const toggleColorMode = async () => {
  colorMode.preference === "dark"
    ? (colorMode.preference = "light")
    : (colorMode.preference = "dark");

  await Promise.resolve();

  useNuxtApp().$updateMetaThemeColor();
};

defineShortcuts({
  // Shortcut for toggle dark mode
  meta_d: {
    handler: async () => {
      toggleColorMode();
      store.darkModeEnabled = !store.darkModeEnabled;
    },
  },
});
</script>
