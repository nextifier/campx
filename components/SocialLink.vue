<template>
  <nuxt-link
    :to="props.to"
    :target="openInNewTab ? '_blank' : ''"
    class="text-primary hover:bg-muted relative flex size-9 items-center justify-center rounded-xl transition active:scale-95"
    :aria-label="props.label"
    v-tippy="props.label"
  >
    <Icon :name="props.iconName" :class="iconClasses" />
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
  iconClasses: {
    type: String,
    default: "size-4.5",
  },
});
</script>
