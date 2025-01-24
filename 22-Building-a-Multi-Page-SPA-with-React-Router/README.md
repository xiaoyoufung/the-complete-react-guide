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
Path => ```/products```
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
- ```<NavLink>```
- ```className``` props take a function
- in-line ```style``` also support
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