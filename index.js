const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


app.get('/', (req, res) => {
    res.send('Welcome to the Book Store!');
});

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

