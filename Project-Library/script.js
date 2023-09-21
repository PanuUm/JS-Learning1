const showButton = document.getElementById("showDialog");
const addBook = document.getElementById("addBook");

// Show modal
showButton.addEventListener("click", () => {
    addBook.showModal();
  });

const myLibrary = [];

for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[newBook]);
}

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookOptions.value);
  myLibrary.push(newBook);

  let bookSubmit = document.querySelector(".submit");
  bookSubmit.addEventListener("click", addBookToLibrary);
}