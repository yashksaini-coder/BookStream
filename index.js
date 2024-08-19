const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

    // adding a book
    const books_collection = client.db("bookStore").collection("books");
    app.post('/uploadbook', async (req, res) => {
        const newBook = req.body;
        const result = books_collection.insertOne(newBook);
        res.send(result);
    });

    // getting all books
    // app.get('/allbooks', async (req, res) => {
    //     const allBooks = books_collection.find()
    //     const result = await allBooks.toArray();
    //     res.send(result);
    // });

    // updating a book
    app.patch('/book/:id', async (req, res) => {
        const id = req.params.id;
        const updatedBook = req.body;
        const filter = { _id: new ObjectId(id) };
        const updatedoc = {
          $set: {
            ...updatedBook
          },
        };
        const options = { upsert: false }; // Set upsert to false to prevent creating a new tuple with duplicate id
        const result = await books_collection.updateOne(filter, updatedoc, options);
        res.send(result);
    });

    // deleting a book
    app.delete('/book/:id', async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await books_collection.deleteOne(filter);
        res.send(result);
    });

    // Find by category
    app.get('/allbooks', async (req, res) => {
      let query = {};
      if (req.query?.genre) {
        query = { genre: req.query.genre };
      }
      const result = await books_collection.find(query).toArray();
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