const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


app.get('/', (req, res) => {
    res.send('Welcome to the Book Store!');
});

app.use(cors());
app.use(express.json());

//mongodb connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin_book_store@cluster0.uvlqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

