# Módulos JavaScript

## Export - Import

 Para exportar un objeto o función por defecto en un módulo:

 ``` js
export default function(ctx) {
  console.log(ctx)
}
 ```

Para importar esta función, podemos elegir un nombre para ella y guardarla con:

 ``` js
import miFuncion from './modulo.js'
 ```

### Renombrar objetos importados y exportados

 También se puede renombrar los objetos exportados e importados.

 A la hora de exportarlos con...

 ``` js
 export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};
```

A la hora de importarlos...

```js
import {function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';
```

### Recuperar todos los objetos dentro de un nuevo objeto

Recupera todos los objetos del _module.js_ y los almacena como elementos del objeto _Module_.


``` js
import * as Module from './modules/module.js';
```

### Exportar objetos de diferentes módulos

 Se puede crear un archivo desde el que se exporten funciones, clases o variables de otros módulos. De esta manera, desde otro archivo podemos cargar todos los objetos necesarios de una vez:

 ``` shapes.js
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
```

Luego...

``` js
import { Square, Circle, Triangle } from './modules/shapes.js';

```

 ## Recursos
 [mozilla developer](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos)