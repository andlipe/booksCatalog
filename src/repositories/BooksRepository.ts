import { getRepository, Repository } from 'typeorm';

import Book from '../Database/Entities/book';
import IBookRepository from './IBookRepository';

interface ICreateBookDTO {
    ISBN: string;
    title: string;
    subtitle: string;
    price: number;
    description: string;
}



class BooksRepository implements IBookRepository {
    private ormRepository: Repository<Book>;
    constructor() {
    this.ormRepository = getRepository(Book);
    }

    public async findById(id: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne(id);
    return book;
    }

    public async findByTitle(title: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne({where: {title}});
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
