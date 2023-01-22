/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { BookCollection } from './book-collection.js';

export function addBookForm() {
  const addBookForm = document.getElementById('add-book-form');
  const bookCollection = new BookCollection();
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById('book-title').value;
    const authorName = document.getElementById('author-name').value;
    if (bookTitle === '' || authorName === '') {
      // eslint-disable-next-line no-alert
      alert('Please fill all the fields before submitting');
    } else {
      bookCollection.add(bookTitle, authorName);
      document.getElementById('book-title').value = '';
      document.getElementById('author-name').value = '';
      bookCollection.display();
    }
  });
}
