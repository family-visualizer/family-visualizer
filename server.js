// Heroku sets the value of process.env.NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


// Heroku sets the port, but we also need a port for development
var port = process.env.PORT || 3000;


// Including the configured express and mongoose objects
var mongoose = require('./server/config/mongoose');


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

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
	done(null, obj);
});


var FamilySearchStrategy = require('passport-familysearch').Strategy;

passport.use(new FamilySearchStrategy({
	authorizationURL: 'https://sandbox.familysearch.org/cis-web/oauth2/v3/authorization',
    tokenURL: 'https://sandbox.familysearch.org/cis-web/oauth2/v3/token',
    devKey: "a02j000000BpvVCAAZ",
    callbackURL: "http://localhost:3000/auth/familysearch/callback",
	environment: 'sandbox'
},
	function (accessToken, refreshToken, profile, done) {
		console.log("access token:", accessToken);
		console.log("profile", profile);
		return done(null, profile);
	}
	));


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




app.use(express.static('./public/'));

// Let's listen for incoming calls!
app.listen(port, function () {
    console.log('listening on ' + port);
});