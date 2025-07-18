<template>
  <div v-if="distance > 0" :class="countdownClass">
    <span
      v-if="isInline"
      class="inline-flex items-center text-sm font-semibold sm:text-base"
    >
      <span v-if="textBeforeCountdown">{{ textBeforeCountdown }}</span>

      <span v-if="days" class="ml-1">
        <NumberFlow :value="days" /> Day<span v-if="days > 1">s </span>
      </span>

      <div class="ml-2 inline-flex items-center gap-0.5">
        <span
          class="bg-muted text-primary flex size-8 shrink-0 grow-0 items-center justify-center rounded-lg text-center sm:size-9"
        >
          <span v-show="hours < 10">0</span><NumberFlow :value="hours" />
        </span>

        <span class="text-muted-foreground">:</span>

        <span
          class="bg-muted text-primary flex size-8 shrink-0 grow-0 items-center justify-center rounded-lg text-center sm:size-9"
        >
          <span v-show="minutes < 10">0</span><NumberFlow :value="minutes" />
        </span>

        <span class="text-muted-foreground">:</span>

        <span
          class="bg-muted text-primary flex size-8 shrink-0 grow-0 items-center justify-center rounded-lg text-center sm:size-9"
        >
          <span v-show="seconds < 10">0</span><NumberFlow :value="seconds" />
        </span>
      </div>
    </span>

    <div v-else class="flex flex-col items-center text-center">
      <div class="grid grid-cols-4 gap-4 sm:gap-6">
        <div
          v-for="(value, label) in countdownBox"
          :key="label"
          class="flex w-full flex-col items-center gap-y-1.5 text-center"
        >
          <NumberFlow
            :value="value"
            class="text-lg leading-none! tracking-tighter text-black sm:text-xl dark:text-white"
          />
          <span
            class="text-xs tracking-tight text-gray-500 sm:text-sm dark:text-gray-400"
            >{{ label }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  countdownDate: {
    type: Date,
    required: true,
  },
  countdownType: {
    type: String,
    default: "inline", // Available values: "box", "inline"
  },
  textBeforeCountdown: String,
});

const now = ref(Date.now());
const distance = ref(props.countdownDate.getTime() - now.value);

const days = computed(() => Math.floor(distance.value / (1000 * 60 * 60 * 24)));
const hours = computed(() =>
  Math.floor((distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
);
const minutes = computed(() =>
  Math.floor((distance.value % (1000 * 60 * 60)) / (1000 * 60)),
);
const seconds = computed(() =>
  Math.floor((distance.value % (1000 * 60)) / 1000),
);

const isInline = computed(() => props.countdownType === "inline");
const countdownClass = computed(() => (isInline.value ? "inline" : ""));

const countdownBox = computed(() => ({
  [`Day${days.value > 1 ? "s" : ""}`]: days.value,
  [`Hour${hours.value > 1 ? "s" : ""}`]: hours.value,
  [`Min${minutes.value > 1 ? "s" : ""}`]: minutes.value,
  Sec: seconds.value,
}));

onMounted(() => {
  const interval = setInterval(() => {
    now.value = Date.now();
    distance.value = props.countdownDate.getTime() - now.value;
    if (distance.value <= 0) clearInterval(interval);
  }, 1000);

  onUnmounted(() => clearInterval(interval));
});
</script>
