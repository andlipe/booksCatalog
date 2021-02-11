import placeholder from '../../assets/images/imageplaceholder.png';
import './book.scss';
class Book {
    constructor() {
        this.div = document.createElement('div');
        this.modal = document.createElement('div');
    }

    mount({id, ISBN, title, subtitle, price, description}) {
        
        const book =  `
            <div id=${id} class="book">
                <img src=${placeholder} />
                <span> ${ISBN} </span>
                <h1> ${title} </h1>
                <span> ${subtitle} </span>
                <span> R$ ${price} </span>
            </div>
        `

        return book;
    }

    handleOpenBookModal(data) {
        document.getElementById(data.id).addEventListener('click', () => {
            const modalData = `
                <img src=${placeholder} />
                <div> 
                    <span> ${data.ISBN} </span>
                    <h1> ${data.title} </h1>
                    <span> ${data.subtitle} </span>
                    <p> ${data.description} </p>
                    <span> R$ ${data.price} </span>
                </div>
            `;

            const modalContent = document.getElementById('modalContent');

            modalContent.innerHTML = modalData;
            document.getElementById('modal').style.display = 'flex';
            return modalContent;
        })
    }
}

export default Book;