# JavaScript: Promesas

## Indice

 + [Más sobre promesas con ejemplos](./promesas.md)
 + [Promise.all()](/docs/javascript/promises/promise.all.md)
 + [Promise.allSettled()](/docs/javascript/promises/promise.all-settled.md)
 + [Promise.race](/docs/javascript/promises/promise.race.md)
 + [Promises: handle errors](/docs/javascript/promises/promises-handle-error.md)

## Sintaxis

  Una promesa viene a ser una función que devuelve un _objeto_ si se dan ciertas condiciones y otro _objeto_ distinto si no se cumplen esas condiciones.
  
  Las promesas necesitan declararse primero y luego se consumen. Existen, sin embargo, promesas ya predeclaradas que se pueden utilizar directamente en JavaScript como __fetch()__.

### Declaración

  Se declara con ```new Promise()``` y toma como parámetro una función. Esta función determina las condiciones para que la promesa se resuelva satisfactoriamente (resolve) o no (reject).

 ``` js
 var promise = new Promise(function(resolve, reject) {
  // let condiciones = ...

  if (/* condiciones */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

## Consumir una Promesa

La _Promesa_ devuelve __resolve()__ o __reject()__  y este resultado se puede recoger con __.then()__ si es aceptada o con __.catch()__ si es rechazada.

``` js
promise
  .then(function(result) {
    console.log(result); // "Stuff worked!"
  })
  .catch((err) => {
    console.log(err); // Error: "It broke"
  });
```

Las promesas también aceptan un método __.finally()__ que se ejecuta al final, pero que no recibe el resultado de la promesa.

``` js
const obj = {}

Promise.resolve(obj)
    .then(data => {
        const obj = { ...data }
        obj['uno'] = 'uno'
        return obj
    })
    .then(obj => {
        obj['dos'] = 'dos'
        return obj
    })
    .then(obj => {
        console.log('then: ',obj) // {uno: "uno", dos: "dos"}
        return obj
    })
    .finally(console.log('finally: ',obj)) // {}

console.log(obj) // {}
```

 En este ejemplo _.finally()_ devuelve el objeto inicial (*{}*), igual que el _console.log()_ del final.

  - [Ver código en ejecución](/code/promesas/promise-resolve-then-finally.html)
  - [Ver código](/code/promesas/promise-resolve-then-finally.html)

### Más info
 - [Mozilla developer: .finally()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/finally)

## Uso de parámetros con _Promesas_

 El constructor _new Promise()_ solo acepta como parámetro la función que determina el resultado satisactorio o no de la _Promesa_.

 Por lo tanto, para pasarle un _parámetro_ envolvemos al constructor __new Promise()__ en una función que es la que recibe el _parámetro_ y devuelve la _promesa_:

``` sh
const espera = ms => new Promise(resuelve => setTimeout(resuelve, ms));
```

Que viene a ser lo mismo que:

``` sh
function espera(ms) {
  return new Promise(resuelve => setTimeout(resuelve, ms))
}
```
 Esta promesa se consume con:

 ``` sh
espera(10000).then(() => diAlgo("10 segundos")).catch(falloCallback);
 ```

## Recursos

 + [Mozilla developer: Guía de Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas)