<template>
  <nuxt-link
    :to="props.to"
    :target="openInNewTab ? '_blank' : ''"
    class="flex size-12 items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-900"
    :aria-label="props.label"
    v-tippy="props.label"
  >
    <Icon :name="props.iconName" class="size-6" />
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  to: {
    type: String,
  },
  openInNewTab: {
    type: Boolean,
    default: true,
  },
  iconName: {
    type: String,
  },
});
</script>
