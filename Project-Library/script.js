const showButton = document.getElementById("showDialog");
const addBook = document.getElementById("addBook");

let bookshelf = document.getElementById("bookshelf");

// Show modal
// showButton.addEventListener("click", () => {
//     addBook.showModal();
//   });

const myLibrary = [
  {bookTitle: 'The Green Mile', 
  author: 'Stephen King', 
  read: 'yes'},
  {bookTitle: 'Harry Potter', 
  author: 'J. K. Rowling', 
  read: 'no'},
];

function displayBook() {
  let html = "<table  class='table'>";
  setTimeout(() => {
    html+="<thead>";
    html+="<tr>";
    html+="<td>"+'No.'+"</td>";
    html+="<td>"+'Title'+"</td>";
    html+="<td>"+'Author'+"</td>";
    html+="<td>"+'Read'+"</td>";
    html+="<td>"+'Action'+"</td>";
    html+="</tr>";
    html+="</thead>";
    for (let i = 0; i <myLibrary.length; i++) {
      let sno=i+1;
      html+="<tr>";
      html+="<td>"+ sno +"</td>";
      html+="<td>"+ myLibrary[i].bookTitle+"</td>";
      html+="<td>"+ myLibrary[i].author+"</td>";
      html+="<td>"+ myLibrary[i].read+"</td>";
      html+="<td>"+ `<button type="button" class="btn btn-remove" onclick='removeItem(${myLibrary[i].id})'>Remove</button>`+"</td>";
      html+="</tr>";

    }
    html+="</table>";
    document.getElementById("table").innerHTML =html
  }, 200);
}

displayBook();

function addOnClick() {
  let bookTitle = document.getElementById('bookTitle').value;
  let author = document.getElementById('author').value;
  let read = document.getElementById('read').value;

  if (bookTitle && author && read) {
    let id= myLibrary.length +1;
    myLibrary.push({bookTitle:bookTitle, author:author, read:read, id:id})
    displayBook();
    clearItems();
  }
}

function clearItems() {
  document.getElementById('bookTitle').value ='';
  document.getElementById('author').value ='';
  document.getElementById('read').value ='';
}

function removeItem(rec) {
  console.log(rec);

  let filter = myLibrary.filter((a,i)=>{
    if(rec == a.id){
      myLibrary.splice(i,1);
      displayBook();
    }
  })
}