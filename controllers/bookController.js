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
    res.status(error.statusCode).json({ error: error.message})
  }
};


export const editBook = async (req, res) => {
    const { name, author } = req.body;
    const { id } = req.params;
    const book = { id, name, author };

    try {
        const updatedBook = await bookService.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (error) {
        console.error(error);
        res.status(error.statusCode).json({ error: error.message });
      
    }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await bookService.deleteBook(id);

    return res.status(200).json({
      success: true,  
      message: deletedBook
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error: error.message
    });
  }
};