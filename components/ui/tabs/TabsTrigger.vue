<script setup lang="ts">
import { cn } from "@/lib/utils";
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-xs',
        props.class,
      )
    "
  >
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
