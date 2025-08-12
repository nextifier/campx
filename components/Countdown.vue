<template>
  <div v-if="distance > 0">
    <span
      v-if="variant.toLocaleLowerCase() === 'inline-with-boxes'"
      class="inline-flex items-center gap-x-1 text-sm font-semibold sm:text-base"
    >
      <span v-if="textBeforeCountdown">{{ textBeforeCountdown }}</span>
      <span v-if="timeParts.days" class="ml-1">
        <NumberFlow :value="timeParts.days" /> Day<span
          v-if="timeParts.days > 1"
          >s
        </span>
      </span>
      <div class="inline-flex items-center gap-0.5">
        <span
          class="bg-muted text-primary flex size-8 shrink-0 grow-0 items-center justify-center rounded-lg text-center sm:size-9"
        >
          <span v-show="timeParts.hours < 10">0</span
          ><NumberFlow :value="timeParts.hours" />
        </span>
        <span class="text-muted-foreground">:</span>
        <span
          class="bg-muted text-primary flex size-8 shrink-0 grow-0 items-center justify-center rounded-lg text-center sm:size-9"
        >
          <span v-show="timeParts.minutes < 10">0</span
          ><NumberFlow :value="timeParts.minutes" />
        </span>
        <span class="text-muted-foreground">:</span>
        <span
          class="bg-muted text-primary flex size-8 shrink-0 grow-0 items-center justify-center rounded-lg text-center sm:size-9"
        >
          <span v-show="timeParts.seconds < 10">0</span
          ><NumberFlow :value="timeParts.seconds" />
        </span>
      </div>
    </span>
    <span v-if="variant.toLocaleLowerCase() === 'no-style'" class="inline">
      <span v-if="textBeforeCountdown">{{ textBeforeCountdown }}</span>
      <span v-if="timeParts.days">
        <NumberFlow :value="timeParts.days" /> day<span
          v-if="timeParts.days > 1"
          >s</span
        >
      </span>
      &nbsp;<span>
        <span v-show="timeParts.hours < 10">0</span
        ><NumberFlow :value="timeParts.hours" />
      </span>
      <span class="text-muted-foreground">:</span>
      <span>
        <span v-show="timeParts.minutes < 10">0</span
        ><NumberFlow :value="timeParts.minutes" />
      </span>
      <span class="text-muted-foreground">:</span>
      <span>
        <span v-show="timeParts.seconds < 10">0</span
        ><NumberFlow :value="timeParts.seconds" />
      </span>
    </span>
  </div>
</template>

<script setup>
import { useNow } from "@/composables/useNow";

const props = defineProps({
  countdownDate: {
    type: Date,
    required: true,
  },
  variant: {
    type: String,
    default: "no-style",
  },
  textBeforeCountdown: String,
});

const { now } = useNow();

const distance = computed(
  () => props.countdownDate.getTime() - now.value.getTime(),
);

const timeParts = computed(() => {
  const d = Math.max(0, distance.value);
  return {
    days: Math.floor(d / (1000 * 60 * 60 * 24)),
    hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((d % (1000 * 60)) / 1000),
  };
});
</script>
