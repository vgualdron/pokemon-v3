import environmentConfig from './config/env.config.js';

const env = process.env.NODE_ENV;
const envConfig = environmentConfig[env];

export default defineNuxtConfig({
  runtimeConfig: {
    public: envConfig,
  },
  ssr: false, // Mantén la configuración de SPA
  app: {
    baseURL: '/', // Usar base absoluta para resolver las rutas
    buildAssetsDir: '_nuxt/', // No debería haber problema con esto
    head: {
      htmlAttrs: { lang: 'en' },
      title: envConfig.appName || 'Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descripción' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Ruta absoluta para favicon
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900&display=swap',
        },
      ],
    },
  },
  generate: {
    dir: '.output/public',
  },
  build: {
    assetsDir: 'assets',
    publicPath: './_nuxt', // Está bien, ya que se refiere a recursos dentro de _nuxt/
    transpile: ['bootstrap-vue-next'],
  },
  vite: {
    base: '/', // Mantén la base relativa si realmente es necesario
    build: {},
    css: false,
    optimizeDeps: {
      exclude: ['virtual:public'],
    },
  },
  router: {
    base: '/', // Asegúrate de que este sea un valor absoluto
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue-next/dist/bootstrap-vue-next.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/public/css/styles.css',
  ],
  components: true,
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/eslint-module',
  ],
  eslint: {
    fix: true,
    emitWarning: true,
  },
  plugins: ['~/plugins/bootstrap-vue.js'],
  axios: {},
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: envConfig.appName || 'Nuxt App',
      short_name: 'NuxtApp',
      description: 'Tu aplicación PWA',
      theme_color: '#ffffff',
      lang: 'en',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
  },
  compatibilityDate: '2025-01-11',
});

