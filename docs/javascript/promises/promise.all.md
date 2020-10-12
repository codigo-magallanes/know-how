## JavaScript: Promise.all

Promise.all() takes an **iterable method** as a parameter.

**Built-in iterables**:

- String
- Array
- TypedArray
- Map
- Set

These are all built-in iterables, because each of their prototype objects implements an @@iterator method.

### Returned Value

Una Promise se cumplirá cuando todas las promesas del argumento iterable hayan sido cumplidas, o bien se rechazará cuando alguna de ellas se rechace.

One interesting thing about Promise.all is that the order of the promises is maintained. The first promise in the array will get resolved to the first element of the output array, the second promise will be a second element in the output array and so on.

### Sintaxis

```js
Promise.all(iterator);
```

### Promise errors

If one of the promises fails, the Promise.all gets rejected.

For some use cases, you don’t need that. You need to execute all the promises even if some have failed, or maybe you can handle the failed promises later.

```js
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

Promise.all(promises)
  .then((response) => console.log(response)) // ["Completed in 1000", "Rejected in 2000", "Completed in 3000"]
  .catch((error) => console.log(`Error in executing ${error}`));
```

### Bulk operations in groups with Promise.all

This code takes 100 users from a larger list and sends a task for them with the _triggerMailForUser()_ async fuction. Each of these tasks are saved in an array with a _.map()_ method.
This array, with the 100 tasks is send to a __Promise.all()__ that needs to be finished before repeating the process with other 100 users (await).

``` js
// Async function to send mail to a list of users.
const sendMailForUsers = async (users) => {
  const usersLength = users.length
  
  for (let i = 0; i < usersLength; i += 100) { 
    const requests = users.slice(i, i + 100).map((user) => { // The batch size is 100. We are processing in a set of 100 users.
      return triggerMailForUser(user) // Async function to send the mail.
       .catch(e => console.log(`Error in sending email for ${user} - ${e}`)) // Catch the error if something goes wrong. So that it won't block the loop.
    })
    
    // requests will have 100 or less pending promises. 
    // Promise.all will wait till all the promises got resolves and then take the next 100.
    await Promise.all(requests)
     .catch(e => console.log(`Error in sending email for the batch ${i} - ${e}`)) // Catch the error.
  }
}


sendMailForUsers(userLists)
```
### Agregate responses to an output

It adds the data extracted from different API Calls in one unified item.

``` js
// Function to fetch Github info of a user.
const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`)
  const githubInfo = await axios(url) // API call to get user info from Github.
  return {
    name: githubInfo.data.name,
    bio: githubInfo.data.bio,
    repos: githubInfo.data.public_repos
  }
}

// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) => {
  const requests = names.map((name) => {
    const url = `https://api.github.com/users/${name}`
    return fetchGithubInfo(url) // Async function that fetches the user info.
     .then((a) => {
      return a // Returns the user info.
      })
  })
  return Promise.all(requests) // Waiting for all the requests to get resolved.
}


fetchUserInfo(['sindresorhus', 'yyx990803', 'gaearon'])
 .then(a => console.log(JSON.stringify(a)))

/*
Output:
[{
  "name": "Sindre Sorhus",
  "bio": "Full-Time Open-Sourcerer ·· Maker ·· Into Swift and Node.js ",
  "repos": 996
}, {
  "name": "Evan You",
  "bio": "Creator of @vuejs, previously @meteor & @google",
  "repos": 151
}, {
  "name": "Dan Abramov",
  "bio": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
  "repos": 232
}]
*/
```

### Code Examples

- [code example](/code/promise_all.html)

### Resources
 - [freecodecamp.org: promise.all() in javascript](https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/)