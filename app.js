var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Setting up template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

//Listen to port
app.listen(3001);
console.log('Listening to port 3001 of localhost');
