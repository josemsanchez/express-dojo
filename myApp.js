const { request, response } = require('express');
var express = require('express');
require('dotenv').config();
var app = express();

/** --> 7)Mount the logger middleware */
app.use( (request, response, next) => {
    console.log( request.method + ' ' + request.path + ' - ' + request.ip)
    next()
})

/** 1)Meet the Node console */
console.log("Hello World");

/** 2)A first working Express server */
/*app.get('/', (request, response) => {
    response.send("Hello Express")
})*/

/** 3)Serve an HTML file */
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/views/index.html")
})

/** 4)Serve static assets */
app.use("/public", express.static(__dirname + '/public'))

/** 5)Serve JSON on a Specific Route */
let message = {message: "Hello json"};
/*app.get('/json', (request, response) => {
	response.json(message)
})*/

/** 6)Use the .env to configure the app */
app.get('/json', (request, response) => {
	if (process.env.MESSAGE_STYLE === 'uppercase'){
        response.json({message: "HELLO JSON"})
    }else {
        response.json(message)
    }
})

/** 8)Chaining middleware. A Time server */
app.get('/now', (request, response, next) => {
    request.time = new Date().toString()
    next()
}, (request, response) => {
    response.json({'time': request.time })
})

/** 9)Get input from client - Route parameters */
app.get('/:word/echo', (request, response) => {
    response.json({echo: request.params.word})
})







 module.exports = app;
