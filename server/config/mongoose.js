// MONGOOSE CONFIGURATION FILE

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    return db;
};