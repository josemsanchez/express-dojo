var express = require('express');
var app = express();

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
app.use(express.static(__dirname + '/public'))
















 module.exports = app;
