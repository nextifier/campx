<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  NavigationMenuList,
  type NavigationMenuListProps,
  useForwardProps,
} from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  NavigationMenuListProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <NavigationMenuList
    v-bind="forwardedProps"
    :class="
      cn(
        'group flex flex-1 list-none items-center justify-center gap-x-0.5',
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>
