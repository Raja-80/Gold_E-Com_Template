export default {
  head: {
    title: 'palest-theme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: []
  },
  mode: 'universal',
  target: 'server',
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/main.css',
    '~/assets/css/fontCss.css'
  ],
  plugins: [
    '~/plugins/tools.js',
    '~/plugins/http.js',
    '~/plugins/storeino.js',
    '~/plugins/init.js',
    '~/plugins/events.js',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
    families: {
      Almarai: [400],
      Tajawal: [400],
      'Playfair+Display': [400],
      Sora: [400],
      Poppins: [400],
      Amiri: [400],
      Cairo: [400],
      'Readex+Pro': [400],
      Oswald: [400]
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/axios'
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  serverMiddleware: ['~/server/index'],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
  },
}
