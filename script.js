const myLibrary = [];

const bookList = document.getElementById("bookList");
const button = document.getElementById("addBookBtn");

const addNewBook = document.getElementById("addNewBook");
const addBookDialog = document.getElementById("addBookDialog");

const authorInput = document.getElementById("authorName");
const titleInput = document.getElementById("bookName");
const pageCount = document.getElementById("pageCount");
const readStatus = document.getElementById("readYes");

if (bookList.innerHTML == "") {
  bookList.innerHTML = "<p>No books in library</p>";
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function createBook() {
    myLibrary.map((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.innerHTML = `<h3>${book.title}</h3> 
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button onclick="book.changeReadStatus()">Read: ${book.read}</button>
        <button class="removeBtn" onclick="removeBook(Array.from(this.parentElement.parentElement).indexOf(this.parentElement
        ))">Remove Book</button>
        `;
    bookList.appendChild(newBook);
    });
    return bookList;
}

function addBookToLibrary(title, author, pages, readStatus) {
  if (title === "" || author === "" || pages === "") {
    alert("Please enter all book information.");
    return;
  }
  readStatus == "Yes" ? readStatus : (readStatus = "No");
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  myLibrary.map((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.propertyIndex = myLibrary.indexOf(book);
    newBook.innerHTML = `<h3>${book.title}</h3>
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read}</p>
        <button class="removeBtn" onclick="removeBook(Array.from(this.parentElement.parentElement).indexOf(this.parentElement
        ))">Remove Book</button>
        `;
    bookList.appendChild(newBook);
  });
  addBookDialog.close();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  bookList.innerHTML = "";
  myLibrary.map((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.innerHTML = `<h3>${book.title}</h3> 
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button onclick="book.changeReadStatus()">Read: ${book.read}</button>
        <button class="removeBtn" onclick="removeBook(Array.from(this.parentElement.parentElement).indexOf(this.parentElement
        ))">Remove Book</button>
        `;
    bookList.appendChild(newBook);
  });
}

button.addEventListener("click", () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pageCount.value;
  const read = readStatus.value;
  bookList.innerHTML = "";
  addBookToLibrary(title, author, pages, read);
  titleInput.value = "";
  authorInput.value = "";
  pageCount.value = "";
  readStatus.value = "";
});

addNewBook.addEventListener("click", () => {
  addBookDialog.showModal();
});

Book.prototype.changeReadStatus = function () {
  this.read = this.read === "Yes" ? "No" : "Yes";
  bookList.innerHTML = "";
  myLibrary.map((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.innerHTML = `<h3>${book.title}</h3> 
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button onclick="book.changeReadStatus()">Read: ${book.read}</button>
        <button class="removeBtn" onclick="removeBook(Array.from(this.parentElement.parentElement).indexOf(this.parentElement
        ))">Remove Book</button>
        `;
    bookList.appendChild(newBook);
  });
}