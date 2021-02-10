import { Router } from "express";

const BooksRouter = Router();

BooksRouter.get('/', async (request, response) => {
    response.json({ message : 'teste'})
});

export default BooksRouter;