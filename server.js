// Heroku sets the value of process.env.NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Heroku sets the port, but we also need a port for development
var port = process.env.PORT || 3000;


// Including the configured express and mongoose objects
var mongoose = require('./server/config/mongoose');

// EXPRESS CONFIGURATION FILE

// node libraries and configuration file
var   express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
	, passport = require('passport');

    var app = express();

    // MIDDLEWARE NEEDED BOTH FOR DEV AND PRODUCTION

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));

	var passport = require('passport');
	app.use(passport.initialize());
	
	
    // HERE WE CONFIGURE THE ROUTES
    require('./server/friends/friend.server.routes')(app);
	
	app.get('/auth/familysearch',
		passport.authenticate('familysearch'));


	app.get('/auth/familysearch/callback',
		passport.authenticate('familysearch', { failureRedirect: '/' }),
		function (req, res) {
			res.redirect('http://localhost:3000/');

		});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});



// Let's run this!
var db = mongoose(),
    app = express();

app.use(express.static('./public/'));

// Let's listen for incoming calls!
app.listen(port, function () {
    console.log('listening on ' + port);
});