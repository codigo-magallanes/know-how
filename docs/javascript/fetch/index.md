# fetch()

 + Obtiene datos de una URL.
 + No sirve para archivos locales.

 ## Métodos

  Los datos se devuelven en un objeto donde el texto se obtiene llamando al método __.text()__. Si se trata de datos en formato '_json_' se llama al método __.json()__.

## Ejemplos

En este ejemplo se recuperan datos, primero con una __función asíncrona__ y se genera una lista de enlaces. Esa lista se llama desde un método _map()_ y el _array_ se descarga con un __Promise.all__:

``` js
const fetchPokemon = async () => {
    const initial = await fetch('https://pokeapi.co/api/v2/type/1')
    const initialJson = await initial.json()
    //console.log(initialJson.pokemon) // data array

    const detailsData = initialJson.pokemon.map(async i => {
        const preFetchData = await fetch(i.pokemon.url)
        return preFetchData.json()
    })

    // uncomment this code if you want to see how it looks await Promise.all(detailsData)
    // const response = await Promise.all(detailsData)
    // console.log(response)
  const payload = (await Promise.all(detailsData)).map(data => ({
        name: data.name,
        image: data.sprites['front_default']
    }))

    let string = JSON.stringify(payload)

  console.log(payload)
}

fetchPokemon()
```

## Recursos
[hackernoon](https://hackernoon.com/how-to-fetch-date-with-promiseall-and-async-await-fp163u2w)