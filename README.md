# App web Pokemon con Vue3, mas abajo tengo una vesión usando vue2 con Vuex
# Ver y usar aplicación desplegada en la web, tipo producción:
https://pagoscesar.com/

# Repositorio
https://github.com/vgualdron/pokemon-v3

## Tecnologías usadas
Usé estas tecnologías para realizar una entrega muy ligera, ya que estas tecnologías ayudas a el desarrollo rapido.

* Vue.js 3: Framework progresivo de JavaScript para construir interfaces interactivas y dinámicas con reactividad y composición modular.
* Nuxt 3: Framework basado en Vue 3 para la creación de aplicaciones universales (SSR/SSG), optimizado para el rendimiento y la facilidad de desarrollo.
* Bootstrap Vue: Librería de componentes de interfaz de usuario basada en Bootstrap y Vue.js, que facilita la creación de aplicaciones con una estética moderna y responsiva.
* Pinia: Librería de gestión de estado para Vue 3, ofreciendo una API sencilla, reactiva y mejor integración con el ecosistema Vue.
* Axios: Cliente HTTP basado en promesas para hacer solicitudes API desde el navegador o Node.js, simplificando la gestión de datos remotos.
* Vite: Herramienta de construcción ultrarrápida que optimiza el desarrollo con recarga instantánea, transpilación eficiente y construcción de producción con esbuild.
* Vitest (Unit test): Framework de pruebas para Vue.js y aplicaciones JavaScript, diseñado para ofrecer una integración rápida y eficiente con características modernas como HMR.
* Integracion con git y compilado y despliegue con pipeline configurado para que se compile en github y se despligue en un servidor externo.
* Secrets de variables para darle seguridad al despligue en el servidor externo.
* Se pasa el resultado del compilado por FTP al servido externo. (Revisar .github/workflows/deployment.yml)
https://github.com/vgualdron/pokemon-v3/blob/master/.github/workflows/deployment.yml

## Descripción
La primera pantalla que se muestra al ingresar a la aplicación es la de Welcome
y de ahí al oprimir el botón de "Get started"
se muestra la pantalla principal "Home".

Al entrar a la pantalla de Home se consulta los primeros 20 pokemones,
y al bajar al final de la lista de pokemones la app detecta que se acabó la lista de pokemones
y actumaticamente hace consulta de 20 pokemones más que se agregan a la lista mostrandolos todos y no solo los que se acaban de consultar,
es decir se va creciendo la lista de 20 en 20 hasta que ya se carguen todos los pokemones, teniendo en cuenta que estos pokemones se van consultando acutomaticamente, como ya expliqué.
Esto con el fin de soportar gran cantidad de data, pero consultarla por bloques de 20.

Para ver los detalles de cada pokemon haciendo click en el contenedor respectivo, saldrá un modal con los datos y la imagen del pokemon,
tambien hay dos botones, uno para compartir esa información del pokemon, que copia la info en el portapapeles y el otro botón es para agregar o quitar de favoritos.

Se puede filtar por nombre en la lista de los pokemones cargados, tanto en la lista de todos, como en la lista de favoritos.

Cuando se muestra la lista de favoritos y se desmarcan todos los favoritos, es decir se queda vacia la lista de favoritos, entonces se muestra automaticamente la lista de todos los pokemones en la opción "All".

Para el loading se aplicó un efecto css para que se mostrara como cargando. Intencionalmente apliqué un retardo pequeño (delay) en las consultas a los endpoints para que se muestre como funciona el loading.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run genarate
$ npm run start

# generate static project
$ npm run generate
```
-------------------------------------------------------------------------------------

# App web Pokemon Vue2
# Ver y usar aplicación desplegada en la web, tipo producción:
https://vgualdron.github.io/pokemon

# Repositorio
https://github.com/vgualdron/pokemon

## Tecnologías usadas
Usé estas tecnologías para realizar una entrega muy ligera, ya que estas tecnologías ayudas a el desarrollo rapido.

* Vuejs
* Nuxt
* Bootstrap vue
* Vuex
* Axios

## Descripción
La primera pantalla que se muestra al ingresar a la aplicación es la de Welcome y de ahí al oprimir el botón de "Get started"
se muestra la pantalla principal "Home".

Al entrar a la pantalla de Home se consulta los primeros 20 pokemones, y al bajar al final de la lista de pokemones hay un link que dice "See more"
, es para ver mas pokomones, al hacer click en ese link, se consultan los siguientes 20 pokemones pero se agregan a la lista mostrandolos todos
y no solo los que se acaban de consultar, es decir se va creciendo la lista de 20 en 20 hasta que ya se carguen todos los pokemones,
teniendo en cuenta que estos pokemones se van consultando al hacer click en el link "See more".

Se ver los detalles de cada pokemon haciendo click en el contenedor respectivo, saldrá un modal con los datos y la imagen del pokemon, tambien hay dos botones, uno para compartir esa infromación del pokemon que copia la info en el portapapeles y el otro botón es para agregar o quitar de favoritos.

Se puede filtar por nombre en la lista de los pokemones cargados, tanto en la lista de todos, como en la lista de favoritos.

Cuando se muestra la lista de favoritos y se desmarcan todos los favoritos, es decir se queda vacia la lista de favoritos, entonces se muestra automaticamente la lista de todos los pokemones en la opción "All".

Para el loading se aplicó un efecto css para que se mostrara como cargando. Intencionalmente apliqué un retardo pequeño (delay) en las consultas a los endpoints para que se muestre como funciona el loading.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
