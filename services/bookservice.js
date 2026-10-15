import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  return await bookModel.fetchAllBooks();
};

export const createBook = async (book) => {
  const result = await bookModel.insert(book);
  return result.insertId;
};

export const updateBook = async (book) => {
  const updatedBook = await bookModel.update(book);
  return updatedBook;
}

export const deleteBook = async (id) => {
  const deletedBook = await bookModel.remove(id);
  return deletedBook;
}