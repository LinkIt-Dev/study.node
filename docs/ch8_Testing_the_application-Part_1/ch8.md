# 8 Testing the application - Part 1

## 8.1 Introduction to Mocha

link
https://mochajs.org/

- TDD style;
- BDD style;
- Code coverage HTML report;
- Customized test reports;
- Asynchronous test support;
- Easily integrated with the modules: should, assert and chai.

libs/config.js -> libs/config.development.js

libs/config.test.js
```js
module.exports = {
  database: "ntask_test",
  username: "ntaskman",
  password: "ntaskman",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: "Nta$K-AP1",
  jwtSession: {session: false}
};

```

libs/config.js
```js
module.exports = app => {
  const env = process.env.NODE_ENV;

  if (env) {
    return require(`./config.${env}.js`);
  }
  return require("./config.develop.js");
}
```

- babel-register: to run ES6 codes;
- mocha: to run the tests;
- chai to write BDD tests;
- supertest to do some requests in the API;

```
$ npm install babel-register@6.5.2 mocha@2.4.5 chai@3.5.0 supertest@1.2.0 --save-dev
```

package.json
```json
{
  "name": "ntask-api",
  "version": "1.0.0",
  "description": "Node Task API",
  "main": "index.js",
  "scripts": {
    "start": "babel-node index.js"
  },
  "author": "GimYoungPhil",
  "dependencies": {
    "babel-preset-es2015": "^6.6.0",
    "babel-register": "^6.6.5",
    "bcrypt": "^0.8.5",
    "body-parser": "^1.15.0",
    "consign": "^0.1.2",
    "express": "^4.13.4",
    "jwt-simple": "^0.4.1",
    "passport": "^0.3.2",
    "passport-jwt": "^2.0.0",
    "sequelize": "^3.19.3",
    "sqlite3": "^3.1.1"
  },
  "devDependencies": {
    "babel-cli": "^6.6.5",
    "chai": "^3.5.0",
    "mocha": "^2.4.5",
    "supertest": "^1.2.0"
  }
}
```

index.js
```js
import express from "express";
import consign from "consign";

const app = express();

consign({verbose: false})
  .include("libs/config.js")
  .then("db.js")
  .then("auth.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

module.exports = app;
```

libs/boot.js
```js
module.exports = app => {

  if (process.env.NODE_ENV !== "test") {
    const PORT = app.get("port");

    app.db.sequelize.sync().done(() => {
      app.listen(PORT, () => {
        console.log(`NTask API - PORT ${PORT}`);
      });
    });
  }

};
```
