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
    dir: 'docs',
  },

  // Desactivar el renderizado del lado del servidor
  ssr: false,

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
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
        },
      ],
    },
  },

  // Archivos CSS globales
  css: [
    'bootstrap/dist/css/bootstrap.css', // Estilos de Bootstrap
    'bootstrap-icons/font/bootstrap-icons.css', // Íconos de Bootstrap (si los usas)
    '~/assets/css/styles.css',
  ],

  // Importación automática de componentes
  components: true,

  // Módulos de desarrollo y construcción
  modules: [
    // PWA
    '@vite-pwa/nuxt',
  ],

  // Configuración del módulo Axios
  axios: {},

  // Configuración de PWA
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Configuración de compilación
  vite: {
    // Aquí puedes agregar configuraciones adicionales específicas para Vite
  },

  // Configuración del router
  router: {
    options: {
      base: envConfig.appBaseDir || '/',
    },
  },
});
