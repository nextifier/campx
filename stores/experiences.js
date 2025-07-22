export const useExperienceStore = defineStore("experiences", {
  state: () => ({
    list: [
      {
        title: "Day Trip di CampX Jatiluhur",
        slug: "day-trip",
        status: "Available",
        categories: ["Day Trip", "Paket Personal"],
        shortDescription:
          "Mau main seharian, tapi gak nginap? Paket ini cocok untukmu!",
        description: `
            <p>Paket ini cocok untuk kamu yang mau berkunjung ke CampX dan bermain-main di area CampX tanpa menginap. Kamu bisa datang mulai dari pukul 7 pagi sampai paket Day Trip tutup di jam 7 malam. Cuman dengan 100rb, kamu sudah dapet tiket masuk, bisa foto-foto di tempat yang Instagramable, bisa gratis main sepeda, mancing, dan main stand-up paddle board (mendayung sambil berdiri di atas papan).</p>
        `,
        coverImage: "/img/experiences/day-trip/cover-day-trip.jpg",
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
            label: "Senin-Minggu",
            value: 100000,
            unit: "orang",
          },
        ],
        pricingNotes: [],
      },

      {
        title: "Camping di CampX Jatiluhur - Kavling only",
        slug: "camping-kavling-only",
        status: "Available",
        categories: ["Camping", "Paket Personal"],
        shortDescription:
          "Bawa perlengkapan camping-mu sendiri ya! Paket ini menyediakan lahannya aja.",
        description: `
            <p>Paket camping ini hanya kavling / lahan camping-nya aja ya, travelers! Untuk tenda, alas tenda, sleeping bag, dan perlengkapan lainnya, kamu bisa bawa sendiri, atau bisa juga sewa di CampX dengan biaya sewa peralatan yang terpisah dari paket ini.</p>
        `,
        coverImage:
          "/img/experiences/camping-kavling-only/cover-camping-kavling-only.jpg",
        checkInOut: {
          in: "14:00-23:59",
          out: "12:00",
        },
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Lahan camping 5x5m²",
          "Gratis main stand-up paddle board (mendayung sambil berdiri di atas papan)",
          "Gratis mancing",
          "Gratis sepedaan",
          "WiFi",
          "Colokan listrik di kavling",
          "Air keran di kavling",
          "Fasilitas umum lainnya seperti toilet, musholla, dan lainnya",
        ],
        excluded: [
          "Tenda camping",
          "Alas tenda",
          "Sleeping bag",
          "Lampu tenda",
          "Perlengkapan camping pribadi lainnya",
        ],
        pricing: [
          {
            label: "Senin-Kamis",
            value: 125000,
            unit: "malam / orang",
          },
          {
            label: "Jumat-Minggu",
            value: 175000,
            unit: "malam / orang",
          },
        ],
        pricingNotes: [
          "Pemesanan minimal 2 orang.",
          "Lebih dari 2 orang? Cukup tambah Rp75rb / malam / orang.",
        ],
      },

      {
        title: "Camping di CampX Jatiluhur - Camping Tent Included",
        slug: "camping-tent-included",
        status: "Available",
        categories: ["Camping", "Paket Personal"],
        shortDescription:
          "Gak punya tenda, alas tenda, dan sleeping bag? Sudah kami siapin ya!",
        description: `
            <p>Jangan halangin keinginanmu untuk camping cuman karena gak punya tenda atau gak tau cara pasangnya! Paket camping ini sudah termasuk tenda, alas tenda, sleeping bag, dan lampu tenda, semuanya sudah kami pasang. Kamu tinggal bawa diri dan perlengkapan pribadi aja.</p>
        `,
        coverImage:
          "/img/experiences/camping-tent-included/cover-camping-tent-included.jpg",
        checkInOut: {
          in: "14:00-23:59",
          out: "12:00",
        },
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Lahan camping 5x5m²",
          "Gratis main stand-up paddle board (mendayung sambil berdiri di atas papan)",
          "Gratis mancing",
          "Gratis sepedaan",
          "WiFi",
          "Colokan listrik di kavling",
          "Air keran di kavling",
          "Fasilitas umum lainnya seperti toilet, musholla, dan lainnya",
          "Tenda camping 2x2m²",
          "Alas tenda",
          "Sleeping bag",
          "Lampu tenda",
        ],
        excluded: [],
        pricing: [
          {
            label: "Senin-Kamis",
            value: 197500,
            unit: "malam / orang",
          },
          {
            label: "Jumat-Minggu",
            value: 247500,
            unit: "malam / orang",
          },
        ],
        pricingNotes: [
          "Pemesanan minimal 2 orang.",
          "Lebih dari 2 orang? Cukup tambah Rp75rb / malam / orang.",
        ],
      },

      {
        title: "Cabin CampX Jatiluhur",
        slug: "cabin",
        status: "Available",
        categories: ["Camping", "Cabin", "Paket Personal"],
        shortDescription:
          "Cobain pengalaman bermalam di Cabin X dengan pemandangan yang spektakuler!",
        description: `
            <p>Udah pernah camping pakai tenda biasa di CampX? Sekarang cobain camping di cabin yuk!</p>
        `,
        coverImage: "/img/experiences/cabin/cover-cabin.jpg",
        checkInOut: {
          in: "14:00-23:59",
          out: "12:00",
        },
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Lahan camping 5x5m²",
          "Gratis main stand-up paddle board (mendayung sambil berdiri di atas papan)",
          "Gratis mancing",
          "Gratis sepedaan",
          "WiFi",
          "Colokan listrik di kavling",
          "Air keran di kavling",
          "Fasilitas umum lainnya seperti toilet, musholla, dan lainnya",
          "Cabin",
          "Matras single 2 pcs",
        ],
        excluded: [],
        pricing: [
          {
            label: "Senin-Kamis",
            value: 200000,
            unit: "malam / orang",
          },
          {
            label: "Jumat-Minggu",
            value: 250000,
            unit: "malam / orang",
          },
        ],
        pricingNotes: [
          "Pemesanan minimal 2 orang.",
          "Lebih dari 2 orang? Cukup tambah Rp75rb / malam / orang.",
        ],
      },

      {
        title: "Stand-up Paddle",
        slug: "stand-up-paddle",
        status: "Available",
        categories: ["Activity"],
        shortDescription: "Mendayung sambil berdiri di atas papan.",
        description: `
        `,
        coverImage: "/img/experiences/paddle/cover-stand-up-paddle.jpg",
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Main stand-up paddle board (mendayung sambil berdiri di atas papan)",
        ],
        excluded: [],
        pricing: [
          {
            label: "Senin-Minggu",
            value: 100000,
            unit: "30 menit",
          },
          {
            label: "Senin-Minggu",
            value: 150000,
            unit: "jam",
          },
        ],
      },

      {
        title: "Canoeing Experience",
        slug: "canoeing-experience",
        status: "Available",
        categories: ["Activity"],
        shortDescription: "Mendayung di dalam perahu.",
        description: `
        `,
        coverImage: "/img/experiences/canoeing/cover-canoeing.jpg",
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Main canoe (mendayung di dalam perahu)",
        ],
        excluded: [],
        pricing: [
          {
            label: "Senin-Minggu",
            value: 250000,
            unit: "perahu",
          },
        ],
      },

      {
        title: "Strike the Lake",
        slug: "strike-the-lake",
        status: "Available",
        categories: ["Activity"],
        shortDescription: "Memancing di danau.",
        description: `
        `,
        coverImage: "/img/experiences/mancing/cover-mancing.jpg",
        included: ["Tiket masuk CampX Jatiluhur", "Memancing di danau."],
        excluded: [],
        pricing: [
          {
            label: "Senin-Minggu",
            value: 50000,
            unit: "hari",
          },
        ],
      },

      {
        title: "Boat Experience",
        slug: "boat-experience",
        status: "Available",
        categories: ["Activity"],
        shortDescription:
          "Pengalaman berlayar menggunakan perahu di atas waduk Jatiluhur.",
        description: `
        `,
        coverImage: "/img/experiences/boat/cover-boat.jpg",
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Bermain perahu mengelilingi waduk Jatiluhur",
        ],
        excluded: [],
        pricing: [
          {
            label: "Senin-Minggu",
            value: 350000,
            unit: "perahu",
          },
        ],
      },

      {
        title: "Boyer Hill Summit Challenge Day Trip",
        slug: "boyer-hill-summit-challenge-day-trip",
        status: "Available",
        categories: ["Paket Grup"],
        shortDescription:
          "Paket outing untuk grup minimal 20 orang dengan aktivitas menarik yang membuat timmu lebih dekat.",
        description: `
            <p>Paket group outing dengan aktivitas mendaki Tebing Boyer, dengan pemandangan sawah, danau, bukit.</p>
        `,
        coverImage:
          "/img/experiences/boyer-hill-day-trip/cover-boyer-hill-day-trip.jpg",
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Hiking ke Tebing Boyer",
          "2x snack / 1x makan siang",
          "Team-building & fun games",
          "Fasilitator profesional",
          "Parkir",
          "Aula",
        ],
        excluded: [],
        rundown: [
          {
            day: 1,
            list: [
              "Kedatangan dan registrasi di CampX",
              "Ice-breaking dan pembagian kelompok",
              "Perjalanan ke Tebing Boyer (naik boat)",
              "Briefing dan doa bersama",
              "Hiking ke Tebing Boyer",
              "Kembali ke CampX (naik boat)",
              "Makan siang",
              "Ice-breaking & sharing pengalaman hiking",
              "Kegiatan selesai",
            ],
          },
        ],
        pricing: [
          {
            label: "Paket Grup Outing - Boyer Hill Summit Challenge - Day Trip",
            value: 549000,
            unit: "orang",
          },
        ],
      },

      {
        title: "Boyer Hill Summit Challenge 2 Days 1 Night",
        slug: "boyer-hill-summit-challenge-camping",
        status: "Available",
        categories: ["Paket Grup"],
        shortDescription:
          "Paket outing untuk grup minimal 20 orang dengan aktivitas menarik yang membuat timmu lebih dekat.",
        description: `
            <p>Paket group outing dengan aktivitas mendaki Tebing Boyer, dengan pemandangan sawah, danau, bukit. Lalu menginap di CampX, di tenda, dengan pemandangan danau di depan mata.</p>
        `,
        coverImage:
          "/img/experiences/boyer-hill-camping/cover-boyer-hill-camping.jpg",
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Hiking ke Tebing Boyer",
          "Tenda kapasitas 3 orang",
          "Matras",
          "Lampu tenda",
          "Breakfast",
          "Coffee-break",
          "Dinner buffet",
          "Bonfire malam",
          "Team-building & fun games",
          "Fasilitator profesional",
          "Parkir",
          "Aula",
        ],
        excluded: [],
        rundown: [
          {
            day: 1,
            list: [
              "Kedatangan dan registrasi di CampX",
              "Ice-breaking dan pembagian kelompok",
              "Perjalanan ke Tebing Boyer (naik boat)",
              "Briefing dan doa bersama",
              "Hiking ke Tebing Boyer",
              "Kembali ke CampX (naik boat)",
              "Makan siang",
              "Check-in tenda & free time",
              "Makan malam",
              "Bonfire & free time",
              "Istirahat",
            ],
          },
          {
            day: 2,
            list: [
              "Sarapan",
              "Ice-breaking & fun games",
              "Free time & persiapan pulang",
              "Kegiatan selesai",
            ],
          },
        ],
        pricing: [
          {
            label:
              "Paket Grup Outing - Boyer Hill Summit Challenge - 2 Days 1 Night",
            value: 749000,
            unit: "orang",
          },
        ],
      },
    ],
  }),

  getters: {
    getItemBySlug: (state) => (slug) => {
      return state.list.find((item) => item.slug === slug);
    },
  },
});
