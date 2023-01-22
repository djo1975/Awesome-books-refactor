/* eslint-disable import/prefer-default-export */
import { Book } from './books.js';

export class BookCollection {
  constructor() {
    this.collection = [];
    this.load();
  }

  load() {
    if (localStorage.getItem('bookCollection')) {
      this.collection = JSON.parse(localStorage.getItem('bookCollection')).map((book) => new Book(book.title, book.author, book.id));
    }
  }

  add(title, author) {
    const newBook = new Book(title, author, Date.now());
    this.collection.push(newBook);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }

  remove(id) {
    this.collection = this.collection.filter((book) => book.id !== id);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
  }

  display() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    this.collection.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.id = `book-${book.id}`;
      bookDiv.innerHTML = `
            <h2 class="author-name">"${book.title}"</h2>
            <h3 class="book-title">by- ${book.author}</h3>
            <button type="submit" id="remove-button">Remove</button>
        `;
      const removeButton = bookDiv.querySelector('#remove-button');
      removeButton.addEventListener('click', () => {
        this.remove(book.id);
        bookDiv.remove();
      });
      bookList.appendChild(bookDiv);
    });
  }
}