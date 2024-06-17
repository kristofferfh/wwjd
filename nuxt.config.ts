// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  image: {
    dir: 'assets/images'
  },
  modules: ["@nuxt/image"],
})