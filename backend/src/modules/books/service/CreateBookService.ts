import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import { injectable, inject } from 'tsyringe';
import Book from '@modules/books/infra/typeorm/Entities/book';

interface IRequest {
    ISBN: string;
    title: string;
    subtitle: string;
    price: number;
    description: string;
}

@injectable()
class CreateBookService {
    constructor(
        @inject('BooksRepository')
        private booksRepository: IBooksRepository,
    ) {}
    public async execute({ ISBN, title, subtitle, price, description }: IRequest): Promise<Book> {
    
        const isExists = await this.booksRepository.findByISBN(ISBN);

        if(isExists) {
            throw new Error("This book is already on system");
        }

        const book = await this.booksRepository.create({
            ISBN, 
            title, 
            subtitle, 
            price, 
            description
        });

        return book;
}
}

export default CreateBookService;
