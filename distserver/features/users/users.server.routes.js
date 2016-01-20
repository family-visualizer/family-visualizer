'use strict';

var Ctrl = require('./users.server.controller');

module.exports = function (app) {

    app.route('/api/user').post(Ctrl.saveUser);
};