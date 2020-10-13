 ## JavaScript: Promises

 ### Sintaxis

 The sintaxis of a _Promise_ has two parts. First is the declaration of the _Promise_ which is done with the ```new Promise((resolve,reject) => {})``` code:

 ``` js
 var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

__resolve()__ and __reject()__ are returned so we can work with that data when the _Promise()_ is called.

This is the second part of the code when using _Promises_.
The _resolve()_ is sent to the __.then()__, and the _reject()_ is handled by the __.catch()__

``` js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
})
.catch((err) => {
  console.log(err); // Error: "It broke"
});
```

### More about Promises

 + [Promise.all()](/docs/javascript/promises/promise.all.md)
 + [Promise.allSettled()](/docs/javascript/promises/promise.all-settled.md)
 + [Promise.race](/docs/javascript/promises/promise.race.md)
 + [Promises: handle errors](/docs/javascript/promises/promises-handle-error.md)