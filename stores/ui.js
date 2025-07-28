export const useUiStore = defineStore("ui", {
  state: () => ({
    isInquiryDialogOpen: false,
    isShortsDialogOpen: false,
    shortsVideoSrc: null,
  }),
  actions: {
    openInquiryDialog() {
      this.isInquiryDialogOpen = true;
    },
    closeInquiryDialog() {
      this.isInquiryDialogOpen = false;
    },

    openShortsDialog(src) {
      this.shortsVideoSrc = src;
      this.isShortsDialogOpen = true;
    },
    closeShortsDialog() {
      this.isShortsDialogOpen = false;
      this.shortsVideoSrc = null;
    },
  },
});
