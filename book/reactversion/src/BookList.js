import React from 'react'
import Book from './Book'

export default function BookList({ books, ChangeBookStatus }) {
    return (
        books.map(book => { return <Book book={book} ChangeBookStatus={ChangeBookStatus} key={ book.id}/> }
    )
    )
}
