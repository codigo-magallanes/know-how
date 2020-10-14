# JavaScript: Promise.resolve() y Promise.reject()

## Uso

_Promise.resolve()_ y _Promise.reject()_ son atajos para crear manualmente una promesa resuelta o rechazada respectivamente. Esto puede ser útil a veces, por ejemplo para reducir un conjunto de funciones asíncronas a una cadena de promesas: ```Promise.resolve().then(func1).then(func2).then(func3);```

``` sh
const data = {}
Promise.resolve(data)
    .then(data => data['uno'] = 'uno')
    .then(data => console.log(data.dato))
    .then(data => console.log(data.dato1))
```
Esto se puede convertir en una función de composición reutilizable, que es común en la programación funcional: