# ExpressJS Auth

Let's learn about security!!


## GOAL
- [x] basic web API
- [x] JWT middleware
- [x] cookie store
- [ ] token refresh


## Frontend

Assuming that you use react

```js
// Login + get cookie
fetch("http://localhost:8080/login", {
   method: "POST",
   credentials: "include",
   header: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
   },
   body: JSON.stringify({
      username: 'username',
      password: 'pass'
   })
})
.then((res) => {
   console.log(res.json());
});

// Get secret
fetch("http://localhost:8080/secret", {
   method: "GET",
   credentials: "include",
})
.then((res) => {
   console.log(res.json());
});
```
