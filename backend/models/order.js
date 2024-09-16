const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'books',
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'books',
    },
    status: {
        type: String,
        default: 'Order Placed',
        enum: ['Order Placed ', 'Out for Delivery', 'Delivered', 'Cancelled'],
    },
},
    { timestamp: true, }
);

const Order = mongoose.model('Order', orderSchema);