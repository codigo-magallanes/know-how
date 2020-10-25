# Arrays: Métodos
## .includes()
 Busca por una cadena dentro de otra cadena. Devuelve '_true_' si encuentra la cadena.

 ``` js
let url = "https//www.w3schools/examples.";
var n = url.includes("w3schools");
// devuelve: true
```

Admite un parámetro que permite indicar la posición a partir de la cual hacer la búsqueda:

``` js
let url = "https//www.w3schools/examples.";
var n = url.includes("w3schools", 13);
// devuelve: false
```