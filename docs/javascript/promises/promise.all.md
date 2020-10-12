## JavaScript: Promise.all

One interesting thing about Promise.all is that the order of the promises is maintained. The first promise in the array will get resolved to the first element of the output array, the second promise will be a second element in the output array and so on.

### Sintaxis

###  Promise errors

If one of the promises fails, the Promise.all gets rejected.

For some use cases, you don’t need that. You need to execute all the promises even if some have failed, or maybe you can handle the failed promises later.

``` sh
const durations = [1000, 2000, 3000]

promises = durations.map((duration) => {
  return timeOut(duration).catch(e => e) // Handling the error for each promise.
})

Promise.all(promises)
  .then(response => console.log(response)) // ["Completed in 1000", "Rejected in 2000", "Completed in 3000"]
  .catch(error => console.log(`Error in executing ${error}`))
```

[code example](/code/promise_all.html)