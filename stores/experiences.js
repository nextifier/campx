export const useExperienceStore = defineStore("experiences", {
  state: () => ({
    list: [
      {
        title: "Day Trip di CampX Jatiluhur",
        slug: "day-trip",
        categories: ["Day Trip"],
        description: `
            <p>Paket ini cocok untuk kamu yang mau berkunjung ke CampX dan bermain-main di area CampX tanpa menginap. Kamu bisa datang mulai dari pukul 7 pagi sampai paket Day Trip tutup di jam 7 malam. Cuman dengan 100rb, kamu sudah dapet tiket masuk, bisa foto-foto di tempat yang Instagramable, bisa gratis main sepeda, mancing, dan main stand-up paddle board (mendayung sambil berdiri di atas papan).</p>
        `,
        coverImage: "",
        checkInOut: {
          in: "07:00",
          out: "19:00",
        },
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Gratis main stand-up paddle board (mendayung sambil berdiri di atas papan)",
          "Gratis mancing",
          "Gratis sepedaan",
        ],
        pricing: [
          {
            label: "",
            value: 100000,
            unit: "orang",
          },
        ],
        pricingNotes: [""],
        bookingLink: [
          {
            name: "",
            platformLogo: "",
            to: "",
          },
        ],
        photos: [
          //   {
          //     src: "/img/events/pm-kickoff-2024/photos/15.jpg",
          //     thumbnail: "/img/events/pm-kickoff-2024/photos-thumb/15.jpg",
          //     w: 1600,
          //     h: 1067,
          //   },
        ],
      },

      {
        title: "Camping di CampX Jatiluhur (Kavling only)",
        slug: "camping",
        categories: ["Camping"],
        description: `
            <p>Paket camping ini hanya kavling / lahan camping-nya aja ya, travelers! Untuk tenda, matras, dan perlengkapan lainnya, kamu bisa bawa sendiri, atau bisa juga sewa di CampX dengan biaya sewa peralatan yang terpisah dari paket ini.</p>
        `,
        coverImage: "",
        checkInOut: {
          in: "14:00-23:59",
          out: "12:00",
        },
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Gratis main stand-up paddle board (mendayung sambil berdiri di atas papan)",
          "Gratis mancing",
          "Gratis sepedaan",
          "WiFi",
          "Colokan listrik di kavling",
          "Air keran di kavling",
          "Fasilitas umum lainnya seperti toilet, musholla, dan lainnya",
        ],
        pricing: [
          {
            label: "Senin-Kamis",
            value: 250000,
            unit: "malam / orang",
          },
          {
            label: "Jumat-Minggu",
            value: 350000,
            unit: "malam / orang",
          },
        ],
        pricingNotes: [
          "Lebih dari 2 orang? Cukup tambah Rp75rb / malam / orang.",
        ],
        bookingLink: [
          {
            name: "",
            platformLogo: "",
            to: "",
          },
        ],
        photos: [
          //   {
          //     src: "/img/events/pm-kickoff-2024/photos/15.jpg",
          //     thumbnail: "/img/events/pm-kickoff-2024/photos-thumb/15.jpg",
          //     w: 1600,
          //     h: 1067,
          //   },
        ],
      },
      //   {
      //     title: "",
      //     slug: "",
      //     categories: [""],
      //     description: ``,
      //     coverImage: "",
      //     openingHours: {
      //       open: "",
      //       close: "",
      //     },
      //     included: [""],
      //     pricing: [
      //       {
      //         label: "",
      //         value: "",
      //         unit: "",
      //       },
      //     ],
      //     bookingLink: [
      //       {
      //         label: "",
      //         platformLogo: "",
      //         to: "",
      //       },
      //     ],
      //     pricingNotes: [""],
      //     galleryPhotos: [""],
      //   },
    ],
  }),

  getters: {
    getItemBySlug: (state) => (slug) => {
      return state.list.find((item) => item.slug === slug);
    },
  },
});
