# DOM: Eventos

## Añadir eventos a varios elementos
 Se puede añadir un evento a varios elementos jugando un poco con el código:

 ``` js
[document.querySelector('.a-class'), document.querySelector('.another-class')].forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})
 ```
 Usando bubbling, pero no estoy seguro del funcionamiento. Tengo que probar el código:

 ``` js
 const element1 = document.querySelector('.a-class')
const element2 = document.querySelector('.another-class')

body.addEventListener('click', event => {
  if (event.target !== element1 && event.target !== element2) {
    return
  }
  //handle click
}
```
 ### Recursos

 [Eventos en varios elementos](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/)