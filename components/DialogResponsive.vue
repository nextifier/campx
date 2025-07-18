<template>
  <div>
    <slot name="trigger" :openDialog="openDialog" />
    <DialogRoot
      v-if="isDesktop && isOpen && isResponsive"
      v-model:open="isOpen"
    >
      <DialogPortal>
        <DialogOverlay
          class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        />
        <DialogContent
          class="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100%-4rem)] w-full -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border shadow-lg duration-200"
          :style="{ maxWidth: dialogMaxWidth }"
        >
          <DialogTitle class="hidden"></DialogTitle>
          <DialogDescription class="hidden"></DialogDescription>

          <slot name="sticky-header"></slot>

          <ScrollArea class="flex flex-col" :scrollHideDelay="0">
            <slot :data="dialogData" />
          </ScrollArea>

          <slot name="sticky-footer"></slot>

          <DialogClose
            class="data-[state=open]:bg-muted data-[state=open]:text-muted-foreground hover:bg-muted absolute top-3 right-3 flex size-8 items-center justify-center rounded-full focus:outline-hidden disabled:pointer-events-none"
          >
            <IconClose class="size-4" />
            <span class="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>

    <DrawerRoot v-else v-model:open="isOpen">
      <DrawerPortal>
        <DrawerOverlay class="fixed inset-0 z-50 bg-black/80" />
        <DrawerContent
          class="border-border bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto max-h-[80vh] flex-col rounded-t-2xl border-t outline-hidden lg:max-h-[calc(100lvh-var(--navbar-height-desktop))]"
        >
          <div
            class="bg-border mx-auto mt-2 mb-7 h-1.5 w-[100px] shrink-0 rounded-full"
          />

          <DrawerTitle class="hidden"></DrawerTitle>
          <DrawerDescription class="hidden"></DrawerDescription>

          <slot name="sticky-header"></slot>

          <div
            ref="drawerContentBody"
            class="pointer-events-auto"
            :class="{
              'touch-pan-down': drawerContentBodyIsAtTop,
              'overflow-y-auto': props.overflowContent,
            }"
            @scroll="handleDrawerContentBodyScroll"
          >
            <slot :data="dialogData" />
          </div>

          <slot name="sticky-footer"></slot>

          <DrawerClose
            v-if="drawerCloseButton || isDesktop"
            class="group data-[state=open]:bg-muted data-[state=open]:text-muted-foreground hover:bg-muted absolute top-1.5 right-3 flex size-8 items-center justify-center rounded-full focus:outline-hidden disabled:pointer-events-none"
          >
            <IconClose
              class="size-4 opacity-60 transition group-hover:opacity-100"
            />
            <span class="sr-only">Close</span>
          </DrawerClose>
        </DrawerContent>
      </DrawerPortal>
    </DrawerRoot>
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";
const isDesktop = useMediaQuery("(min-width: 768px)");

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "reka-ui";

import {
  DrawerRoot,
  DrawerContent,
  DrawerPortal,
  DrawerOverlay,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from "vaul-vue";

const props = defineProps({
  dialogName: {
    type: String,
    required: true,
  },
  dialogData: {
    type: Object,
    default: () => ({}),
  },
  isResponsive: {
    type: Boolean,
    default: true,
  },
  overflowContent: {
    type: Boolean,
    default: false,
  },
  dialogMaxWidth: {
    type: String,
    default: "400px",
  },
  drawerCloseButton: {
    type: Boolean,
    default: false,
  },
});

const dialogs = useDialogStore();

const isOpen = computed({
  get() {
    const dialog = dialogs.list.find((d) => d.name === props.dialogName);
    return dialog ? dialog.isOpen : false;
  },
  set(val) {
    dialogs.updateDialog(props.dialogName, val);
  },
});

const openDialog = () => {
  dialogs.updateDialog(props.dialogName, true, props.dialogData);
};

const drawerContentBody = ref(null);
const drawerContentBodyYPosition = ref(0);
const drawerContentBodyIsAtTop = ref(true);

const handleDrawerContentBodyScroll = () => {
  if (drawerContentBody.value) {
    drawerContentBodyYPosition.value = drawerContentBody.value.scrollTop;
    drawerContentBodyIsAtTop.value = drawerContentBodyYPosition.value === 0;
  }
};
</script>
