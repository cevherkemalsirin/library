"use strict"

const bookModal = document.querySelector(".bookModal");
const modalCloseBtn = document.querySelector(".closeBtn");
const bookAddBtn = document.querySelector(".addBookBtn");

const libraryBooks = [];

function Book(title, author, pageNum, isRead)
{
    title,
    author,
    pageNum,
    isRead
};

Book.prototype.Info = function()
{
    let isReadStr = isRead ? "is read." : "is not read yet.";
    return `${title} by ${author} ${pageNum} pages ${isReadStr}`;
};

bookAddBtn.addEventListener("click", ()=>{
    bookModal.showModal();
});

modalCloseBtn.addEventListener("click", ()=>{
    bookModal.close();
});
