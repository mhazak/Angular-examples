import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-imperative',
  templateUrl: './imperative.component.html',
  styleUrls: ['./imperative.component.css'],
})
export class ImperativeComponent implements OnInit {
  constructor(private readonly bookService: BookService) {}
  books: Book[] = [];

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .pipe(catchError(() => EMPTY))
      .subscribe({
        next: (books) => {
          console.log('Observable emmited value (next): ', books);
          this.books = books;
        },
        error: (err) => {
          console.error('Error occurs', err);
        },
        complete: () => {
          console.log('Observable completed, unsubscribing!');
        },
      });
  }
}
