import FakeBooksRepository from "../repositories/fakes/FakeBooksRepository";
import ListBooksService from "./ListBooksService";



let fakeBooksRepository: FakeBooksRepository;
let listBooks: ListBooksService;

describe('ListBooksService', () => {
    beforeEach(() => {
        fakeBooksRepository = new FakeBooksRepository();
        listBooks = new ListBooksService(
            fakeBooksRepository
        )
    })

    it('Should list all books', async () => {
        await fakeBooksRepository.create({
            ISBN: "978-8532530806",
            title: "Harry Potter",
            subtitle: "e o prisioneiro de Azkaban",
            price: 28,
            description: "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria."
        })
        await fakeBooksRepository.create({
            ISBN: "977-8532530806",
            title: "Harry Potter",
            subtitle: "e o prisioneiro de Azkaban",
            price: 28,
            description: "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria."
        })

        const books = await listBooks.execute();

        expect(books.length).toBe(2)

    });
});