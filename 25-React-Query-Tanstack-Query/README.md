## Data Fetching with Tanstack Query
Sending HTTP Requests With Ease

#### Introduction
- **What** is Tanstack Query & **Why** Would You Use It?
- **Fetching** & **Mutating** Data
- **Configuring** Tanstack Query
- **Advanced Concepts:** Cache Invalidation, Optimistic Updating & More

#### Project Setup & Overview
Resources:
* [CodeSandbox](https://codesandbox.io/p/devbox/react-query-start-md9z2g?file=%2Fsrc%2Fmain.jsx)
* [Github](https://github.com/academind/react-complete-guide-course-resources/blob/main/attachments/24%20React%20Query/starting-project.zip)

#### What is Tanstack Query?
A library that helps with sending HTTP requests & keeping your fontend UI in sync.

* TanStack Query Does **Not Send HTTP** Requests. At least **not on its own**
* You have to write code that sends the actual HTTP request
* Tanstack Query then manages the **data, errors, caching & much more!**

#### Tanstack Query Caches Query Data
```
useQuery({
    queryKey: ['some-key'],
    queryFn: fetchData
});
```
* ```fetchData()``` is executed & HTTP request is sent