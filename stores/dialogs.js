export const useDialogStore = defineStore("dialogs", {
  state: () => ({
    list: [
      {
        name: "share-page",
        isOpen: false,
        data: {},
      },
      {
        name: "shorts",
        isOpen: false,
        data: {},
      },
      {
        name: "inquiry",
        isOpen: false,
        data: {},
      },
      {
        name: "experience-gallery",
        isOpen: false,
        data: {},
      },
    ],
  }),
  actions: {
    /**
     * Update a dialog's state and data at the same time.
     * @param {string} name - The name of the dialog to update.
     * @param {boolean} isOpen - Whether the dialog should be open or closed.
     * @param {object} [data={}] - Optional data to update in the dialog.
     */
    updateDialog(name, isOpen, data = {}) {
      const dialog = this.list.find((d) => d.name === name);
      if (dialog) {
        dialog.isOpen = isOpen;
        dialog.data = isOpen ? { ...dialog.data, ...data } : {}; // Clear `data` if `isOpen` is false.
      }
    },
  },
});
