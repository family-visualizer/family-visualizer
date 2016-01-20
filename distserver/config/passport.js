"use strict";

var _passportFamilysearch = require("passport-familysearch");

var _keys = require("./keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _usersServerModel = require("../features/users/users.server.model.js");

var _usersServerModel2 = _interopRequireDefault(_usersServerModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var keys = require('./distserver/')

module.exports = function (passport) {

	console.log("User", _usersServerModel2.default);

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (obj, done) {
		done(null, obj);
	});

	passport.use(new _passportFamilysearch.Strategy({
		authorizationURL: _keys2.default.authorizationURL,
		tokenURL: _keys2.default.tokenURL,
		devKey: _keys2.default.devKey,
		callbackURL: _keys2.default.callbackURL,
		environment: _keys2.default.environment
	}, function (accessToken, refreshToken, profile, done) {

		profile = JSON.parse(profile._raw).users[0];

		var query = { 'personId': profile.personId };

		_usersServerModel2.default.findOne(query, function (error, user) {
			if (user) {
				console.log("if is running");
				user.accessToken = accessToken;
				user.save();
				done(null, user);
			} else {
				console.log("else is running");
				user = new _usersServerModel2.default();
				user.displayName = profile.displayName;
				user.personId = profile.personId;
				user.email = profile.email;
				user.accessToken = accessToken;
				user.save();
				done(null, user);
			}
		});
	})); //heckka comment
};