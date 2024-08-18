const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
app.use(express.json());

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

    const books_collection = client.db("bookStore").collection("books");
    app.post('/uploadbook', async (req, res) => {
        const newBook = req.body;
        const result = books_collection.insertOne(newBook);
        res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});