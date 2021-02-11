import { Request, Response } from 'express';
import CreateBookService from '@modules/books/service/CreateBookService';
import { container } from 'tsyringe';
import ListBooksService from '@modules/books/service/ListBooksService';

export default class BooksController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { 
      ISBN, 
      title, 
      subtitle, 
      price, 
      description 
    } = req.body;

    const createBook = container.resolve(CreateBookService);

    const book = await createBook.execute({ 
      ISBN, 
      title, 
      subtitle, 
      price, 
      description  
    });

    return res.json(book);
  }

  public async list(req: Request, res: Response): Promise<any> {

    const listBooks = container.resolve(ListBooksService);

    const book = await listBooks.execute();

    return res.json(book);
  }
}
