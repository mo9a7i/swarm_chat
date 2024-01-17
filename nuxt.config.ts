// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/ui'],

  css: ['~/assets/css/main.scss'],
  imports: { dirs: ['stores'] },

  pinia: {},
  piniaPersistedstate: {
    storage: 'localStorage',
    debug: true,
  },

  colorMode: {
    preference: 'light',
  },
  tailwindcss: {
    viewer: false,
  },

})
