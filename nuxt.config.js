// import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import TerserPlugin  from 'terser-webpack-plugin';
// import purgeCss  from '@fullhuman/postcss-purgecss';
// import cssNano  from 'cssnano';
export default {
  head: {
    title: "gazelle-theme",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [],
  },
  target: "server",
  css: [
    "~/assets/css/icons.css",
    "~/assets/css/main.css",
    "~/assets/css/fontCss.css",
  ],
  plugins: [
    "~/plugins/tools.js",
    "~/plugins/http.js",
    "~/plugins/storeino.js",
    "~/plugins/init.js",
    "~/plugins/events.js",
    { src: '~/plugins/carousel.js', mode: 'client'}
  ],
  components: true,
  buildModules: [
    "@nuxtjs/google-fonts"
  ],
  components: true,
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/sentry',
    '@nuxt/image',
    '@nuxtjs/axios'
  ],
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
    families: {
      Inter: [200, 300, 400, 500, 600, 700, 800, 900],
    }
  },

  sentry: {
    dsn: '',
    config: {
      debug: true
    },
    clientConfig: {
      dsn: ''
    }
  },
  axios: {},

  serverMiddleware: ['~/server/index'],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {

  }
}
