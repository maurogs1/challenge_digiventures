const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    fullname: String,
    email: String,
    username: String,
    password: String,
    country: String,
});

module.exports =  mongoose.model('users', UserSchema);
