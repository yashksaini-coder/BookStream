const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {authenticatetoken} = require('./userAuth');
const Book = require('../models/book');

router.post('/add-book', authenticatetoken, async (req, res) => {
    try {
        const {id} = req.headers;
        const user = await User.findById(id);
        if (user.role !== 'admin') {
            return res.status(400).json({ message: "You are not authorized to add a book" });
        }
        
        const newbook = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });
        
        await newbook.save();
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/get-book', async (req, res) => {
    try {
        const {id} = req.headers;
        const book = await Book
            .findById(id)
            .select('-__v');
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put('/update-book', authenticatetoken, async (req, res) => {
    try {
        const {bookid} = req.headers;
        const {url, title, author, price, desc, language} = req.body;

        if (!url || !title || !author || !price || !desc || !language) {
            return res.status(400).json({ message: "Please fill in all the required fields" });
        }

        const book = await Book.findById(bookid);
        if (!book) {
            return res.status(400).json({ message: "Book not found" });
        }
        await Book.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });

        res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete('/delete-book', authenticatetoken, async (req, res) => {
    try {
        const {bookid} = req.headers;
        
        const book = await Book.findByIdAndDelete(bookid);
        if (!book) {
            return res.status(400).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/get-all-books', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/get-recent-books', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 }).limit(5);
        res.status(200).json({
            status: 'success',
            data: books
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get('/get-book-by-id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.json({
            status: 'success',
            data: book,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
module.exports = router;