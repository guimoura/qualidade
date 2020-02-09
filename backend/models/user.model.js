const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({

    userLogin: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userCargo: {
        type: String
    },
    userDepartamento: {
        type: String,
        required: true
    },
    userSuperior: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', User);