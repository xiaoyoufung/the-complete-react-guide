# Authentication
User Signup & Login

## Introduction
- **How Authentication Works** In React Apps
- **Implementing** User Authentication
- Adding Authentication **Persistence & Auto-Logout**

## How Authentication Works
- Authentication is needed if content should be **protected**
- ie. if content shouldn't be accessible by everyone

#### Getting Permission
1. Client (Browser) sending a **Request (with user credentials)** to the Server (Backend)
2. Server (Backend) validate those credentials
3. If credentials are valid, the server send back a response that basically gives us permission to access certain protected resources

##### Response (access grainted: yes/no)
- A "yes" alone is **not enough** to access protected resources / API endpoints

##### Client and server can't just exchange a "Yes"
- Any client can send a request to backend that "tells" the backend that we previously were granted access

#### Server-side Sessions
- Store unique identifier on server, send same identifier to client.
- Client send indentifier with request to protected resources.
- Server can check if identifier is valid.

#### Authentication Tokens
- Create (but not store) "permission" token on server & send it to the client
- Client attaches token to future requests for protected resources.
- Server can then verify attached token.

## Query Parameters
##### `localhost:3000/auth?mode=signup` => ?mode=signup
- We can directly link to a page, just with the different UI.

##### `useSearchParams` 
- Hook that get currently set query params
- `const [searchParams, setSearchParams] = useSearchParams()`
- first element => object give access to current set query params.
- second element => function allow us to update the query params.

```
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
```

- `.get` method for retrieve the value for specific query params

## Adding User Login
- get auth token from the response
- then store auth token in the `localStorage`
```
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
```

## Attaching Auth Tokens to Outgoing Requests
- get token from `getAuthTokens()` function.
- then send the token with the request to the server.
```
  const token = getAuthTokens();
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(eventData),
  });
```

## Adding User Logout
- remove auth token from the `localStorage`
```
export function action(){
    localStorage.removeItem('token');
    return redirect('/');
}
```