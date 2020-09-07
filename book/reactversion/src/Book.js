import React from 'react'

export default function Book( { book, ChangeBookStatus }) {

    function handleBookClick() {
        ChangeBookStatus(book.id)
    }
    return (
        <div>
            <label>
                <div class='books'>
                <span class='forminside'>Title: { book.title }</span>
                <span class='forminside'>Author: { book.author }</span>
                <span class='forminside'>Pages: { book.pages }</span>
                <span class='forminside'>Status: <input type='checkbox' checked={book.done} onChange={handleBookClick}></input></span>
                </div>
            </label>
            
        </div>
    )
}
