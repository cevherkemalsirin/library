"use strict"

const bookModal = document.querySelector(".bookModal");
const modalCloseBtn = document.querySelector(".closeBtn");
const bookAddBtn = document.querySelector(".addBookBtn");
const submitBtn = document.querySelector(".bookSubmit");
const cardContainer = document.querySelector(".bottom-part");

//Form variables for book
const iBookName = document.querySelector("#bookName");
const iPageNumber = document.querySelector("#pageNum");
const iBookAuthor = document.querySelector("#author");
const iBookIsread = document.querySelector("#isRead");

const libraryBooks = [];

function Book(title, author, pageNum, isRead)
{
    this.title = title,
    this.author = author,
    this.pageNum = pageNum,
    this.isRead = isRead
};

Book.prototype.Info = function()
{
    let isReadStr= this.isRead ?  "is read." : "is not read yet.";
    return `${this.title} by ${this.author} ${this.pageNum} pages ${isReadStr}`;
};

Book.prototype.ToggleRead = function()
{
    if(this.isRead !== undefined)
    {
      this.isRead = !this.isRead;
    }
}

function AddBookToLibrary(){
    const newBook = new Book(
        iBookName.value,
        iBookAuthor.value,
        iPageNumber.value,
        iBookIsread.checked
    );
    console.log(newBook.Info());
    libraryBooks.push(newBook);
    UpdateHtml(newBook);
}

function UpdateHtml(newbook){
cardContainer.insertAdjacentHTML("beforeend", `  
                <div class="card">
                <p class="bookTitle">
                    ${newbook.title}
                </p>
                <p class="pageNum">
                    ${newbook.pageNum}
                </p>
                <p class="author">
                     ${newbook.author}
                </p>
                <button class="read">Read</button>
                <button class="remove">Remove</button>
            </div>`);
}

bookAddBtn.addEventListener("click", ()=>{
    bookModal.showModal();
});

modalCloseBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    bookModal.close();
});


submitBtn.addEventListener("click", (e)=>{

    if (iBookName.value && iPageNumber.value && iBookAuthor.value) 
    {
       AddBookToLibrary();
       e.preventDefault();
       bookModal.close();
    }

});