import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  return await bookModel.fetchAllBooks();
};

export const createBook = async (book) => {
  const result = await bookModel.insert(book);
  return result.insertId;
};