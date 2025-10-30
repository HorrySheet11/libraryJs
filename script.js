const myLibrary = [];

const bookList = document.getElementById("bookList");
const button = document.getElementById("addBookBtn");

const addNewBook = document.getElementById("addNewBook");
const addBookDialog = document.getElementById("addBookDialog");

const authorInput = document.getElementById("authorName");
const titleInput = document.getElementById("bookName");
const pageCount = document.getElementById("pageCount");
let readRadio = "";

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

function thisIndex(theIndex) {
  return Array.from(theIndex.parentElement.parentElement.children).indexOf(
    theIndex.parentElement
  );
}

function createBook() {
  myLibrary.map((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.innerHTML = `<h3>${book.title}</h3> 
      <p>By: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <button class="readBtn ${
        book.read == "Yes" ? "read" : "notRead"
      }" onclick="changeReadStatus(thisIndex(this))">Read: ${book.read}</button>
      <button class="removeBtn" onclick="removeBook(thisIndex(this))">Remove Book</button>
      `;
    bookList.appendChild(newBook);
  });
  if (bookList.innerHTML == "") {
    bookList.innerHTML = "<p>No books in library</p>";
  }
  return bookList;
}

function addBookToLibrary(title, author, pages, readStatus) {
  if (title === "" || author === "" || pages === "") {
    alert("Please enter all book information.");
    return;
  }
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  createBook();
  addBookDialog.close();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  bookList.innerHTML = "";
  createBook();
}
let read = "";
button.addEventListener("click", () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pageCount.value;
  if (!readRadio) {
    alert("Please select a read status.");
    return;
  }
  bookList.innerHTML = "";
  addBookToLibrary(title, author, pages, readRadio);
  titleInput.value = authorInput.value = pageCount.value = readRadio.value = "";
});

addNewBook.addEventListener("click", () => {
  addBookDialog.showModal();
});

function changeReadStatus(index) {
  const newRead = myLibrary[index].read;
  myLibrary[index].read = newRead == "Yes" ? "No" : "Yes";
  bookList.innerHTML = "";
  createBook();
}

function cancelForm() {
  addBookDialog.close();
  titleInput.value = authorInput.value = pageCount.value = "";
  let unselect = document.querySelectorAll('input[type="radio"]');
  unselect.forEach((radio) => (radio.checked = false));
}
