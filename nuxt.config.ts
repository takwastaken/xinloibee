// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxtjs/plausible"],
  plausible: {
    apiHost: "https://plausible.094929.xyz",
    domain: "094929.xyz",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});