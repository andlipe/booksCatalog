import { getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import Book from '@modules/books/infra/typeorm/Entities/book';
import IBooksRepository from '@modules/books/repositories/IBooksRepository';

interface ICreateBookDTO {
    ISBN: string;
    title: string;
    subtitle: string;
    price: number;
    description: string;
}



class FakeBooksRepository implements IBooksRepository {
    private books: Book[] = [];

    public async findAll(): Promise<Book[]> {
        const book = this.books;
        return book;
    }

    public async findByISBN(ISBN: string): Promise<Book | undefined> {
        const book = await this.books.find(book => book.ISBN === ISBN);
        return book;
    }

    public async create(
        { 
            ISBN, 
            title, 
            subtitle, 
            price, 
            description
        }: ICreateBookDTO): Promise<Book>{
        const book = new Book();
        
        Object.assign(book, {
            id: uuid(),
            ISBN,
            title,
            subtitle,
            price,
            description
        })
        this.books.push(book);

        return book;
    }

    public async save(book: Book): Promise<Book> {
        const findIndex = this.books.findIndex(
            findBook => findBook.ISBN === book.ISBN,
        );
    
        this.books[findIndex] = book;
    
        return book;
    }
}

export default FakeBooksRepository;

