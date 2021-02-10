import IBooksRepository from 'repositories/IBooksRepository';
import { injectable, inject } from 'tsyringe';
import Book from '../Database/Entities/book';

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
