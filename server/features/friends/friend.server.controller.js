var Friend = require('./friend.server.model');

// /api/friends (GET)
exports.getFriends = function (req, res, next) {

    Friend.find({}, function (err, friends) {

        if (err) res.status(500).send(err);else res.json(friends);
    });
};

// /api/friends (POST)
exports.postFriend = function (req, res, next) {

    var friend = new Friend(req.body);
    friend.save(function (err) {

        if (err) res.send(err);else res.json(friend);
    });
};

// /api/friends/:id (GET)
exports.getOneFriend = function (req, res, next) {

    Friend.findById(req.params.id, function (err, friend) {

        if (err) res.status(500).send(err);else res.json(friend);
    });
};

// /api/friends/:id (PUT)
exports.putFriend = function (req, res, next) {

    Friend.findById(req.params.id, function (err, friend) {

        if (err) res.status(500).send(err);else {
            friend.name = req.body.name;
            friend.age = req.body.age;
            friend.save(function (err) {

                if (err) res.send(err);else res.json(friend);
            });
        }
    });
};

// /api/friends/:id (DELETE)
exports.deleteFriend = function (req, res, next) {

    Friend.findById(req.params.id, function (err, friend) {

        if (err) res.status(500).send(err);else {
            friend.remove(function (err) {

                if (err) res.status(500).send(err);else res.status(204).send('Removed');
            });
        }
    });
};