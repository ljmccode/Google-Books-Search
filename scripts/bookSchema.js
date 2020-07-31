const mongoose = require('mongoose');
const db = require('../models');

// Empties the Books collection and inserts the books below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
  );

var BookSchema = new Schema({
    title: String,
    authors: String
    description: String,
    image: String,
    link: String
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;