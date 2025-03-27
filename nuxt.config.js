// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
  router: {
    options: {
      scrollBehaviorType: 'auto'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Template",
      meta: [
        { charset: "utf-8" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
      yandexApi: process.env.NUXT_YANDEX_API,
    },
  },
  vite: {
    server: {
      port: 3000,
    },
    css: {
      postcss: {
        plugins: [
          postCssSortMediaQueries({ sort: "desktop-first" }),
          autoprefixer({
            overrideBrowserslist: ["last 3 versions", "ie >= 10"],
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
          additionalData: '@use "assets/style/utils/_mixin" as *;',
        },
      },
    },
  },

  ssr: true,
  modules: ["@nuxtjs/device", "@nuxt/image", '@vueform/nuxt', "@nuxt/eslint"],
  compatibilityDate: "2024-08-06",
  eslint: {
    config: {
      stylistic: true,
    },
  },
});