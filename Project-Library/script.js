const showButton = document.getElementById("showDialog");
const addBook = document.getElementById("addBook");
let bookTitle = '';
let bookAuthor = '';
let bookRead = '';
let bookshelf = '';

// Show modal
showButton.addEventListener("click", () => {
    addBook.showModal();
  });

const myLibrary = [
  {bookTitle: 'The Green Mile', author: 'Stephen King', read: 'yes'},
  {bookTitle: 'Harry Potter', author: 'J. K. Rowling', read: 'no'},
];

myLibrary.forEach(library => {
  for (let value in library) {
    console.log(`${library[value]}`)
  }
})

function Book() {
}

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookRead.value);
  myLibrary.push(newBook);

  let bookSubmit = document.querySelector(".submit");
  bookSubmit.addEventListener("click", addBookToLibrary);
}