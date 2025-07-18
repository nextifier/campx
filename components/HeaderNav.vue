<template>
  <NavigationMenu :disable-hover-trigger="true">
    <NavigationMenuList>
      <NavigationMenuItem
        v-for="(navLink, index) in navLinks"
        :key="index"
        class="relative"
      >
        <NavigationMenuLink v-if="!navLink.isGroupLinks" as-child>
          <NuxtLink
            :to="navLink.to"
            class="text-muted-foreground hover:bg-muted relative flex h-full items-center justify-center gap-x-1 rounded-2xl px-3 py-2 tracking-tight transition select-none active:scale-95"
            active-class="text-primary"
            @click="$scrollToTopIfCurrentPageIs(navLink.routeName)"
            @contextmenu="handleRightClick(navLink)"
          >
            <span>{{ navLink.label }}</span>
          </NuxtLink>
        </NavigationMenuLink>

        <NavigationMenuTrigger
          class="text-muted-foreground hover:bg-muted relative flex h-full items-center justify-center gap-x-1 rounded-2xl py-2 pr-1.5 pl-3 tracking-tight transition select-none active:scale-95"
          v-else
        >
          <span>{{ navLink.label }}</span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="flex flex-col gap-y-1">
            <li v-for="(link, index) in navLink.links" :key="index">
              <NavigationMenuLink as-child>
                <NuxtLink
                  :to="link.to"
                  class="text-foreground hover:bg-muted flex h-full w-full items-center gap-x-1.5 rounded-xl px-4 py-1 text-sm tracking-tight transition select-none active:scale-95 sm:text-base lg:py-2"
                  active-class="text-primary bg-muted"
                  @click="$scrollToTopIfCurrentPageIs(link.routeName)"
                  @contextmenu="handleRightClick(link)"
                >
                  <span>{{ link.label }}</span>
                </NuxtLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup>
const handleRightClick = (link) => {
  if (link.rightClickLink) {
    event.preventDefault();
    window.open(link.rightClickLink, "_blank");
  }
};

const navLinks = ref([
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
</script>
