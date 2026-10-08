import * as bookService from '../services/bookservice.js';

export const fetchAllBooks = async (req, res) => {
  try {
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createBook = async (req, res) => {
  try {
    const { name, author } = req.body;
    const book = { name, author };

    const bookId = await bookService.createBook(book);

    res.status(201).json({
      success: true,
      message: bookId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};