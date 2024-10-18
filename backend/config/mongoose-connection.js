
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

module.exports=mongoose.connection;