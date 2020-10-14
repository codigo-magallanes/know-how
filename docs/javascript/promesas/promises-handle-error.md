## JavaScript: Handle errors in Promise

### Example

 This code executes a _.map()_ method on an array with three time notations in ms.

 For each of the values in the array it triggers the __timeOut()__ function which returns a Promise.
 The _Promise_ is _rejected()_ if t === 2000 and _resolved()_ in any other case.
 Each _reject()_ and _resolve()_ is saved in a new array (promises)

``` js
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t === 2000) {
        reject(`Rejected in ${t}`);
      } else {
        resolve(`Completed in ${t}`);
      }
    }, t);
  });
};

const durations = [1000, 2000, 3000];

promises = durations.map((duration) => {
  return timeOut(duration).catch((e) => e); // Handling the error for each promise.
});
```

This code is used in this [example code](/code/promise_all.html)