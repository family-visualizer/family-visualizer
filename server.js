// Heroku sets the value of process.env.NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Heroku sets the port, but we also need a port for development
var port = process.env.PORT || 3000;


// Including the configured express and mongoose objects
var mongoose = require('./distserver/config/mongoose');


var express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, cors = require('cors')
	, port = 3000
	, passport = require("passport")
	, db = mongoose();
	
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use(passport.initialize())
	
require('./distserver/config/passport.js')(passport);
require('./distserver/features/users/users.server.routes.js')(app);



passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});




app.get('/auth/familysearch',
	passport.authenticate('familysearch'));


app.get('/auth/familysearch/callback',
	passport.authenticate('familysearch', { failureRedirect: '/' }),
	function (req, res) {
		res.redirect('http://localhost:3000/');

	});

app.get("/getAuthedUser", function (req, res) {
            res.status(200).json(req.user);
			console.log("here is the profile", req.profile);
			console.log("here is the access token", req.accessToken);
        });

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});




app.use(express.static('./public/'));

// Let's listen for incoming calls!
app.listen(port, function () {
    console.log('listening on ' + port);
});
