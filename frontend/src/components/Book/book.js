class Book {
    constructor() {
        this.div = document.createElement('div');

    }
    mount({id, ISBN, title, subtitle, price, description}) {
        
        const book = `
            <div id=${id} class="book">
                <h1> ${title} </h1>
                <span> ${subtitle} </span>
                <p> R$ ${price} </p>
                <p> ${description} </p>
            </div>
        `
        
        return book;
    }
}

export default Book;