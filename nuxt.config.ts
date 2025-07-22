import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    componentInspector: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      // ignore: ["/experiences/**"],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NODE_ENV === "production"
          ? "https://campx.id"
          : "http://localhost:3000",
    },
  },

  app: {
    head: {
      title: "CampX Holiday Park Jatiluhur",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/icons/apple-touch-icon.png",
        },
      ],
      script: [],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    "nuxt-gtag",
    "@formkit/auto-animate/nuxt",
  ],

  fonts: {
    provider: "local",
    families: [
      {
        name: "PlusJakartaSans",
        src: "/fonts/PlusJakartaSans-VariableFont.woff2",
        weight: "200 800",
        display: "swap",
      },
    ],
  },

  icon: {
    mode: "svg",
    clientBundle: {
      scan: true,
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  colorMode: {
    preference: "light", //system, light, dark
    fallback: "light",
    classSuffix: "",
    hid: "color-mode-script",
    globalName: "__COLOR_MODE__",
    storageKey: "color-mode",
  },

  image: {
    // provider: process.env.NODE_ENV === "production" ? "ipxStatic" : "ipx",
    provider: "ipx",
    quality: 85,
    format: ["webp"],
  },

  site: {
    name: "CampX Holiday Park Jatiluhur",
    url:
      process.env.NODE_ENV === "production"
        ? "https://campx.id"
        : "http://localhost:3000",
  },

  ogImage: {
    defaults: {
      component: "Page",
      width: 1200,
      height: 630,
    },
  },

  robots: {
    disallow: ["/terms", "/privacy"],
  },

  schemaOrg: {
    enabled: false,
  },

  linkChecker: {
    enabled: false,
  },

  gtag: {
    loadingStrategy: "defer",
    tags: [
      {
        id: "G-QH1BX5M3WH",
        enabled: true,
      },
    ],
  },

  compatibilityDate: "2025-07-18",

  experimental: {
    viewTransition: true,
  },
});
