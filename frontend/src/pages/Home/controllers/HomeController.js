import Header from "../../../components/Header/header";
import Book from "../../../components/Book/book";
import ListBookService from "../services/ListBooksService";
import '../assets/scss/home.scss';
import Modal from "../../../components/Modal/Modal";
class HomeController {
    async mount() {
        const header = new Header();
        const bookComponent = new Book();
        const listBookService = new ListBookService();
        const modal = new Modal();
        const rootContainer = document.getElementById("rootContainer");

        const books = await listBookService.execute();
        header.mount();
        rootContainer.innerHTML += modal.mount();
        books.map(book => {
            rootContainer.innerHTML += bookComponent.mount(book)
        })
        
        books.map(book => {
            bookComponent.handleOpenBookModal(book);
        })
        modal.handleCloseModal();

    }
    



}

export default HomeController;