import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import BookList from './BookList'

const LOCAL_STORAGE_KEY = "BooksApp"

function App() {
  const [books, setBooks] = useState([])
  const title = useRef()
      , author = useRef()
      , pages = useRef()
      , done = useRef()

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedBooks) setBooks(storedBooks)
  }, [])    

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books))
  }, [books])    

  function ChangeBookStatus(id) {
    const newBooks = [...books]
    const book = newBooks.find(book => book.id === id)
    book.done = !book.done
    setBooks(newBooks)

  }

  function addBook(event) {
    const booktitle = title.current.value
    if (booktitle === '') return
    const bookauthor = author.current.value
    const bookpages = pages.current.value
    const bookdone = done.current.checked
    setBooks(PrevBooks => {
      return [...PrevBooks, { id: uuidv4(), title: booktitle, author: bookauthor, pages: bookpages, done: bookdone }]
    })
    title.current.value = null
    author.current.value = null
    pages.current.value = null
    done.current.checked = null
    event.preventDefault() // stop refreshing
    
  }
  function ClearBooks() {
    setBooks([])
  }

  return (
    <>
    <form onSubmit= {addBook}>
      <input class='forminside' ref={title} type='text' required  />
      <input class='forminside' ref={author} type='text' required  />
      <input class='forminside' ref={pages} type='number' required />
      <label class='forminside' aria-live="polite" for='check'>Status</label>
      <input class='forminside' id='check' ref={done} type='checkbox' />
      <button class='forminside' type='submit' >Add Book</button>
    </form>
    <button onClick={ClearBooks}>Clear Library</button>
    <div>Your library has {books.length} books</div>
    <BookList books={books} ChangeBookStatus={ChangeBookStatus}/>
    </>
  )
}

export default App;
