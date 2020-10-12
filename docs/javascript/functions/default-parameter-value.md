## JavaScript: Paremeter default value (ECMAScript 6)

### Default value for a parameter

 From ECMAScript 6 it is possible to declare a default value for a parameter when a function is declared:

``` js
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
```