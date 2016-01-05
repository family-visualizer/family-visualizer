var User = require('./users.server.model');


exports.saveUser = (req, res) => {
	console.log(req.body);
	var user = new User(req.body);
	
	user.save( (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.json(data);
		}
	});
	
};