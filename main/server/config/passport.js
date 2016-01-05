import { Strategy as FamilySearchStrategy } from 'passport-familysearch';
import keys from "./keys.js";
import User from "../features/users/users.server.model.js";
// var keys = require('./distserver/')

module.exports = passport => {

	console.log("User", User);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((obj, done) => {
		done(null, obj);
	});

	passport.use(new FamilySearchStrategy({
		authorizationURL: keys.authorizationURL
		, tokenURL: keys.tokenURL
		, devKey: keys.devKey
		, callbackURL: keys.callbackURL
		, environment: keys.environment
	},
		(accessToken, refreshToken, profile, done) => {
			
			profile = JSON.parse(profile._raw).users[0];
			
			var query = { 'personId': profile.personId };

            User.findOne(query, function (error, user) {

                if (user) {
                    done(null, user);
					console.log("if is running");
                }
                else {
					console.log("else is running");
                    user = new User;
                   	user.displayName = profile.displayName;
					user.personId = profile.personId;
					user.email = profile.email;
					user.accessToken = accessToken;
                    user.save();
                    done(null, user);
                }
            });
			return done(null, profile);
		}));//heckka comment
};

