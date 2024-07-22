// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  app: {
    head: {
      title: "SaaS PromptPilot",
      meta: [
        { name: "description", content: "SaaS PromptPilot" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  },
  runtimeConfig: {
    promptsKey: process.env.PROMPTS_API_KEY
  }
})
