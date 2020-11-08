const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    login: String,
    email: String,
    registrationDate: Date,
    lastLoggedIn: Date,
    password: String
});

module.exports = model('User', userSchema);