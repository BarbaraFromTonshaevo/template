// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import autoprefixer from 'autoprefixer'
import postCssSortMediaQueries from 'postcss-sort-media-queries'

export default defineNuxtConfig({
  modules: ['@nuxtjs/device', '@nuxt/image', '@vueform/nuxt', '@nuxt/eslint'],

  ssr: true,
  components: [
    // Импорт компонентов из других директорий, помимо components
    {
      path: '~/components',
      pathPrefix: true,
    },
    { path: '~/components-base', pathPrefix: true },
  ],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Template',
      meta: [
        { charset: 'utf-8' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  router: {
    options: {
      scrollBehaviorType: 'auto',
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
      yandexApi: process.env.NUXT_YANDEX_API,
    },
  },
  compatibilityDate: '2024-08-06',
  vite: {
    server: {
      port: 3000,
    },
    css: {
      postcss: {
        plugins: [
          postCssSortMediaQueries({ sort: 'desktop-first' }),
          autoprefixer({
            overrideBrowserslist: ['last 3 versions', 'ie >= 10'],
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
          additionalData: '@use "assets/style/utils/_mixin" as *;',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
