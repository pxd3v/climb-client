// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      apiURL: process.env.API_URL
    },
  },
  devServer: {
    port: 3001
  }
})
