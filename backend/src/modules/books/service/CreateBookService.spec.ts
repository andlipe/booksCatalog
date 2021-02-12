import FakeBooksRepository from "../repositories/fakes/FakeBooksRepository";
import CreateBookService from "./CreateBookService";


let fakeBooksRepository: FakeBooksRepository;
let createBooks: CreateBookService;
describe('CreateBookService', () => {
    beforeEach(() => {
        fakeBooksRepository = new FakeBooksRepository();
        createBooks = new CreateBookService(
            fakeBooksRepository
        )
    })
    it('Should be able to create a book', async () => {
        const book = await createBooks.execute({
            ISBN: "978-8532530806",
            title: "Harry Potter",
            subtitle: "e o prisioneiro de Azkaban",
            price: 28,
            description: "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria."
        })

        expect(book.id).toBeDefined();
        expect(book.subtitle).toBe('e o prisioneiro de Azkaban')
    });

    it('Should not be able to create a book with same ISBN from another', async () => {
        const book = await createBooks.execute({
            ISBN: "978-8532530807",
            title: "Harry Potter",
            subtitle: "e o prisioneiro de Azkaban",
            price: 28,
            description: "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria."
        })
        let errorMessage;
        try {
            await createBooks.execute({
                ISBN: "978-8532530807",
                title: "Harry Potter",
                subtitle: "e o prisioneiro de Azkaban",
                price: 28,
                description: "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria."
            })
        } catch (error) {
            errorMessage = error.message
        }

        expect(errorMessage).toBe('This book is already on system');
    });
});