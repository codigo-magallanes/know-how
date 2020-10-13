## JavaScript: Promise.race()

 Similar to Promise.all, but once the first promise is _resolved()_ or _rejectec()_ takes its value as output.

### Sintaxis

### Example Code

The first promise will be the first one to resolve() so the alert will receive its value as an input (1)

``` js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

 ### Resources

  + [Promise API](https://javascript.info/promise-api)