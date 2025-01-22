# Data Fetching with Tanstack Query
Sending HTTP Requests With Ease

## Introduction
- **What** is Tanstack Query & **Why** Would You Use It?
- **Fetching** & **Mutating** Data
- **Configuring** Tanstack Query
- **Advanced Concepts:** Cache Invalidation, Optimistic Updating & More

## Project Setup & Overview
Resources:
* [CodeSandbox](https://codesandbox.io/p/devbox/react-query-start-md9z2g?file=%2Fsrc%2Fmain.jsx)
* [Github](https://github.com/academind/react-complete-guide-course-resources/blob/main/attachments/24%20React%20Query/starting-project.zip)

## Using Tanstack Query

#### What is Tanstack Query?
A library that helps with sending HTTP requests & keeping your fontend UI in sync.

* TanStack Query Does **Not Send HTTP** Requests. At least **not on its own**
* You have to write code that sends the actual HTTP request
* Tanstack Query then manages the **data, errors, caching & much more!**

#### Tanstack Query Caches Query Data
1. ```fetchData()``` is executed & HTTP request is sent 
```
useQuery({
    queryKey: ['some-key'],
    queryFn: fetchData
});
```

2. Data is **received**
```
{
    id: 'd1',
    title: 'Some data'
}
```
- Cached data is reused & shown on the screen immediatly
- Cached (stored) by Tanstack Query

#### No QueryClient set, use QueryClientProvider to set one
1. In App component wrap the **RouterProvider** with TanStack Query
2. import ```import { QueryClientProvider, QueryClient } from "@tanstack/react-query";```
3. configure ```const queryClient = new QueryClient();```
4. Wrap **RouterProvider**
```
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
```

## Cache & Stale Data
```staleTime``` - Time that React send behind the screen requests to get updated data if found data in your cache.
```gcTime``` - Garbage Collection Time - Control how long the data and the cache will be kept around / in the cache.