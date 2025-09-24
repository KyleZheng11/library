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
    bookList.innerHTML = "";
    library.forEach(book => {
        const li = document.createElement("li");
        li.id = book.id;
        li.innerHTML = 
            `Title: ${book.title}<br>` +
            `Author: ${book.author}<br>` +
            `Pages: ${book.pages}<br>` +
            `Status: ${book.read ? "Read" : "Not Read"}`
        const button = document.createElement("button");
        button.textContent = "Remove";
        button.addEventListener("click", () => removeBook(book.id));
        li.appendChild(button);
        bookList.appendChild(li);
    });
}

function removeBook(bookId) {
    const bookToRemove = document.getElementById(bookId);
    const bookList = document.getElementById("book-list");
    bookList.removeChild(bookToRemove);
}

const form = document.getElementById("book-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").value;
    addBookToLibrary(myLibrary, title, author, pages, readStatus);
    displayLibrary(myLibrary);
});



addBookToLibrary(myLibrary, "LOTR", "JRR-Tolkien", 800, true);
addBookToLibrary(myLibrary, "Star Wars", "George Lucas", 200, true);
addBookToLibrary(myLibrary, "The Witcher", "Andrej Sapkowski", 300, true);
addBookToLibrary(myLibrary, "The Hobbit", "JRR-Tolkien", 600, false);
displayLibrary(myLibrary);
