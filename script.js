const myLibrary = [];

function Book(name, author) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
}

function addBookToLibrary(library, name, author) {
    this.library.add(new Book(name, author))
}

function displayLibrary(library) {
    for (let i = 0; i < this.library.length; i++) 
        {
            console.log("Book: " + this.library[i].name 
                + " Author: " + this.library[i].author 
                + " ID: " + this.library[i].randomUUID
            );
        }
}