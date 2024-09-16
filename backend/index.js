const express = require('express');
const app = express();
require('dotenv').config();
require('./conn');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

// Middleware to handle JSON parsing errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({ message: 'Invalid JSON' });
    }
    next();
});

app.get('/', (res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use('/api/v1',userRoutes);
app.use('/api/v1', bookRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

