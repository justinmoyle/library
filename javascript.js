
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render(){
    let libraryBook = document.querySelector(".library");
    libraryBook.innerHTML = "";
    
    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
            <button class="delete-btn" data-index="${index}">x</button>
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read'}</p>
        `;
        libraryBook.appendChild(card);
    });
    deleteBook();
}

function deleteBook(){
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const index = this.dataset.index;
            myLibrary.splice(index, 1);
            render();
        });
    });
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})

