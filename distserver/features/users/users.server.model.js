'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
				displayName: { type: String, default: "me" },
				personId: { type: String },
				email: { type: String },
				accessToken: { type: String }
				//birthdate?
});

module.exports = mongoose.model('User', UserSchema);