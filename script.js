"use strict"


function Book(title, author, pageNum, isRead)
{
    title,
    author,
    pageNum,
    isRead
}

Book.prototype.Info()
{
    let isReadStr = isRead ? "is read." : "is not read yet."
    return `${title} by ${author} ${pageNum} pages ${isReadStr}`;
}

