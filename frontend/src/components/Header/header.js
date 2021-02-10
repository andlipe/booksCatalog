class Header {
    mount() {
        const header = document.getElementById("headerContainer")
        const titleH1 = `
        <h1>Bookshelf</h1>
        `

        header.innerHTML = titleH1;

        return header;
    }
}

export default Header;