# 4 Building an API

## 4.1 Introduction to Express
• Robust routing;
• Easily integratable with a lot of template engines;
• Minimalist code;
• Works with middlewares concept;
• A huge list of 3rd-party middlewares to integrate;
• Content negotiation;
• Adopt standards and best practices of REST APIs;

## 4.2 Getting started the pilot project
• List of tasks;
• Create, delete and update a task;
• Create, delete and update a user data;
• User authentication;
• API documentation page;

프로젝트 폴더 생성, 초기화
```
$ mkdir ntask-api
$ cd ntask-api
$ npm init
```

package.json
```
{
  "name": "ntask-api",
  "version": "1.0.0",
  "description": "Task list API",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Caio Ribeiro Pereira",
  "license": "ISC"
}
```

babel 모듈 설치
```
$ npm install babel-cli@6.5.1 babel-preset-es2015@6.5.0 --save
$ npm install babel-cli babel-preset-es2015 --save-dev
```

.babelrc
```
{
  "presets": ["es2015"]
}
```

package.json
```
{
  "name": "ntask-api",
  "version": "1.0.0",
  "description": "Task list API",
  "main": "index.js",
  "scripts": {
    "start": "babel-node index.js"
  },
  "author": "Caio Ribeiro Pereira",
  "dependencies": {
    "babel-cli": "^6.5.1",
    "babel-preset-es2015": "^6.5.0"
  }
}
```

express 모듈 설치
```
$ npm install express@4.13.4 --save
```

index.js
```
import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.json({staus: "NTask API"}));

app.listen(PORT, () => console.log(`NTask API - PORT ${PORT}`));
```

start the server
```
$ npm start
```

open browser and go to: localhost:3000

## 4.3 Implementing a simple and static resource

index.js
```
import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.json({staus: "NTask API"}));

app.get("/tasks", (req, res) => {
  res.json({
    tasks: [
      {title: "Buy some shoes"},
      {title: "Fix notebook"}
    ]
  });
});

app.listen(PORT, () => console.log(`NTask API - PORT ${PORT}`));
```

stop the server Control+C and run npm start again.

localhost:3000/tasks

```
import express from "express";

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

app.get("/", (req, res) => res.json({staus: "NTask API"}));

app.get("/tasks", (req, res) => {
  res.json({
    tasks: [
      {title: "Buy some shoes"},
      {title: "Fix notebook"}
    ]
  });
});

app.listen(PORT, () => console.log(`NTask API - PORT ${PORT}`));
```

## 4.4 Arranging the loading of modules
```
$ npm install consign@0.1.2 --save
```

```
$ mkdir routes
```

routes/index.js
```
module.exports = app => {
  app.get("/", (req, res) => {
    res.json({status: "NTask API"});
  });
};

```

routes/tasks.js
```
module.exports = app => {
  app.get("/tasks", (req, res) => {
    res.json({
      tasks: [
        {title: "Buy some shoes"},
        {title: "Fix notebook"}
      ]
    });
  });
};
```

```
$ mkdir models
```


link
-https://babeljs.io/docs/setup/#babel_cli
