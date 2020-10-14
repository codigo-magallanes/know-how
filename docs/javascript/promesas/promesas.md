# Javascript: Ejemplos de promesas

## Declaración y consumo básico

 Al crear una promesa, se crea una función que toma dos parámetros. El primero se ejecuta al resolverse la _promesa_ de manera satisfactoria y el segundo al resolverse de forma no deseada. Estos resultados se pueden recuperar con otra función en un _.then()_.

``` js
var caraCruz = new Promise(function(resolve, reject) {
    let numAleatorio = Math.floor(Math.random() * 11;

      if (numAleatorio % 2 == 0) {
          resolve(numAleatorio);
      } else {
          reject(numAleatorio);
      }
  });

caraCruz.then((par) => {
      alert( `El número es par: ${par}` );
    }, (impar) => {
      alert( `El número es impar: ${impar}` );
    }
  );
```

## .then(), .catch(), .finally()

 Son diferentes opciones a encadenar a una _promesa_.

 + _.then()_, recibe el valor de la _promesa_ cuando se resuelve correctamente (resolve).
 + _.catch()_, recibe el valor de la _promesa_ cuando hay un error (reject).
 + _.finally()_, se ejecuta al final, independientemente de si se resuelve correctamente o no.


``` js
var t = 10;
var p = new Promise(function(resolve, reject) {

   if (t===1) {
      resolve('resolved');
   } else {
      reject('rejected');
   }
});

p.then((res)=>{
   console.log(res);
}).catch((err)=>{
   console.log(err.message);
}).finally(()=>{
   console.log('Promise setteled');
   // regardless of resolve or reject above line will execute
});
```

 Se pueden encadenar tantos _.then()_ como se quiera antes de llamar a _.catch()_ ya que éste aún recogerá el error si se produce:

 ``` js
 var t = Math.random()*10;
t = Math.floor(t);
var p = new Promise(function(resolve, reject) {

   if (t%2 === 0) {
      resolve(t);
   } else {
      reject(t);
   }
});

p.then((res)=>{
   console.log('Even number generated');
   return res;
}).then((res)=>{
   console.log('The number is '+ res);
}).catch((err)=>{
   console.log('Odd number generated '+ err);
});

// Even number generated
// The number is 4
```

## Promise.all()

 It is a promise that waits for a list of promises to be resolved.
 It returns a value that can be saved in a _variable_, or it can be passed to a next function within _.then() _.

 En el caso de utilizar '_fetch()_' para recuperar datos de varias fuentes, se necesita de dos instancias, una para recuperar los datos en 'crudo' y otra para extraer de cada solicitud el texto o el JSON.

 ``` js
 Promise.all([
	fetch('https://jsonplaceholder.typicode.com/posts'),
	fetch('https://jsonplaceholder.typicode.com/users')
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.log(data);
}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});
```

## Ejemplos

### Sin necesidad de esperar una respuesta

Podemos crear una _promesa_ simple para luego encadenar funciones que vayan modificando los datos generados a cada paso.

``` js
var promise = new Promise(function(resolve, reject) {
    resolve('Thanks for visiting w3schools.');
})
 
promise
    .then(function(successResult) {
       //the success handler function is invoked
        console.log(successResult);
    }, function(errorResult) {
        console.log(errorResult);
    })
```

### Uso de XMLHttpRequest con Promises
 Una manera de usar __XMLHttpRequest__ sin tener que lidiar con 'ese código' tan extenso, es envolviéndolo en una _promesa_:

 ``` js
 function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}
```
Ahora podemos recuperar la '_url_' con:

``` js
get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
})
```

## Recursos

 + [Mozilla developer: Guía de promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas)
 + [Google developers (es)](https://developers.google.com/web/fundamentals/primers/promises?hl=es)
 + [anjandutta.com](https://anjandutta.com/promise-in-javascript-must-know-series-part-2/)
 + [w3schools UK](https://w3schools.uk/javascript-promise/)
 + [gomakethings.com](https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/)