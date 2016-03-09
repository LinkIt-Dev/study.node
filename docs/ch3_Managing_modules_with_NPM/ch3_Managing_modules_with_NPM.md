# 3 Managing modules with NPM

## 3.1 What does NPM do?
NPM(Node Package Manager)
0.6.X Node.js version
230k of modules
+149 million downloads are made daily
+3.4k million downloads are made monthly

## 3.2 Top NPM commands
```
$ npm init
$ npm install module_name
$ npm install -g module_name
$ npm install module_name --save
$ npm install module_name --save-dev
$ npm list
$ npm list -g
$ npm remove module_name
$ npm remove -g module_name
$ npm remove module_name --save
$ npm remove module_name --save-dev
$ npm update module_name
$ npm update -g module_name
$ npm -v
```

## 3.3 Understanding package.json file
```
{
  "name": "my-first-node-app",
  "description": "My first node app",
  "author": "User <user@email.com>",
  "version": "1.2.3",
  "private": true,
  "dependencies": {
    "module-1": "1.0.0",
    "module-2": ">=1.0.0",
    "module-3": "~1.0.0",
    "module-4": "^1.0.0"
  },
  "devDependencies": {
    "module-5": "*"
  }
}
```

1. Major: X.0.0
2. Minor: 0.X.0
3. Patch: 0.0.X

caret (^) vs tilde (~)

~1.0.0 := 1.0.x := <1.1.0
^1.0.0 := 1.x.x := <2.0.0

~3.9.2 := 3.9.x := <3.10.0
^3.9.2 := 3.x.x := <4.0.0

## 3.4 NPM Task automation
```
$ npm run command_name
```

```
{
  "name": "my-first-node-app",
  "description": "My first node app",
  "author": "User <user@email.com>",
  "version": "1.2.3",
  "private": true,
  "scripts": {
    "start": "node app.js",
    "clean": "rm -rf node_modules",
    "test": "node test.js"
  },
  "dependencies": {
    "module-1": "1.0.0",
    "module-2": ">=1.0.0",
    "module-3": "~1.0.0",
    "module-4": "^1.0.0"
  },
  "devDependencies": {
    "module-5": "*"
  }
}
```

shorcut
```
$ npm start
$ npm test
```

link
-https://docs.npmjs.com/
