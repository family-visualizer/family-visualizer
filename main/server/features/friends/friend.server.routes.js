var Ctrl = require('./friend.server.controller');

module.exports = function (app) {

    app.route('/api/friends')
        .post(Ctrl.postFriend)
        .get(Ctrl.getFriends);

    app.route('/api/friends/:id')
        .get(Ctrl.getOneFriend)
        .put(Ctrl.putFriend)
        .delete(Ctrl.deleteFriend);
};