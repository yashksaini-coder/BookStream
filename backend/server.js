require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db=require('./config/mongoose-connection');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
