<template>
  <DialogRoot v-model:open="open">
    <button
      @click="open = !open"
      class="relative flex size-9 items-center justify-center rounded-xl"
      aria-label="Menu"
    >
      <span
        v-for="(_, index) in 2"
        :key="index"
        class="absolute h-px w-5 bg-black transition-all duration-200 dark:bg-white"
        :class="{
          // MENU 2 LINES:
          '-translate-y-1': index === 0 && !open,
          'translate-y-1': index === 1 && !open,
          'translate-y-0! rotate-45': index === 0 && open,
          'translate-y-0! -rotate-45': index === 1 && open,
          // MENU 3 LINES:
          // '-translate-y-1.5': index === 0 && !open, // First line (closed)
          // 'translate-y-1.5': index === 2 && !open, // Third line (closed)
          // 'translate-y-0! rotate-45': index === 0 && open, // First line (open)
          // 'translate-y-0! -rotate-45': index === 2 && open, // Third line (open)
          // '-translate-x-full opacity-0': index === 1 && open, // Second line (open)
        }"
      ></span>
    </button>

    <DialogPortal>
      <DialogOverlay
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-40 bg-black/80"
      />
      <DialogContent
        id="header-menu"
        class="bg-background ease-out-swift! data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right text-primary fixed top-(--navbar-height-mobile) right-0 bottom-0 z-50 min-h-[calc(100dvh-var(--navbar-height-mobile))] w-full max-w-2xl transition duration-500! lg:top-(--navbar-height-desktop) lg:min-h-[calc(100dvh-var(--navbar-height-desktop))] dark:shadow-xl dark:sm:border dark:sm:border-gray-900"
        tabindex="-1"
      >
        <DialogHeader class="sr-only">
          <DialogTitle>Menu</DialogTitle>
          <DialogDescription>Navigation menu</DialogDescription>
        </DialogHeader>

        <ScrollArea type="scroll">
          <div
            class="h-[calc(100dvh-var(--navbar-height-mobile)-3.5rem)] lg:h-[calc(100dvh-var(--navbar-height-desktop)-3.5rem)]"
          >
            <div
              class="grid grid-cols-12 gap-x-1 gap-y-10 px-2 pt-6 pb-10 sm:px-8"
            >
              <div class="col-span-7 flex flex-col gap-y-4 lg:col-span-6">
                <span
                  class="px-4 text-sm tracking-tight text-gray-400 sm:text-base lg:px-6"
                  >Menu</span
                >

                <div class="flex flex-col gap-y-3">
                  <DialogClose
                    as-child
                    v-for="(link, index) in menuLinks"
                    :key="index"
                  >
                    <NuxtLink
                      :to="link.to"
                      class="text-primary hover:bg-muted overflow-x-hidden rounded-xl px-4 py-1.5 text-3xl leading-snug! font-medium tracking-[-0.04em] transition duration-300 active:scale-95 lg:px-6"
                      active-class="bg-muted"
                      @click="$scrollToTopIfCurrentPageIs(link.routeName)"
                      @contextmenu="handleRightClick(link)"
                      >{{ link.label }}</NuxtLink
                    >
                  </DialogClose>
                </div>
              </div>

              <div
                class="order-first col-span-5 flex flex-col gap-y-6 lg:col-span-6"
              >
                <ColorModeButtons />

                <div
                  v-for="(item, index) in menuSmall"
                  :key="index"
                  class="flex flex-col gap-y-2"
                >
                  <span
                    class="px-4 text-sm tracking-tight text-gray-400 sm:text-base lg:px-6"
                    >{{ item.categoryLabel }}</span
                  >

                  <div class="flex flex-col gap-y-2 sm:gap-y-1">
                    <DialogClose
                      as-child
                      v-for="(link, index) in item.links"
                      :key="index"
                    >
                      <NuxtLink
                        :to="link.to"
                        :target="link.openInNewTab ? '_blank' : ''"
                        class="rounded-lg px-4 py-1 text-sm leading-normal! tracking-tight text-black hover:bg-gray-100 sm:text-base lg:px-6 lg:py-1.5 dark:text-white dark:hover:bg-gray-900"
                        active-class="bg-muted"
                        @click="$scrollToTopIfCurrentPageIs(link.routeName)"
                        @contextmenu="handleRightClick(link)"
                      >
                        {{ link.label }}</NuxtLink
                      >
                    </DialogClose>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div class="absolute inset-x-0 bottom-0 grid h-14 w-full grid-cols-2">
          <DialogClose as-child>
            <NuxtLink
              to="/contact"
              class="bg-primary text-primary-foreground hover:bg-primary/80 flex h-full w-full items-center justify-center text-xl font-semibold tracking-tight transition select-none active:scale-95"
              @click="$scrollToTopIfCurrentPageIs('contact')"
              v-ripple
              >Hubungi kami</NuxtLink
            ></DialogClose
          >

          <DialogClose as-child>
            <NuxtLink
              to="/"
              class="bg-accent text-accent-foreground hover:bg-accent/80 flex h-full w-full items-center justify-center text-xl font-semibold tracking-tight transition select-none active:scale-95"
              @click="$scrollToTopIfCurrentPageIs('ticket')"
              v-ripple
              >Pesan sekarang</NuxtLink
            >
          </DialogClose>
        </div>
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
  DialogTrigger,
} from "reka-ui";

const store = useRootStore();
const route = useRoute();

const open = ref(false);

defineShortcuts({
  meta_m: {
    handler: async () => {
      open.value = !open.value;
    },
  },
});

const handleRightClick = (link) => {
  if (link.rightClickLink) {
    event.preventDefault();
    window.open(link.rightClickLink, "_blank");
  }
};

const menuLinks = ref([
  {
    label: "Home",
    to: "/",
    routeName: "index",
  },
  {
    label: "Experiences",
    to: "/experiences",
    routeName: "experiences",
  },
  {
    label: "Promo",
    to: "/promo",
    routeName: "promo",
  },
  {
    label: "FAQ",
    to: "/faq",
    routeName: "faq",
  },
  {
    label: "Contact",
    to: "/contact",
    routeName: "contact",
  },
]);

const menuSmall = ref([
  {
    categoryLabel: "Social",
    links: [
      {
        label: "Instagram",
        to: `https://www.instagram.com/${store.instagram}`,
        openInNewTab: true,
      },
      {
        label: "Facebook",
        to: `https://www.facebook.com/${store.facebook}`,
        openInNewTab: true,
      },
      {
        label: "TikTok",
        to: `https://www.tiktok.com/@${store.tiktok}`,
        openInNewTab: true,
      },
      // {
      //   label: "LinkedIn",
      //   to: `https://www.linkedin.com/company/${store.$state.linkedin}`,
      //   openInNewTab: true,
      // },
      // {
      //   label: "YouTube",
      //   to: `https://www.youtube.com/@${store.$state.youtube}`,
      //   openInNewTab: true,
      // },
    ],
  },
  {
    categoryLabel: "Get in touch",
    links: [
      {
        label: "Email",
        to: `mailto:${store.$state.email}`,
      },
      {
        label: "WhatsApp",
        to: `https://api.whatsapp.com/send?phone=${store.whatsapp}&text=${store.whatsappText}`,
        openInNewTab: true,
      },
    ],
  },
]);
</script>
