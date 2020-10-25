# Math.random()

## Uso

 Devuelve un número aleatorio entre 0 (incluido) y 1 (excluido)

## Ejemplos

 ### Máximo y mínimo
  Retorna un entero aleatorio entre min (incluido) y max (excluido)
  ¡Usando Math.round() te dará una distribución no-uniforme!

 

``` js
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let numAleatorio = getRandomInt(1, 11)
```

## Recursos

[mozilla developer](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random)
