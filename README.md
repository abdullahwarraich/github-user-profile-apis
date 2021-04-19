# Api's to get github user info

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

**Implementation discription**
  1. Used ExpressJs framework
  2. Divided the app into following architecture
    - Routes to manage endpoints 
    - Controllers for requests handling
    - Modules contain the bussiness logic
    - Services for third parties integerations
    - Untilities for helpers

**Attempted Optional Feature**
  1. TypeScript used
  2. Deployed on heroku


### Api endpoints are

<details>
<summary>GET /</summary>
Server status check is it in running form
</details>

<details>
<summary>GET /user/:userName</summary>
Github user name is passed to get public info of user
</details>

<details>
<summary>GET /user/:userName/repos</summary>
Github user name is passed to get public repos of user
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
