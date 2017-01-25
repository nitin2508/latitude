var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userRegistration = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        filename: {
            type: String,
            required: true
        },
        originalname: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    },
    registrationType: {
        type: String,
        required: true,
    },
    numberOfTickets: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});
var UserRegistrations = mongoose.model('UserRegistration', userRegistration);
module.exports = UserRegistrations;
