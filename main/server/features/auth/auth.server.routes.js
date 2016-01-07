module.exports = function (app) {

	app.route("/getAuthedUser")
        .get(function (req, res) {
			console.log("here is the req.user", req.user);
            res.status(200).json(req.user);
        });

};