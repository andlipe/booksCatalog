import Header from "../../../components/Header/header";
import Book from "../../../components/Book/book";
import ListBookService from "../services/ListBooksService";
import '../assets/scss/styles.scss'

class HomeController {
    async mount() {
        const header = new Header();
        const bookComponent = new Book();
        const listBookService = new ListBookService();
        const rootContainer = document.getElementById("rootContainer");

        const books = await listBookService.execute();

        header.mount();
        books.map(book => {
            rootContainer.innerHTML += bookComponent.mount(book)
        })
        
    }
    



}

export default HomeController;