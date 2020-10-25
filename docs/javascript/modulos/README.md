## JavaScript: Módulos

1. Modules always use strict, by default. Therefore, assigning a value to an undeclared variable will give an error.

1. They also have module-level scope. So they cannot use values from other scripts unless they import them first. Also relative order of scripts is maintained: scripts that go first in the document, execute first.

1. If the same module is imported into multiple other places, its code is executed only the first time, then exports are given to all importers. So exports are generated, and then they are shared between importers, so if something changes an objetc imported from a module the other modules will see that change.

1. In a module, top-level this is undefined.

1. Module scripts are always deferred, same effect as defer attribute for both external and inline scripts.

1. In the browser, import must get either a relative or absolute URL. Modules without any path are called “bare” modules. Such modules are not allowed in import.

1. For module scripts, async load works on inline scripts as well.

  ``` html
    <!-- all dependencies are fetched (analytics.js), and the script runs -->
    <!-- doesn't wait for the document or other <script> tags -->
    <script async type="module">
      import {counter} from './analytics.js';

      counter.count();
    </script>
  ```

1. If a module script is fetched from another origin, the remote server must supply a header Access-Control-Allow-Origin allowing the fetch.

  ``` html
    <!-- another-site.com must supply Access-Control-Allow-Origin -->
    <!-- otherwise, the script won't execute -->
    <script type="module" src="http://another-site.com/their.js"></script>
  ```

 + More info about this features [here](https://javascript.info/modules-intro#core-module-features)

### Syntaxis

To be able to __export__ and __import__ code the _script_ must be of the _module_ type:

``` js
<script type="module" src="./main.js"></script>

// or

<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>
```

### Import Meta

 It returns info about the actual 'module' such as the '_url_'.

 ``` js
<script type="module">
  alert(import.meta.url); // script url (url of the html page for an inline script)
</script>
 ```

### Export a variable or constant

``` js
export let var = "variable"
export const con = "constant"
```

### Export a function

``` js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

To import it:

``` js
import {sayHi} from './sayHi.js';
```

### Export Default

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
 Se accede a las variables o funciones con:

 ``` js
 Module.example()
 ```

### Exportar objetos de diferentes módulos

 Se puede crear un archivo desde el que se exporten funciones, clases o variables de otros módulos. De esta manera, desde otro archivo podemos cargar todos los objetos necesarios de una vez:

 ``` js
 // shapes.js
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
```

Luego...

``` js
import { Square, Circle, Triangle } from './modules/shapes.js';

```
 ### Dynamic Modules Imports

  + [Dynamic Modules Imports](https://javascript.info/modules-dynamic-imports)
 ### Recursos
 [mozilla developer](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos)