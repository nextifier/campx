export const usePromoStore = defineStore("promos", {
  state: () => ({
    list: [
      {
        image: "",
        title: "",
        link: {
          label: "",
          to: "",
          openInNewTab: true,
        },
      },
    ],
  }),
});
