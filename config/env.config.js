const production = {
  appName: 'Pokémon App', // Nombre de la aplicación html - title
  appBaseDir: '/pokemon', // Directorio de despliegue de la aplicación
  rootUrl: '../../../', // Url del servidor del api
  baseUrl: '../../../',
  themeColor: '#000',
  description: 'Aplicación para consultar información sobre pokémon'
}
const development = {
  ...production, // traer todas las keys de la const de production,
  rootUrl: `http://localhost:3000/`,
  baseUrl: `http://localhost:3000${production.appBaseDir}/`
}

export default {
  development,
  production
}
