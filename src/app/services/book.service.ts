import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Observable<any> {
    const books: Book[] = [
      {
        id: 1,
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        releaseDate: new Date('1960-07-11'),
      },
      {
        id: 2,
        name: '1984',
        author: 'George Orwell',
        releaseDate: new Date('1949-06-08'),
      },
      {
        id: 3,
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        releaseDate: new Date('1925-04-10'),
      },
      {
        id: 4,
        name: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        releaseDate: new Date('1997-06-26'),
      },
      {
        id: 5,
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        releaseDate: new Date('1951-07-16'),
      },
      {
        id: 6,
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        releaseDate: new Date('1813-01-28'),
      },
      {
        id: 7,
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        releaseDate: new Date('1937-09-21'),
      },
      {
        id: 8,
        name: 'The Da Vinci Code',
        author: 'Dan Brown',
        releaseDate: new Date('2003-03-18'),
      },
      {
        id: 9,
        name: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        releaseDate: new Date('1954-07-29'),
      },
      {
        id: 10,
        name: 'The Hunger Games',
        author: 'Suzanne Collins',
        releaseDate: new Date('2008-09-14'),
      },
    ];

    return of(books).pipe(delay(500));
  }
}
