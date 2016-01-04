var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var FriendSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});


module.exports = mongoose.model('Friend', FriendSchema);