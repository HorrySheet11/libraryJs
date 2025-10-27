const myLibrary = [];

const bookList = document.getElementById('bookList');
const button = document.getElementById('addBookBtn');

const authorInput = document.getElementById('authorName');
const titleInput = document.getElementById('bookName');

function Book(title,author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author) {
    const newBook = new Book(title,author);
    myLibrary.push(newBook);
    myLibrary.map(book => { 
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
        bookList.appendChild(newBook);
    });
}

// addBookToLibrary("1984","George Orwell");
// addBookToLibrary("To Kill a Mockingbird","Harper Lee");

console.log(myLibrary);

button.addEventListener('click', () => {
    const title = titleInput.value;
    const author = authorInput.value;
    bookList.innerHTML = '';
    addBookToLibrary(title,author);
    titleInput.value = '';
    authorInput.value = '';
});