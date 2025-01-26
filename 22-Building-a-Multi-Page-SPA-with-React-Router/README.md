## Introduction

**Single-Page Application Routing**
Multiple Pages In Single-Page Apps

- What & Why?
- Using **React Router**
- Data Fetching & Submission

## Routing: Multiple Pages in Single-Page Application

#### What is a Routing?

Different URL paths load different content on the screen

#### Building SPAs

When building complex user interfaces, we typically build **Single Page Application (SPAs)**

- Send only **One initial HTML requests & response**
- Page (URL) changes are then handled by client-side React code
- Visible content is changed without fetching a new HTML file

## Setup React Router

1. Define the routes

- Which routes/ URL/ path we want to support

2. Activate out router and load the route definitions that we defined
3. Have all the components that we want to load, provide navigation between pages

## Defining Routes

The path after the domain name
For ex: https://ww.example.com/products
Path => `/products`

```
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home";

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

## Navigating between Pages with Links

- Navigate to another page without refreshing page.

```
import { Link } from 'react-router-dom';

function HomePage() {
    return (<>
        <h1>My Home Page</h1>
        <p>Go to <Link to="/products">the list of products</Link>.</p>
    </>);
}

export default HomePage;
```

## Working with Navigation Links (NavLink)

- `<NavLink>`
- `className` props take a function
- in-line `style` also support

```
 <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                            // style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
                            end
                        >
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                        >Products</NavLink>
                    </li>
                </ul>
            </nav>
```

## Data Fetching with a loader()

`loader()`

- Property that wants a function
- This function will be execute by React-router when you're about to visit that route.
- `useLoaderData()` Can only used in a component on the same level or lower level of your fetching data

## Where Should loader() Code Be Stored?

- Stored in the component page

```
export async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      // ...
    } else {
      const resData = await response.json();
      return resData.events;
    }
}
```

## When Are `loader()` Functions Executed?

- The loader will be called right when we start navigating to that page.
- Before we actually go there.
- React router will wait untill the `loader` finish, before render the page with the fetched data.

## Reflecting The Current Navigation State in the UI

`useNavigation` - hook

- Check current route transition state

```
const navigation = useNavigation();

// using
<main>
    {navigation.state === "loading" && <p>Loading...</p>}
    <Outlet />
</main>
```
## Which Kind Of Code Goes Into loaders()?
- loader execute in the browser, not on server.
- For ex: Any browser Api, localstorage, cookies
- Can't use **React Hook**
- loader function is not a React component

## Working with action() Functions
- similar to loader()

## Work with `useFetcher()`
- whenever you want to trigger an action, loader without navigating to a page that loader bolongs / to the page action belongs.

## Deferring Data Fetching with `defer()`
- defer loading and tell React router that we want to render a component already, eventhough the data is not fully there yet...