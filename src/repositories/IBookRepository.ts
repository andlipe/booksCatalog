import Book from "../Database/Entities/book";


export default interface IBookRepository {
  findById(id: string): Promise<Book | undefined>;
  findByTitle(title: string): Promise<Book | undefined>;
  create(data: any): Promise<Book>;
  save(book: Book): Promise<Book>;
}
