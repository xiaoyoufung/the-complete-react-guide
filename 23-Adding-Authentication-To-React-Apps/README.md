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
- Any client can send a request to backend that "tells" the backend that we previously were granted access