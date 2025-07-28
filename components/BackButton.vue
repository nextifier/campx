<template>
  <button
    type="button"
    @click="goBack"
    class="text-primary lg:hover:bg-muted flex items-center justify-center gap-x-1 rounded-full border p-3 transition active:scale-95 lg:border-0"
    :class="
      isSemiTransparent
        ? 'bg-background/70 border border-white/10 shadow-lg backdrop-blur-sm'
        : 'bg-background border-border'
    "
    v-ripple
  >
    <Icon name="lucide:arrow-left" class="size-4 shrink-0" />
    <span class="hidden text-sm tracking-tight lg:block">Back</span>
  </button>
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  destination: {
    type: String,
  },
  isSemiTransparent: {
    type: Boolean,
    default: false,
  },
});

const goBack = () => {
  if (props.destination) {
    router.push(props.destination);
  } else {
    router.back();
  }
};
</script>
