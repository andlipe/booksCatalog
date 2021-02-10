import { getRepository, Repository } from 'typeorm';

import Book from '../Database/Entities/book';
import IBooksRepository from './IBooksRepository';

interface ICreateBookDTO {
    ISBN: string;
    title: string;
    subtitle: string;
    price: number;
    description: string;
}



class BooksRepository implements IBooksRepository {
    private ormRepository: Repository<Book>;
    constructor() {
    this.ormRepository = getRepository(Book);
    }

    public async findAll(): Promise<Book[]> {
    const book = await this.ormRepository.find();
    return book;
    }

    public async findByISBN(ISBN: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne({where: {ISBN}});
    return book;
    }

    public async create(bookData: ICreateBookDTO): Promise<Book>{
    const book = this.ormRepository.create(bookData);

    await this.ormRepository.save(book);

    return book;
    }

    public async save(book: Book): Promise<Book> {
    return this.ormRepository.save(book);
    }
}

export default BooksRepository;
