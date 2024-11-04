// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  css: [
    '@/assets/scss/_bootstrap.scss',
  ],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        }
      }
    }
  }
})
