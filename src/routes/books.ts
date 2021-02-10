import { Router } from "express";

const booksRouter = Router();

booksRouter.get('/', async (request, response) => {
    const books = await booksRepository.find();

    return response.json(books)
});