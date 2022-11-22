const express = require('express'); //express - name space 
const routes = require('./routes/index');
const bodyParser = require('body-parser'); //to read data using the POST method

const app_express = express(); //Node.Express - the most popular framework for creating web applications 
app_express.use(express.static(__dirname + '/public'));
app_express.set('view engine', 'hbs'); //Declaration of the module hbs

app_express.use(bodyParser.json());
app_express.use(bodyParser.urlencoded({ extended: true }));

app_express.use('/', routes);
//app_express.use('table', routes);

var hbs = require('hbs'); //Hbs engine template - declared to use partial views
hbs.registerPartials(__dirname + '/views/partials'); //activation folder partials

module.exports = app_express;
