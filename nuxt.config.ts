// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/nala/'  // 👈 важно: имя репозитория
  },
  router: {
    options: {
      base: '/nala/'
    }
  },
  target: 'static',
  generate: {
    fallback: true
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
})