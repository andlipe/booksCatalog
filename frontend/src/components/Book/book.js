import placeholder from '../../assets/images/imageplaceholder.png';
class Book {
    constructor() {
        this.div = document.createElement('div');

    }
    mount({id, ISBN, title, subtitle, price, description}) {
        
        const book = `
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
}

export default Book;