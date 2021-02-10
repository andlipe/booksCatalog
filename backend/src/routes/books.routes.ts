import BooksController from "../controllers/booksController";
import { Router } from "express";

const BooksRouter = Router();
const booksController = new BooksController();

BooksRouter.get('/', booksController.list);

BooksRouter.post('/create', booksController.create);

export default BooksRouter;