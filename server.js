// Heroku sets the value of process.env.NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Heroku sets the port, but we also need a port for development
var port = process.env.PORT || 8000;


// Including the configured express and mongoose objects
var mongoose = require('./public/scripts/config/mongoose');

// EXPRESS CONFIGURATION FILE

// node libraries and configuration file
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');
    // config = require('./config');

    var app = express();

    // MIDDLEWARE NEEDED BOTH FOR DEV AND PRODUCTION

    // fixes cross-origin issues
    app.use(cors());

    // creates and populates the req.body object
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));

    // HERE WE CONFIGURE THE ROUTES
    require('./public/scripts/features/friends/friend.server.routes')(app);


// Let's run this!
var db = mongoose(),
    app = express();

app.use(express.static('./public/'));

// Let's listen for incoming calls!
app.listen(port, function () {
    console.log('listening on ' + port);
});