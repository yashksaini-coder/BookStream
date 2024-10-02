require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

app.use('/api/auth',authRoutes);

// 404 Error Handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// General Error Handling Middleware
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message,
      data: error.data || null,
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
