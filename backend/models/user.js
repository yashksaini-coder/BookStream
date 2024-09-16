const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://www.gravatar.com/avatar/',
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
    favorites: [
        {
            type: [mongoose.Types.ObjectId],
            ref: 'books',
        },
    ],
    cart: [
        {
            type: [mongoose.Types.ObjectId],
            ref: 'books',
        },
    ],
    orders: [
        {
            type: [mongoose.Types.ObjectId],
            ref: 'order',
        },
    ],
},
    { timestamp: true, }
);

module.exports = mongoose.model('user', userSchema);