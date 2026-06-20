// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

  image: {
    domains: ['images.unsplash.com']
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Jazz Kitchen — Real Punjabi home cooking, delivered in Romford',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap'
        }
      ]
    }
  }
})
