import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import { injectable, inject } from 'tsyringe';
import Book from '@modules/books/infra/typeorm/Entities/book';

@injectable()
class ListBooksService {
    constructor(
        @inject('BooksRepository')
        private booksRepository: IBooksRepository,
    ) {}
    public async execute(): Promise<Book[]> {
    
        const book = await this.booksRepository.findAll();

        return book;
}
}

export default ListBooksService;
