export const useRootStore = defineStore("root", {
  state: () => ({
    appName: "CampX Holiday Park Jatiluhur",
    darkModeEnabled: false,
    email: "hello@campx.id",
    emailOuting: "ary@campx.id",
    whatsapp: "6281398885402",
    whatsappOuting: "6281311778390",
    whatsappText: `Hai, CampX!`,
    website: "campx.id",
    instagram: "campx.id",
    tiktok: "campx.id",
    youtube: "campx-jatiluhur",
    socialProof: [
      {
        name: "Google",
        rating: "4.6",
        totalReviews: 195,
        iconName: "devicon:google",
        link: "https://maps.app.goo.gl/YsxHzezAu8Vpnrvx5",
        ctaLabel: "Cek Google Reviews",
      },
      {
        name: "TikTok",
        rating: "4.9",
        totalReviews: 226,
        iconName: "simple-icons:tiktok",
        link: "https://www.tiktok.com/place/CAMPX-JATILUHUR-21568226297381925",
        ctaLabel: "Lihat Konten TikTok",
      },
    ],
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
