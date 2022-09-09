var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	username: String,
	password: String,
	email: String,
	phone: Number,
	credits: {
		type:Number,
		default: 10,
	}
});
user = mongoose.model('user', userSchema);

module.exports = user;