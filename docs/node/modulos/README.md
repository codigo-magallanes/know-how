# node: Módulos

## Export

Al final del código, en el módulo se exportan los datos y funciones con:

``` js
module.exports = { firstName, lastName }
```

## Import

Se puede importar los dos métodos en un objeto:

``` js
const person = require('./persons.js');

console.log(person.firstName)
console.log(person.lastName)
```