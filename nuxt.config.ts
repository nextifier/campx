import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    componentInspector: false,
  },

  runtimeConfig: {
    pmOneApiKey:
      process.env.NUXT_PM_ONE_API_KEY ||
      "pk_ejeXbZqQtYxpsW1El8glWyEJ2lSG20avAf1LxFVo",

    public: {
      siteUrl:
        process.env.NODE_ENV === "production"
          ? "https://campx.id"
          : "http://localhost:3000",
      apiUrl:
        process.env.NODE_ENV === "production"
          ? "https://api.pmone.id"
          : "http://localhost:8000",
      blogUsernames: "campx.blog",
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      // ignore: ["/experiences/**"],
    },
  },

  app: {
    head: {
      title: "CampX Holiday Park Jatiluhur",
      meta: [{ name: "google", content: "notranslate" }],
      htmlAttrs: {
        lang: "en",
        translate: "no",
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
        name: "MinusOne",
        src: "/fonts/MinusOne-VF.woff2",
        weight: "100 1000",
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
    componentDir: "./app/components/ui",
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
    provider: process.env.NODE_ENV === "production" ? "cloudflare" : "ipx",
    cloudflare: {
      baseURL: "https://campx.id",
    },
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

  sitemap: {
    sources: ["/api/sitemap-urls"],
    urls: ["/", "/contact"],
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
