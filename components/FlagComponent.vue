<template>
  <span class="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
    <img
      v-if="country"
      :src="flagUrl"
      :alt="countryName"
      :title="countryName"
    />
  </span>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  country: {
    required: true,
  },
  countryName: {
    type: String,
    required: false,
  },
});

const flagUrl = computed(() => {
  return `https://flagcdn.com/w40/${props.country.toLowerCase()}.png`;
});
</script>
