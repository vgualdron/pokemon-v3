import environmentConfig from './config/env.config.js';

const env = process.env.NODE_ENV;
const isDev = env !== 'production';
const envConfig = environmentConfig[env];

export default defineNuxtConfig({
  runtimeConfig: {
    public: envConfig, // Configuración accesible desde el cliente
  },
  // Directorio de generación estática
  generate: {
    dir: 'docs', // Exportar a /docs
    fallback: '404.html', // Archivo fallback para SPA
  },
  // Desactivar el renderizado del lado del servidor
  ssr: false, // PWA típicamente es SPA
  // Configuración del encabezado global
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      title: envConfig.appName || 'Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'fsdfds' },
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
  // Archivos CSS globales
  css: [
    'bootstrap/dist/css/bootstrap.css', // Estilos de Bootstrap
    'bootstrap-vue-next/dist/bootstrap-vue-next.css',
    'bootstrap-icons/font/bootstrap-icons.css', // Íconos de Bootstrap
    '~/assets/css/styles.css',
  ],
  components: true,
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt', // Módulo PWA
  ],
  plugins: ['~/plugins/bootstrap-vue.js'],
  build: {
    transpile: ['bootstrap-vue-next'],
  },
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
      start_url: './',
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
      globIgnores: ['sw.js', 'workbox-*.js'], // Ignora estos archivos generados
    },
    client: {
      installPrompt: true, // Mostrar el prompt de instalación
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]', // Controlar los nombres de los archivos
        },
      },
    },
    base: './', // Ajustar rutas relativas
  },
  router: {
    options: {
      base: envConfig.appBaseDir || '/', // Base del router
    },
  },
  compatibilityDate: '2025-01-10',
});
