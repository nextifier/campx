export const useRootStore = defineStore("root", {
  state: () => ({
    appName: "CampX Holiday Park Jatiluhur",
    darkModeEnabled: false,
    email: "hello@campx.id",
    whatsapp: "6281398885402",
    whatsappText: `Hello, More Food Expo!`,
    website: "campx.id",
    instagram: "campx.id",
    facebook: "campx.id",
    tiktok: "campx.id",
    showModal: {
      sharePage: false,
      teaserVideo: false,
    },
    dialogRundown: {
      isShow: false,
      data: {},
    },
  }),

  actions: {
    setDialogRundown({ isShow, data = {} }) {
      this.dialogRundown = { isShow, data };
    },
    clearDialogRundown() {
      this.dialogRundown = {
        isShow: false,
        data: {},
      };
    },
  },
});
