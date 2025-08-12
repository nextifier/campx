export const useBannerStore = defineStore("banners", {
  state: () => ({
    announcements: [],

    bannerHero: [
      {
        subHeadline: "BARU! Camping di Cabin X",
        content: `
      <p>Nikmatin nyamannya staycation dengan vibe alam yang maksimal. Kabin baru kami udah siap kamu booking. Kapan lagi coba?</p>
    `,
        img: {
          src: "/img/banners/banner-cabin.jpg",
          w: 400,
          h: 500,
        },
        cta: {
          label: "Cek Detail Kabin",
          link: "/experiences/cabin",
        },
      },
      {
        subHeadline: "Outing Kantor Anti Mainstream",
        content: `
      <p>Bosen sama outing yang gitu-gitu aja? Ajak tim kamu ke CampX! Fasilitas lengkap, aktivitas seru, dijamin bikin tim makin solid.</p>
    `,
        img: {
          src: "/img/banners/banner-outing.jpg",
          w: 400,
          h: 500,
        },
        cta: {
          label: "Tanya Paket Grup",
          link: "/contact",
        },
      },
      {
        subHeadline: "Udah Tau Belum?",
        content: `
      <p>CampX berada di tepi Waduk Jatiluhur, lho! Yang ternyata adalah waduk terbesar se-Indonesia. Pemandangannya? Juara!</p>
    `,
        img: {
          src: "/img/banners/banner-waduk.jpg",
          w: 400,
          h: 500,
        },
        cta: {
          label: "Lihat Lokasi di Peta",
          link: "https://maps.app.goo.gl/1uhAWnpqFdcH6Au66",
        },
      },
      {
        subHeadline: "Taklukkan Danau dengan SUP!",
        content: `
      <p>Udah pernah coba Stand-Up Paddle Board? Tamu yang nginap di CampX bisa main gratis, lho. Uji keseimbanganmu sambil nikmatin view terbaik!</p>
    `,
        img: {
          src: "/img/banners/banner-sup.jpg",
          w: 400,
          h: 500,
        },
        cta: {
          label: "Cobain Stand-Up Paddle",
          link: "/experiences/stand-up-paddle",
        },
      },
      {
        subHeadline: "Share Momen Kerenmu!",
        content: `
      <p>Jangan lupa tag @campx.id di Instagram & TikTok saat kamu posting keseruanmu! Pasti di-repost sama mimin. 😉</p>
    `,
        img: {
          src: "/img/banners/banner-socmed.jpg",
          w: 400,
          h: 500,
        },
        cta: {
          label: "Follow Instagram CampX",
          link: "https://instagram.com/campx.id",
        },
      },
    ],
  }),
});
