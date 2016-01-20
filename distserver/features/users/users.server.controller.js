'use strict';

var User = require('./users.server.model');

exports.saveUser = function (req, res) {
	console.log(req.body);
	var user = new User(req.body);

	user.save(function (err, data) {
		if (err) {
			res.send(err);
		} else {
			res.json(data);
		}
	});
};