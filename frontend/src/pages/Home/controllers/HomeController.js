import Header from "../../../components/Header/header";
import Book from "../../../components/Book/book";
import ListBookService from "../services/ListBooksService";
import '../assets/scss/home.scss';
import Modal from "../../../components/Modal/Modal";
import bookSvg from '../../../assets/images/undraw_book_lover_mkck.svg';
class HomeController {
    constructor() {
        this.header = new Header();
        this.bookComponent = new Book();
        this.listBookService = new ListBookService();
        this.modal = new Modal();
        this.rootContainer = document.getElementById("rootContainer");

    }

    async mount() {
        const books = await this.listBookService.execute();
        this.mountPageLayout();
        const bookContainer = document.getElementById("bookContainer")

        books.map(book => {
            bookContainer.innerHTML += this.bookComponent.mount(book)
        })
        
        books.map(book => {
            this.bookComponent.handleOpenBookModal(book);
        })
        this.modal.handleCloseModal();
        return this.rootContainer;
    }
    
    mountPageLayout() {
        const svgBook = `
        <div id="bookImg">
            <img src=${bookSvg}>
        </div>
        `;
        const createBookContainer = `<div id="bookContainer"></div>`;
        this.rootContainer.innerHTML = svgBook;
        this.rootContainer.innerHTML += createBookContainer;
        this.rootContainer.innerHTML += this.modal.mount();
        this.header.mount();

        return this.rootContainer;
    }



}

export default HomeController;