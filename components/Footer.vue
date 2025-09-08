<template>
  <footer class="relative pt-10 lg:pt-16">
    <div class="relative z-20 container">
      <!-- <div
        v-if="showFooterNavigation"
        class="grid grid-cols-2 gap-x-2 gap-y-10 lg:grid-cols-12 lg:gap-x-8"
      >
        <div
          class="col-span-2 flex flex-col items-center gap-y-1 lg:col-span-3 lg:items-start"
        >
          <nuxt-link
            to="/"
            @click="$scrollToTopIfCurrentPageIs('index')"
            v-ripple
            aria-label="Brand Logo"
          >
            <Logo class="w-full max-w-[160px]" />
          </nuxt-link>
        </div>

        <div
          v-for="(linkGroup, index) in footerLinks"
          :key="index"
          class="footer-link-group col-span-1 flex flex-col last-of-type:col-span-2 lg:col-span-3 lg:last-of-type:col-span-3"
        >
          <span
            class="text-muted-foreground px-3 text-xs font-medium tracking-tight uppercase"
          >
            {{ linkGroup.category }}
          </span>

          <div class="mt-3 flex flex-col gap-y-0.5">
            <nuxt-link
              v-for="(link, index) in linkGroup.links"
              :key="index"
              :to="link.to"
              :target="link.openInNewTab ? '_blank' : ''"
              class="text-primary hover:bg-muted rounded-lg px-3 py-1 text-base font-medium tracking-[-0.04em]"
              active-class="bg-muted text-primary"
              >{{ link.label }}</nuxt-link
            >
          </div>
        </div>
      </div> -->

      <div class="flex items-center justify-center">
        <nuxt-link
          to="/"
          @click="$scrollToTopIfCurrentPageIs('index')"
          v-ripple
          aria-label="Brand Logo"
        >
          <Logo class="w-full max-w-[160px]" />
        </nuxt-link>
      </div>

      <SocialMedia class="mt-10 gap-x-6" iconClasses="size-6" />

      <div
        class="mt-8 flex items-center justify-center gap-x-2 text-xs sm:text-sm"
      >
        <nuxt-link
          to="/terms"
          class="hover:bg-muted hover:text-primary rounded-full px-3 py-2 transition"
          active-class="bg-muted text-primary"
          >Terms</nuxt-link
        >
        <span class="h-1 w-px bg-gray-300 dark:bg-gray-700"></span>
        <nuxt-link
          to="/privacy"
          class="hover:bg-muted hover:text-primary rounded-full px-3 py-2 transition"
          active-class="bg-muted text-primary"
          >Privacy</nuxt-link
        >
      </div>

      <div
        class="text-muted-foreground flex items-center justify-center pt-4 pb-10 text-center text-xs"
      >
        <span
          ><span class="hidden sm:inline">Copyright</span> ©
          {{ new Date().getFullYear() }} {{ useAppConfig().app.name }}. All
          rights reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  showFooterNavigation: {
    type: Boolean,
    default: true,
  },
});
</script>
