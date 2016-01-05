// // var passport = require('passport');
// import passport from 'passport';

// module.exports = app => {

// 	app.use(passport.initialize());

// 	app.route('/auth/familysearch')
// 		.get(passport.authenticate('familysearch'));

// 	app.route('/auth/familysearch/callback')
// 		.get(passport.authenticate('familysearch', { failureRedirect: '/' }),
// 		function (req, res) {
// 			res.redirect('http://localhost:3000/');
// 		});

// 	app.route('/logout')
// 		.get(function (req, res) {
// 			req.logout();
// 			res.redirect('/');
// 		});				

// 	// app.get('/auth/familysearch',
// 	// 	passport.authenticate('familysearch'));

// 	// app.get('/auth/familysearch/callback',
// 	// 	passport.authenticate('familysearch', { failureRedirect: '/' }),
// 	// 	function (req, res) {
// 	// 		res.redirect('http://localhost:3000/');

// 	// 	});

// 	// app.get('/logout', function (req, res) {
// 	// 	req.logout();
// 	// 	res.redirect('/');
// 	// });

// };

// // var Ctrl = require('./friend.server.controller');

// // module.exports = function (app) {

// //     app.route('/api/friends')
// //         .post(Ctrl.postFriend)
// //         .get(Ctrl.getFriends);

// //     app.route('/api/friends/:id')
// //         .get(Ctrl.getOneFriend)
// //         .put(Ctrl.putFriend)
// //         .delete(Ctrl.deleteFriend);
// // };
"use strict";