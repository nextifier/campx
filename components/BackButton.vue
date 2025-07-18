<template>
  <button
    type="button"
    @click="goBack"
    class="flex items-center gap-x-1.5 rounded-xl px-3 py-2 text-sm tracking-tight transition hover:bg-muted active:scale-95"
  >
    <IconArrowLeft class="h-4" />
    <span>Back</span>
  </button>
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  destination: {
    type: String,
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
