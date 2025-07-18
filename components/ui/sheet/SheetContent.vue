<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from "reka-ui";
import { X } from "lucide-vue-next";
import { type SheetVariants, sheetVariants } from ".";
import { cn } from "@/lib/utils";

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes["class"];
  side?: SheetVariants["side"];
}

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<SheetContentProps>();

const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-x-0 top-(--navbar-height-mobile) z-50 min-h-[calc(100vh-var(--navbar-height-mobile))] bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 lg:top-(--navbar-height-desktop) lg:min-h-[calc(100vh-var(--navbar-height-desktop))]"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
