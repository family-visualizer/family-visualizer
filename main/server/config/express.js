// EXPRESS CONFIGURATION FILE

// node libraries and configuration file
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    config = require('./config');


module.exports = function () {

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
    require('../features/friends/friend.server.routes')(app);


    // THIS WILL BE THE ROOT OF THE ANGULAR APP
    // the route is relative to the root of the project
    // app.use(express.static('../../../../public/main/client'));


    return app;
};