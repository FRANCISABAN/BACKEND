import * as bookModel from '../models/bookModel.js';
import ValidationError from '../utils/ValidationError.js';

export const fetchAllBooks = async () => {
  return await bookModel.fetchAllBooks();
};

const doesBookExist = async (book) => {
  let existing;
  if(Object.hasOwn(book, 'id')) {
    existing = await bookModel.findBookById(book.id);
  } else {
    existing = await bookModel.findBookByNameAndAuthor(book);
  }

  if (existing.length > 0) {
    return true;
  }
  return false;
};

export const createBook = async (book) => {
  if (!book.name || !book.author) {
    throw new ValidationError(404,'Name and author are required');
  }

const existing = await doesBookExist(book);

if (existing) {
  throw new ValidationError(409, 'Book already exist!');
}
  const result = await bookModel.insert(book);
  return result.insertId;
};

export const updateBook = async (book) => {
  if (!book.name || !book.author) {
    throw new ValidationError(404,'Name and author is rquired');
  }
  const existing = await doesBookExist(book);

  if(!existing) {
    throw new ValidationError(404, 'Book does not exist!');
  }
  const updatedBook = await bookModel.update(book);
  return updatedBook;
}

export const deleteBook = async (id) => {
  const existing = await doesBookExist({ id });

  if (!existing) {
    throw new ValidationError(404, 'Book does not exist!');
  }

  const deletedBook = await bookModel.remove(id);
  return deletedBook;
};