export const useExperienceStore = defineStore("experiences", {
  state: () => ({
    list: [
      {
        title: "Day Trip Pass: Main Sepuasnya!",
        slug: "day-trip",
        status: "Available",
        categories: ["Day Trip", "Paket Personal"],
        shortDescription:
          "Gak perlu nginep buat nikmatin CampX! Cuma bayar sekali, bebas main & foto-foto seharian.",
        description: `
          <p>Pengen <strong>healing</strong> tapi waktu mepet? <strong>Gas keun</strong> aja Day Trip ke CampX! Cuma modal cepek, kamu udah bisa nikmatin pemandangan danau, foto-foto di spot <i>aesthetic</i>, plus bebas main sepeda, mancing, sampe <i>stand-up paddle board</i>. Kurang asik apa coba?</p>
        `,
        coverImage: "/img/experiences/day-trip/cover-day-trip.jpg",
        checkInOut: {
          in: "07:00",
          out: "19:00",
        },
        included: [
          "Tiket masuk CampX Jatiluhur",
          "Gratis main Stand-Up Paddle Board (SUP)",
          "Gratis sepedaan keliling area",
          "Gratis mancing (bawa alat sendiri ya!)",
          "Akses ke semua spot foto keren",
        ],
        pricing: [
          {
            label: "Harga Flat (Senin-Minggu)",
            value: 100000,
            unit: "orang",
          },
        ],
        pricingNotes: [],
      },

      {
        title: "DIY Camping: Bawa Gear Sendiri",
        slug: "camping-kavling-only",
        status: "Available",
        categories: ["Camping", "Paket Personal"],
        shortDescription:
          "Punya tenda sendiri? Mantap! Booking kavlingnya aja di sini, udah lengkap sama listrik & air.",
        description: `
          <p>Buat kamu para <strong>pro camper</strong> yang udah punya <i>gear</i> lengkap, paket ini pas banget. Cukup sewa lahannya yang strategis, view langsung ke danau. Fasilitas pendukung kayak listrik, air bersih, sampe WiFi udah kita siapin. Tinggal pasang tenda, nyalain api unggun, <i>and enjoy the vibe!</i></p>
        `,
        coverImage:
          "/img/experiences/camping-kavling-only/cover-camping-kavling-only.jpg",
        checkInOut: {
          in: "14:00",
          out: "12:00",
        },
        included: [
          "Kavling/lahan camping 5m²",
          "Akses listrik & air bersih di kavling",
          "Akses WiFi",
          "Gratis main Stand-Up Paddle Board, Sepeda & Mancing",
          "Akses ke fasilitas umum (toilet, musholla, dll)",
        ],
        excluded: [
          "Tenda & perlengkapan tidur",
          "Peralatan masak & makan",
          "Perlengkapan camping pribadi lainnya",
        ],
        pricing: [
          {
            label: "Weekday (Senin-Kamis)",
            value: 125000,
            unit: "orang/malam",
          },
          {
            label: "Weekend (Jumat-Minggu)",
            value: 175000,
            unit: "orang/malam",
          },
        ],
        pricingNotes: [
          "Harga di atas berlaku untuk pemesanan minimal 2 orang.",
          "Dateng lebih dari berdua? Cuma nambah Rp75rb/orang/malam.",
        ],
      },

      {
        title: "Camping Anti Ribet: Tinggal Bawa Badan!",
        slug: "camping-tent-included",
        status: "Available",
        categories: ["Camping", "Paket Personal"],
        shortDescription:
          "Niat camping tapi mager bawa barang? Tenang, semua udah kita siapin & pasangin. Kamu tinggal dateng!",
        description: `
          <p>Stop wacana camping gara-gara gak punya tenda! Di paket ini, semua perlengkapan dari tenda, <i>sleeping bag</i>, sampe lampu udah kita <strong>set up</strong>-in cantik di kavling pilihanmu. Kamu tinggal bawa baju ganti sama <i>good vibes</i> aja. <i>Simple as that!</i></p>
        `,
        coverImage:
          "/img/experiences/camping-tent-included/cover-camping-tent-included.jpg",
        checkInOut: {
          in: "14:00",
          out: "12:00",
        },
        included: [
          "Kavling/lahan camping 5m²",
          "Akses listrik & air bersih di kavling",
          "Akses WiFi",
          "Gratis main Stand-Up Paddle Board, Sepeda & Mancing",
          "Akses ke fasilitas umum (toilet, musholla, dll)",
          "Tenda kapasitas 2-4 orang (sudah terpasang)",
          "Kasur untuk 2 orang",
          "Sleeping bag",
          "Lampu tenda",
        ],
        excluded: ["Peralatan masak & makan pribadi"],
        pricing: [
          {
            label: "Weekday (Senin-Kamis)",
            value: 232500,
            unit: "orang/malam",
          },
          {
            label: "Weekend (Jumat-Minggu)",
            value: 282500,
            unit: "orang/malam",
          },
        ],
        pricingNotes: [
          "Harga di atas berlaku untuk pemesanan minimal 2 orang.",
          "Dateng lebih dari berdua? Cuma nambah Rp75rb/orang/malam.",
        ],
      },

      {
        title: "Camping di Cabin X: Camping Level Up!",
        slug: "cabin",
        status: "Available",
        categories: ["Camping", "Cabin", "Paket Personal"],
        shortDescription:
          "Ngerasain camping dengan nyaman? Cabin is the answer! Tidur enak, bangun-bangun langsung liat view danau.",
        description: `
          <p>Bosen sama tenda? Waktunya <i>upgrade</i> ke <strong>Cabin X</strong>! Nikmatin indahnya nginep di alam tanpa perlu repot bawa dan pasang tenda. Pintu dibuka, eh, langsung disapa pemandangan Waduk Jatiluhur yang <i>spectacular</i>. Cocok buat <i>romantic getaway</i> atau <i>chill</i> bareng <i>bestie</i>.</p>
        `,
        coverImage: "/img/experiences/cabin/cover-cabin.jpg",
        checkInOut: {
          in: "14:00",
          out: "12:00",
        },
        included: [
          "Kabin eksklusif dengan view danau",
          "Luas kabin 7m²",
          "Kasur untuk 2 orang",
          "Akses listrik & air bersih di kavling",
          "Akses WiFi",
          "Gratis main Stand-Up Paddle Board, Sepeda & Mancing",
          "Kamar mandi sharing / outdoor",
          "Akses ke fasilitas umum (toilet, musholla, dll)",
        ],
        excluded: [],
        pricing: [
          {
            label: "Weekday (Senin-Kamis)",
            value: 175000,
            unit: "orang/malam",
          },
          {
            label: "Weekend (Jumat-Minggu)",
            value: 225000,
            unit: "orang/malam",
          },
        ],
        pricingNotes: [
          "Harga di atas berlaku untuk pemesanan minimal 2 orang.",
          "Dateng lebih dari berdua? Cuma nambah Rp75rb/orang/malam.",
        ],
      },

      {
        title: "Jelajah Danau pake Paddle Board",
        slug: "stand-up-paddle",
        status: "Available",
        categories: ["Activity"],
        shortDescription:
          "Uji keseimbanganmu sambil nikmatin pemandangan danau yang keren. Seru dan sporty!",
        description: `
          <p>Pernah liat orang dayung sambil berdiri di atas papan? Yes, itu <strong>Stand-Up Paddle Boarding (SUP)</strong>! Di sini kamu bisa cobain sendiri. Gak usah takut, nanti ada tim kami yang ngajarin. Dijamin jadi pengalaman baru yang gak terlupakan.</p>
        `,
        coverImage: "/img/experiences/paddle/cover-stand-up-paddle.jpg",
        included: [
          "Sewa Stand-Up Paddle Board (SUP)",
          "Pelampung",
          "Briefing singkat dari tim kami",
        ],
        excluded: [
          "Tiket masuk (jika tidak mengambil paket menginap/day trip)",
        ],
        pricing: [
          {
            label: "Sesi 30 Menit",
            value: 100000,
            unit: "orang",
          },
          {
            label: "Sesi 1 Jam",
            value: 150000,
            unit: "orang",
          },
        ],
      },

      {
        title: "Canoeing Seru di Jatiluhur",
        slug: "canoeing-experience",
        status: "Maintenance",
        categories: ["Activity"],
        shortDescription:
          "Dayung santai bareng temen atau pasangan sambil keliling danau. Perfect for chilling!",
        description: `
          <p>Mau aktivitas air yang lebih santai? Cobain <strong>canoeing</strong>, deh! Kamu bisa dayung perahu kano sambil nikmatin tenangnya air danau Jatiluhur. Satu perahu bisa buat berdua atau bertiga, asik buat quality time.</p>
        `,
        coverImage: "/img/experiences/canoeing/cover-canoeing.jpg",
        included: [
          "Sewa perahu kano (kapasitas 3 orang)",
          "Dayung & pelampung",
        ],
        excluded: [
          "Tiket masuk (jika tidak mengambil paket menginap/day trip)",
        ],
        pricing: [
          {
            label: "Sewa perahu per jam",
            value: 250000,
            unit: "perahu",
          },
        ],
      },

      {
        title: "Mancing Mania, Mantap!",
        slug: "strike-the-lake",
        status: "Available",
        categories: ["Activity"],
        shortDescription:
          "Hobi mancing? Spot di CampX juara! Bawa alat pancingmu dan buktiin skill-mu di sini.",
        description: `
          <p>Buat para mancing mania, danau Jatiluhur itu surga! Kamu bisa lempar umpan dari pinggir danau di area CampX. Siapa tau dapet ikan jumbo. Jangan lupa bawa peralatanmu sendiri, ya!</p>
        `,
        coverImage: "/img/experiences/mancing/cover-mancing.jpg",
        included: ["Spot memancing di area CampX"],
        excluded: [
          "Alat pancing dan umpan",
          "Tiket masuk (jika tidak mengambil paket menginap/day trip)",
        ],
        pricing: [
          {
            label: "Akses mancing seharian",
            value: 50000,
            unit: "orang",
          },
        ],
      },

      {
        title: "Keliling Danau Naik Perahu",
        slug: "boat-experience",
        status: "Available",
        categories: ["Activity"],
        shortDescription:
          "Ajak rombonganmu keliling Waduk Jatiluhur yang luas. Pemandangannya? Gak usah ditanya!",
        description: `
          <p>Cara terbaik menikmati kemegahan Waduk Jatiluhur adalah dengan berkeliling naik perahu. Ajak teman-teman atau keluargamu buat <strong>boat trip</strong> singkat. Kamu bakal liat pemandangan perbukitan dan keramba apung dari dekat. Jangan lupa siapin kamera!</p>
        `,
        coverImage: "/img/experiences/boat/cover-boat.jpg",
        included: [
          "Sewa perahu (kapasitas 10-15 orang)",
          "Driver perahu",
          "Pelampung",
        ],
        excluded: [
          "Tiket masuk (jika tidak mengambil paket menginap/day trip)",
        ],
        pricing: [
          {
            label: "Trip keliling danau (durasi ±1 jam)",
            value: 350000,
            unit: "perahu",
          },
        ],
      },

      // {
      //   title: "One Day Outing Rombongan",
      //   slug: "day-trip-group-package",
      //   status: "Available",
      //   categories: ["Paket Grup"],
      //   shortDescription:
      //     "Butuh tempat buat acara seharian bareng tim? Paket ini paling pas. Fun, hemat, dan lengkap.",
      //   description: `
      //     <p>Kumpulin tim kamu (minimal 20 orang) dan seru-seruan seharian di CampX! Paket ini udah termasuk tiket masuk dan akses ke berbagai fasilitas. Mau ditambah <i>fun games</i> atau makan siang? Bisa banget, tinggal <i>request</i> aja!</p>
      //   `,
      //   coverImage:
      //     "/img/experiences/day-trip-group-package/cover-day-trip-group-package.jpg",
      //   included: [
      //     "Tiket masuk CampX",
      //     "Akses ke fasilitas umum",
      //     "Free flow air mineral",
      //   ],
      //   excluded: [
      //     "Makan & Snack",
      //     "Aktivitas tambahan berbayar",
      //     "Fasilitator",
      //   ],
      //   pricing: [
      //     {
      //       label: "Minimal 20 orang",
      //       value: 150000,
      //       unit: "orang",
      //     },
      //   ],
      // },

      // {
      //   title: "Camping Rombongan (2D1N)",
      //   slug: "camping-group-package",
      //   status: "Available",
      //   categories: ["Paket Grup"],
      //   shortDescription:
      //     "Bikin momen kebersamaan tim lebih dapet dengan nginep bareng di tenda. Bonding time!",
      //   description: `
      //     <p>Ngerasain serunya <strong>camping</strong> bareng puluhan temen kantor atau komunitas? <i>Why not!</i> Kami sediain semua kebutuhan <i>camping</i>-mu, dari tenda sampe fasilitasnya. Dijamin jadi pengalaman yang bikin tim makin solid.</p>
      //   `,
      //   coverImage:
      //     "/img/experiences/camping-group-package/cover-camping-group-package.jpg",
      //   included: [
      //     "Tiket masuk CampX",
      //     "Tenda & perlengkapan tidur",
      //     "Api unggun",
      //     "Akses fasilitas lengkap",
      //   ],
      //   excluded: [
      //     "Makan & Snack",
      //     "Aktivitas tambahan berbayar",
      //     "Fasilitator",
      //   ],
      //   pricing: [
      //     {
      //       label: "Minimal 20 orang",
      //       value: 190000,
      //       unit: "orang",
      //     },
      //   ],
      // },

      {
        title: "Team Building: Taklukkan Tebing Boyer (Day Trip)",
        slug: "boyer-hill-summit-challenge-day-trip",
        status: "Available",
        categories: ["Paket Grup", "Team Building"],
        shortDescription:
          "Aktivitas team building seharian yang menantang! Hiking, naik perahu, plus fun games buat tim-mu.",
        description: `
          <p>Siap bikin tim kamu makin kompak? Ajak mereka buat naklukin <strong>Tebing Boyer</strong>! Perjalanan seru naik perahu, <i>hiking</i> dengan pemandangan aduhai, ditutup sama sesi <i>fun games</i> yang dipandu fasilitator profesional. Pulang-pulang dijamin makin solid!</p>
        `,
        coverImage:
          "/img/experiences/boyer-hill-day-trip/cover-boyer-hill-day-trip.jpg",
        included: [
          "Perjalanan dengan perahu ke & dari titik hiking",
          "Trekking ke Tebing Boyer",
          "1x Makan Siang / 2x Snack",
          "Sesi Team-building & Fun Games",
          "Fasilitator profesional & dokumentasi",
          "Aula untuk berkumpul & Parkir",
        ],
        excluded: [],
        rundown: [
          {
            day: 1,
            list: [
              "Welcome & Registrasi di CampX",
              "Ice Breaking & Pembagian Kelompok",
              "Berlayar ke Kaki Tebing Boyer",
              "Safety Briefing & Start Hiking",
              "Puncak Boyer: Foto & Nikmati Pemandangan",
              "Kembali ke CampX",
              "Makan Siang & Istirahat",
              "Sesi Fun Games & Team Building",
              "Penutupan & Sayonara",
            ],
          },
        ],
        pricing: [
          {
            label: "Minimal 20 orang",
            value: 549000,
            unit: "orang",
          },
        ],
      },

      {
        title: "Team Building: Boyer Challenge & Camping (2D1N)",
        slug: "boyer-hill-summit-challenge-camping",
        status: "Available",
        categories: ["Paket Grup", "Team Building"],
        shortDescription:
          "Paket team building paling lengkap! Hiking, main games, nginep di tenda, plus bonfire party!",
        description: `
          <p>Gak cukup seharian? Ambil paket <strong>2D1N</strong>! Setelah seharian berpetualang naklukin Tebing Boyer, malemnya kita lanjut <i>chill</i> di depan api unggun. Paginya, masih ada sesi <i>fun games</i> lagi. Kebersamaannya dapet banget!</p>
        `,
        coverImage:
          "/img/experiences/boyer-hill-camping/cover-boyer-hill-camping.jpg",
        included: [
          "Semua fasilitas dari paket Day Trip Boyer Hill",
          "Menginap di tenda (kapasitas 3 orang)",
          "Matras & lampu tenda",
          "Makan Malam (Buffet)",
          "Sarapan",
          "Api Unggun",
        ],
        excluded: [],
        rundown: [
          {
            day: 1,
            list: [
              "Tiba di CampX, Welcome Drink & Registrasi",
              "Ice Breaking & Pembagian Tim",
              "Berlayar & Hiking ke Puncak Boyer",
              "Kembali ke CampX & Makan Siang",
              "Check-in Tenda & Free Time",
              "Makan Malam & Ramah Tamah",
              "Api Unggun & Malam Keakraban",
              "Istirahat",
            ],
          },
          {
            day: 2,
            list: [
              "Sunrise & Sarapan Pagi",
              "Sesi Fun Games & Team Competition",
              "Free Time (Bisa main air atau santai)",
              "Persiapan Pulang & Check-out",
            ],
          },
        ],
        pricing: [
          {
            label: "Minimal 20 orang",
            value: 749000,
            unit: "orang",
          },
        ],
      },
    ],
  }),

  getters: {
    getItemBySlug: (state) => (slug) => {
      return state.list.find((item) => item.slug === slug) || null;
    },

    getItemsByCategories: (state) => (category) => {
      if (!category) {
        return [];
      }
      return state.list.filter((item) => {
        return item.categories && item.categories.includes(category);
      });
    },
  },
});
