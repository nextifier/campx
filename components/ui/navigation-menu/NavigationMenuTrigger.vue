<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuTrigger,
  type NavigationMenuTriggerProps,
  useForwardProps,
} from "reka-ui";
import { ChevronDown } from "lucide-vue-next";
import { navigationMenuTriggerStyle } from ".";
import { cn } from "@/lib/utils";

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn('group flex items-center gap-x-1', props.class)"
  >
    <slot />
    <ChevronDown
      class="relative size-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
