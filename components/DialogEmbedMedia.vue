<template>
  <DialogRoot v-model:open="isOpen">
    <DialogPortal>
      <DialogOverlay
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
      />
      <DialogContent
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-2.5 px-2 py-2 duration-200"
        :class="
          dialogData.width > dialogData.height
            ? 'max-w-(--breakpoint-lg)'
            : 'max-w-max'
        "
        @close-auto-focus.prevent
      >
        <DialogTitle class="hidden">
          <slot name="title">Media Dialog</slot>
        </DialogTitle>
        <DialogDescription class="hidden">
          <slot name="description">Embedded media content</slot>
        </DialogDescription>

        <div
          :class="
            dialogData.width > dialogData.height
              ? 'w-full'
              : 'h-full max-h-[75vh]'
          "
        >
          <iframe
            v-if="dialogData.src"
            :src="`${dialogData.src}?autoplay=1`"
            class="h-full w-full rounded-xl bg-white/10 backdrop-blur-xl sm:rounded-2xl"
            :style="{
              aspectRatio: `${dialogData.width} / ${dialogData.height}`,
            }"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div
          v-if="dialogData.caption"
          class="line-clamp-3 px-2 text-center text-xs leading-snug! tracking-tight text-gray-300 sm:text-sm"
        >
          <p>{{ dialogData.caption }}</p>
        </div>

        <DialogClose
          class="hover:bg-opacity-80 mt-2 flex size-14 items-center justify-center self-center rounded-full bg-white text-black transition lg:order-first lg:mt-0 lg:self-end"
          aria-label="Close"
        >
          <IconClose class="size-4 lg:size-5" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from "reka-ui";

const props = defineProps({
  dialogName: {
    type: String,
    required: true,
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

const dialogData = computed(() => {
  const dialog = dialogs.list.find((d) => d.name === props.dialogName);
  return dialog ? dialog.data : {};
});
</script>
