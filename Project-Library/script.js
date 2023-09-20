const showButton = document.getElementById("showDialog");
const addBook = document.getElementById("addBook");
const outputBox = document.querySelector("output");
const selectEl = addBook.querySelector("select");
const confirmBtn = addBook.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
    addBook.showModal();
  });

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}