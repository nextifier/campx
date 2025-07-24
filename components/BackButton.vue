<template>
  <button
    type="button"
    @click="goBack"
    class="hover:bg-muted flex items-center gap-x-1.5 rounded-xl px-3 py-2 text-sm tracking-tight transition active:scale-95"
  >
    <Icon name="lucide:arrow-left" class="size-4 shrink-0" />
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
