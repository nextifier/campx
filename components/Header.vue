<template>
  <header
    class="flex h-(--navbar-height-mobile) items-center justify-center text-sm lg:h-(--navbar-height-desktop)"
    :class="{
      'sticky inset-x-0 top-0 z-50': ![].includes(route.name),
      'bg-background': isMenuOpen,
      'border-border/30 bg-background/95 supports-backdrop-filter:bg-background/90 border-b backdrop-blur-sm':
        !isMenuOpen,
    }"
  >
    <nav class="container flex h-full items-center">
      <nuxt-link
        to="/"
        aria-label="Home"
        @click="$scrollToTopIfCurrentPageIs('index')"
        v-ripple
      >
        <Logo class="h-7" />
      </nuxt-link>

      <div class="ml-auto flex h-full items-center gap-x-6">
        <!-- <HeaderNav
          class="hidden xl:absolute xl:left-1/2 xl:flex xl:-translate-x-1/2"
        /> -->

        <div class="flex h-full shrink-0 items-center gap-x-2">
          <!-- <nuxt-link
            to="/contact"
            class="border-border text-primary hover:bg-muted hidden items-center justify-center gap-x-2 rounded-xl border px-3 py-2 font-semibold tracking-tight transition select-none active:scale-95 sm:flex"
            @click="$scrollToTopIfCurrentPageIs('contact')"
            v-ripple
          >
            <span>Contact</span>
          </nuxt-link> -->

          <!-- <nuxt-link
            to="/"
            class="hover:bg-primary/80 bg-primary text-primary-foreground hidden items-center justify-center rounded-xl px-3 py-2 font-semibold tracking-tight transition select-none active:scale-95 sm:flex"
            @click="$scrollToTopIfCurrentPageIs('ticket')"
            v-ripple
            >Reservasi Camping</nuxt-link
          > -->

          <Tippy>
            <ColorModeToggle />
            <template #content>
              <span class="inline-flex items-center gap-x-1.5 tracking-tight">
                <span>Light / Dark Mode</span>
                <kbd class="keyboard-symbol">{{ metaSymbol }} D</kbd>
              </span>
            </template>
          </Tippy>

          <Tippy>
            <HeaderMenu />
            <template #content>
              <span class="inline-flex items-center gap-x-1.5 tracking-tight">
                <span>Open Menu</span>
                <kbd class="keyboard-symbol">{{ metaSymbol }} M</kbd>
              </span>
            </template>
          </Tippy>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();
const { metaSymbol } = useShortcuts();

// Check if HeaderMenu dialog is opened or not
const isMenuOpen = ref(false);
let observer = null;
const observeMenuState = () => {
  const target = document.body; // Observe the body for changes
  if (!target) return;

  observer = new MutationObserver(() => {
    const menu = document.querySelector("#header-menu");
    isMenuOpen.value = !!(menu && menu.getAttribute("data-state") === "open");
  });

  observer.observe(target, {
    childList: true, // Observe changes in child elements
    subtree: true, // Monitor all descendants
  });
};

function toggleFullScreen() {
  const elem = document.documentElement; // Target the entire document

  if (!document.fullscreenElement) {
    // Enter fullscreen mode
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  } else {
    // Exit fullscreen mode
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

onMounted(() => {
  observeMenuState();
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
