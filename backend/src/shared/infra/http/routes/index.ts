import { Router } from 'express';
import BooksRouter from '@modules/books/infra/http/routes/books.routes';
const routes = Router();

routes.use('/books', BooksRouter);

export default routes;