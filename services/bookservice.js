import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async (request, response) =>{
    const books = await bookModel.fetchAllBooks();
    
}