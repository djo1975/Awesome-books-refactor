/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { BookCollection } from './modules/book-collection.js';
import { addBookForm } from './modules/add-book-form.js';
import { display } from './modules/display.js';
import { showDateTime } from './modules/datetime.js';

const bookCollection = new BookCollection();
display();
addBookForm();
showDateTime();
