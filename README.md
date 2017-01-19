# node-express-es6-dev
A basic Node Express ES6 development server example.

## Installation
```
$ git clone https://github.com/saun4app/node-express-es6-dev.git
$ npm install
```

## Start the web server
```
$ npm start
```
The URL of the web server is `http://localhost:3030` which returns a blank page.


### Examples

#### Passing a string parameter
```
http://localhost:3030/query/hello world
```
returns
```
hello world
```

#### Passing a json parameter
```
http://localhost:3030/json/{"param":"hello"}
```
returns
```
{"param":"hello"}
```

#### Get client IP address
```
http://localhost:3030/ip
```
returns
```
{"clientIp":"::1","clientIpRoutable":false}
```
See https://www.npmjs.com/package/ipware for more details.

## Reference
- http://expressjs.com
- https://babeljs.io
- https://github.com/babel/example-node-server
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/cors
- https://www.npmjs.com/package/ipware
