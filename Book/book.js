document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', clicked)
  })
  
function render() {
  for (i = 0; i < myLibrary.length; i++) {
    let info = myLibrary[i].info()
    let readstatus = myLibrary[i].ReadStatus()
    const element = document.createElement("div");
    const p = document.createElement("p");
    const read = document.createElement("p");
    const removebutton = document.createElement(`button`);
    const changereadstatus = document.createElement(`button`);
    read.dataset.key = `read${i}`
    read.textContent = readstatus
    p.textContent = info
    element.style.width = "200px"
    element.style.height = "250px"
    removebutton.dataset.key = i
    removebutton.textContent = `Remove Book`
    removebutton.className = 'btn btn-primary'
    removebutton.addEventListener('click', function () {
      myLibrary.splice(event.target.dataset.key, 1)
      removebutton.parentElement.remove()
    })
    changereadstatus.textContent = "Change reading status"
    changereadstatus.className = 'btn btn-success'
    changereadstatus.addEventListener("click", () => {
      ChangeReadingStatus(removebutton.dataset.key)
    })
    document.querySelector("#booksplace").appendChild(element)
    element.appendChild(p)
    element.appendChild(read)
    element.appendChild(removebutton)
    element.appendChild(changereadstatus)


  }
}
function ChangeReadingStatus(key) {
  let SpecificBook = myLibrary[key]
  let readingstatus = document.querySelector(`[data-key='read${key}']`)
  if (SpecificBook.read == "true") {
    SpecificBook.read = "false"
    readingstatus.textContent = "You still have not read this book" 
   }
  else {
    SpecificBook.read = "true"
    readingstatus.textContent = "You have read this book" 
  }
  
}

function clicked () {
  if (event.target.id == 'add') document.querySelector('form').style.visibility = 'visible'
  if (event.target.id == 'addbook') {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let read = "You still have not read this book"
    if (document.getElementById('read').checked) read = "You have read this book"
    const emailError = document.querySelector('#error');
    if(!title.validity.valid || !author.validity.valid || !pages.validity.valid) {
      ShowError();
      return false
    }
    function ShowError() {
      if (title.validity.valueMissing || author.validity.valueMissing || pages.validity.valueMissing) {
        emailError.textContent = 'You need to enter some letters';
        emailError.className = 'error active';
      
    }
  }
    let NewBook = new Book(title.value, author.value, pages.value, read)
    addBookToLibrary(NewBook)
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    document.getElementById('read').value = ""
    document.querySelector('form').style.visibility = 'hidden'
    event.preventDefault()

  }
}  
let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

  }
}



function addBookToLibrary(NewBook) {
  myLibrary.push(NewBook)
  localStorage.setItem('library',JSON.stringify(myLibrary));

}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}`
  
}
Book.prototype.ReadStatus = function() {
  return `${this.read}`

}


