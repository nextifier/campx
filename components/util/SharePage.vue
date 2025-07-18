<template>
  <div class="flex justify-center gap-x-3">
    <button
      type="button"
      @click="copyToClipboard(`${url}`)"
      class="bg-primary text-primary-foreground hover:bg-opacity-80 flex aspect-square size-12 cursor-pointer items-center justify-center rounded-full border border-white/15 transition active:scale-95"
      v-ripple
      v-tippy="'Copy to clipboard'"
    >
      <Icon name="hugeicons:copy-01" class="size-6" />
    </button>

    <ClientOnly>
      <UtilShareNetwork
        v-for="social in socialNetworks"
        :key="social.slug"
        :network="social.slug"
        :url="url"
        :title="title"
        @click="closeDialog"
        class="hover:bg-opacity-80 flex aspect-square size-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition active:scale-95"
        :style="`background: ${social.color}`"
        v-ripple
        v-tippy="`Share to ${social.name}`"
      >
        <Icon :name="social.iconName" class="size-6" />
      </UtilShareNetwork>
    </ClientOnly>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const socialNetworks = [
  {
    name: "Facebook",
    slug: "facebook",
    color: "#1877F2",
    iconName: "ri:facebook-fill",
  },
  {
    name: "WhatsApp",
    slug: "whatsapp",
    color: "#1ACC3E",
    iconName: "ri:whatsapp-line",
  },
  {
    name: "X",
    slug: "x",
    color: "#000000",
    iconName: "ri:twitter-x-fill",
  },
];

const store = useRootStore();
const dialogs = useDialogStore();

import { toast } from "vue-sonner";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  closeDialog();
  toast.success("Copied to clipboard.");
};

const closeDialog = () => {
  dialogs.updateDialog("share-page", false, {});
};
</script>
