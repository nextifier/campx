export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      scrollToTopIfCurrentPageIs: (routeName) => {
        if (useRoute().name === routeName) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      },
    },
  };
});
