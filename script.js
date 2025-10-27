const myLibrary = [];

function Book(title,author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author) {
    const newBook = new Book(title,author);
    myLibrary.push(newBook);
}

addBookToLibrary("1984","George Orwell");
addBookToLibrary("To Kill a Mockingbird","Harper Lee");

console.log(myLibrary);
