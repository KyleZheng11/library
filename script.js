const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary(library, title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

function displayLibrary(library) {
    const bookList = document.getElementById("book-list");
    library.forEach(book => {
        const li = document.createElement("li");
        li.textContent = 
            `Title: ${book.title}\n` +
            `Author: ${book.author}\n` +
            `Pages: ${book.pages}\n` +
            `Status: ${book.read ? "Read" : "Not Read"}\n` +
            `ID: ${book.id}`;
        bookList.appendChild(li);
    });
}


addBookToLibrary(myLibrary, "LOTR", "JRR-Tolkien", 800, true);
addBookToLibrary(myLibrary, "Star Wars", "George Lucas", 200, true);
addBookToLibrary(myLibrary, "The Witcher", "Andrej Sapkowski", 300, true);
addBookToLibrary(myLibrary, "The Hobbit", "JRR-Tolkien", 600, false);
displayLibrary(myLibrary);
