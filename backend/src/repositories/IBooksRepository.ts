import Book from "../Database/Entities/book";


export default interface IBooksRepository {
  findAll(): Promise<Book[]>;
  findByISBN(title: string): Promise<Book | undefined>;
  create(data: any): Promise<Book>;
  save(book: Book): Promise<Book>;
}
