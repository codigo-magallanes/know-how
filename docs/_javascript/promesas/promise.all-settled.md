## JavaScript: Promise.allSettled()

Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

``` js
{status:"fulfilled", value:result} for successful responses,
{status:"rejected", reason:error} for errors.
```

For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

### Example Code

``` js
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
  ```
  The output expected is:

  ``` js
  [
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
```
 ### Resources

  + [Promise API](https://javascript.info/promise-api)