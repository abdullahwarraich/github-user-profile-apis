# Api to get user github info

### Prerequisites

1. `NodeJS` preferred version 10 or greater.

### Installing

1. Clone the project.
2. Run  ```yarn install``` or ```npm install``` root directory to install node dependencies.
3. Run  ```yarn run dev``` or ```npm run dev``` to start dev server.
4. Listen to port ```8080```.
5. Server status check ```http://localhost:8080/```.

### Api's are deployed to heroku 
- https://quiet-wave-06400.herokuapp.com

### Api endpoint are

<details>
<summary>GET /user/:userName</summary>
Github user name is passed to get public info of user
</details>

<details>
<summary>GET /user/:userName/gists</summary>
Github user name is passed to get gists of user
</details>

<details>
<summary>GET /user/:userName/orgs</summary>
Github user name is passed to get organizations of user
</details>

### Author

* **Abdullah Warraich** 