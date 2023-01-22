/* eslint-disable import/prefer-default-export */
import { BookCollection } from './book-collection.js';

export function display() {
  const bookCollection = new BookCollection();
  bookCollection.display();
}