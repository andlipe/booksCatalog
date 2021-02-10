import { Router } from 'express';
import BooksRouter from './books'
const routes = Router();

routes.use('/books', BooksRouter);

export default routes;