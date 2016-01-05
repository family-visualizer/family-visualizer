import { Strategy as FamilySearchStrategy } from 'passport-familysearch';

module.exports = passport => {

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((obj, done) => {
		done(null, obj);
	});

	passport.use(new FamilySearchStrategy({
		authorizationURL: 'https://sandbox.familysearch.org/cis-web/oauth2/v3/authorization',
		tokenURL: 'https://sandbox.familysearch.org/cis-web/oauth2/v3/token',
		devKey: "a02j000000BpvVCAAZ",
		callbackURL: "http://localhost:3000/auth/familysearch/callback",
		environment: 'sandbox'
	}, (accessToken, refreshToken, profile, done) => {

		// import users and stuff here

		console.log("access token:", accessToken);
		console.log("profile", profile);
		return done(null, profile);
	}));
};