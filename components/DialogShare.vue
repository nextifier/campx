<template>
  <DialogResponsive
    dialogName="share-page"
    :dialogData="{ pageTitle, pageUrl }"
  >
    <!-- Trigger Slot -->
    <template #trigger="{ openDialog }">
      <!-- Use the parent-provided trigger slot if available -->
      <slot name="trigger" :openDialog="openDialog">
        <!-- Default trigger button -->
        <button
          type="button"
          class="hover:bg-muted flex items-center gap-x-1.5 rounded-xl px-3 py-2 text-sm tracking-tight transition active:scale-95"
          @click="openDialog"
        >
          <IconShare class="h-4" />
          <span>Share</span>
        </button>
      </slot>
    </template>

    <!-- Default Content -->
    <template #default="{ data }">
      <div class="px-4 pb-6 md:p-8">
        <div
          class="text-center text-lg font-semibold tracking-tight text-black sm:text-xl dark:text-white"
        >
          Share this page
        </div>
        <UtilSharePage
          :title="data.pageTitle || ''"
          :url="data.pageUrl || `${config.public.siteUrl}${route.fullPath}`"
          class="mt-4"
        />
      </div>
    </template>
  </DialogResponsive>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const props = defineProps({
  pageTitle: {
    type: String,
  },
  pageUrl: {
    type: String,
  },
});
</script>
