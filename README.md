# pokemon
# Ver y usar aplicación desplegada en la web, tipo producción:
https://vgualdron.github.io/pokemon

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
, es para ver mas pokomones, al hacer click en ese link, se consultan los siguientes 20 pokemones pero se agregan a la lista mostrandolos todos y no solo los que se acaban de consultar, es decir se va creciendo la lista de 20 en 20 hasta que ya se carguen todos los pokemones, te neindo en cuenta que estos pokemones se van consultando al hacer click en el link "See more".

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
