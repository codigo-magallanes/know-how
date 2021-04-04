# JavaScript: Promise.resolve( ) y Promise.reject( )

## Uso

_Promise.resolve()_ y _Promise.reject()_ son atajos para crear manualmente una promesa resuelta o rechazada respectivamente.

## Promise.resove()

 Esto puede ser útil a veces, por ejemplo para reducir un conjunto de funciones asíncronas a una cadena de promesas: ```Promise.resolve().then(func1).then(func2).then(func3);```

 Como parámetro puede recibir:

  + Promise.resolve(value);
  + Promise.resolve(promise);
  + Promise.resolve(thenable); 

<script src="https://gist.github.com/YoAmo/e25509cbdfc21672618f44057fec4b44.js"></script>

Esto se puede convertir en una función de composición reutilizable, que es común en la programación funcional:

<script src="https://gist.github.com/YoAmo/d4e7d300133a46383c656198469c4ec8.js"></script>

## Promise.reject()

La función estática Promise.reject retorna un objecto Promise que es rechazado. Para fines de depuración y captura selectiva de error, se suele pasar como parámetro un  instanceof Error.

## Ejemplo básico

``` sh
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// expected output: Error: fail

Promise.resolve(4).then(resolved => console.log(resolved))
//  expected output: 4
```