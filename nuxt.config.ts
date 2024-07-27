// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // 檢查typescript型別
  typescript: {
    typeCheck: true,
  },

  // 模組增加
  modules: ["@nuxtjs/tailwindcss"],
});
