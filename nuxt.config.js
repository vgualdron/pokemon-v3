import { resolve } from 'path';
import { copy } from 'fs-extra';
import environmentConfig from './config/env.config.js';

const env = process.env.NODE_ENV;
const envConfig = environmentConfig[env];

export default defineNuxtConfig({
  hooks: {
    'generate:done': async () => {
      const source = resolve('.nuxt/dist/client/assets');
      const destination = resolve('.output/public/_nuxt/assets');
      await copy(source, destination);
      console.log('Activos copiados a .output/public/_nuxt/assets');
    },
  },
  alias: {
    assets: resolve(__dirname, './assets'),
  },
  runtimeConfig: {
    public: envConfig, // Configuración accesible desde el cliente
  },
  ssr: false, // PWA típicamente es SPA
  app: {
    baseURL: './', // Prefijo relativo para todas las rutas
    buildAssetsDir: '_nuxt/', // Prefijo relativo para los recursos estáticos
    head: {
      htmlAttrs: { lang: 'en' },
      title: envConfig.appName || 'Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Descripción' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900&display=swap',
        },
      ],
    },
  },
  generate: {
    dir: '.output/public', // Carpeta de salida para generación estática
  },
  build: {
    assetsDir: 'assets', // Carpeta para los recursos estáticos generados
    publicPath: './_nuxt', // Ruta relativa para los archivos generados
    transpile: ['bootstrap-vue-next'],
  },
  vite: {
    base: './', // Rutas relativas para los archivos generados
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]', // Controla los nombres de los archivos
        },
      },
    },
    css: false,
    optimizeDeps: {
      exclude: ['virtual:public'], // Ignora rutas virtuales generadas
    },
  },
  router: {
    base: './',  // Cambia la base a una ruta relativa
  },
  css: [
    'bootstrap/dist/css/bootstrap.css', // Estilos de Bootstrap
    'bootstrap-vue-next/dist/bootstrap-vue-next.css',
    'bootstrap-icons/font/bootstrap-icons.css', // Íconos de Bootstrap
    '~/assets/css/styles.css',
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
  extends: [],
  axios: {},
  pwa: {
    registerType: 'autoUpdate', // Registra el SW automáticamente
    manifest: {
      name: envConfig.appName || 'Nuxt App',
      short_name: 'NuxtApp',
      description: 'Tu aplicación PWA',
      theme_color: '#ffffff',
      lang: 'en',
      display: 'standalone', // PWA como app independiente
      start_url: './', // Ruta relativa al inicio
      icons: [
        {
          src: './icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'], // Ajuste para evitar `_payload.json`
    },
    client: {
      installPrompt: true, // Mostrar el prompt de instalación
    },
  },
  compatibilityDate: '2025-01-11',
});
