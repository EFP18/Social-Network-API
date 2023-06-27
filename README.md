# Social Network API

![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

https://opensource.org/licenses/Apache-2.0

### Video Walk-through:

https://drive.google.com/file/d/1L763RgP0Pl-fbfj7zFm7gQ0AQSiEiNsm/view

### GitHub:

https://github.com/EFP18/Social-Network-API

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

### Description

This is a back-end social network API, in which users can share their thoughts, add and remove friends, react to their friend's thoughts, and much more. This project uses `Express.js` for routing, the `Mongoose ODM`, and `MongoDB` database. Other technologies used are `Javascipt`, `Node.js`, `Insomnia`.

### Installation

In order to use this repository, you will have to clone it and start it up locally. In order to use the repository, your local machine will need to have `Node.js` and `MongoDB` installed. Lastly, once cloned locally, you will have to run the following command in the terminal to install the necessary dependencies: `npm i`.

### Usage

After installation, type `npm start` in your terminal to invoke the application. You can use `Insomnia` to test the API routes and create seed data.

### Tests

- USER

  - Create a new user: `POST /api/users`

  - Get all users: `GET /api/users`

  - Get a single user by id: `GET /api/users/:userId`

  - Update a user by its id: `PUT /api/users/:userId`

  - Delete a user by its id: `DELETE /api/user/:userId`

---

- FRIEND

  - Add a new friend to a user's friend list:
    `POST /api/users/:userId/friends/:friendId`
  - Delete a friend from a user's friend list:
    `DELETE /api/users/:userId/friends/:friendId`

---

- THOUGHT

  - Create a new thought: `POST /api/thought/`
  - Get all thoughts: `GET /api/thought/`
  - Get a single thought by its id: `GET /api/thought/:thoughtId`
  - Update a thought by its id: `PUT /api/thought/:thoughtId`
  - Delete a thought by its id: `DELETE /api/thought/:thoughtId`

---

- REACTION

  - Create a reaction: `POST /api/thought/:thoughtId/reactions`
  - Delete a reaction by the reactionId: `DELETE /api/thought/:thoughtId/reactions/:reactionId `

### License

Apache License 2.0

### Questions

- GitHub: http://github.com/https://github.com/EFP18
- Email: ester.p18@hotmail.com
