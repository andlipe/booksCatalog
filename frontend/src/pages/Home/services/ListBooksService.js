class ListBookService {
    async execute() {

        const books = await fetch('http://localhost:3000/books').then(res => res.json());
        return books
    }
}

export default ListBookService;